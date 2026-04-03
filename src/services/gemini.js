import { GoogleGenerativeAI } from "@google/generative-ai";

let genAI = null;

// Model fallback chain: try each in order until one works
const MODEL_CHAIN = [
  "gemini-2.5-flash",
  "gemini-1.5-flash",
  "gemini-1.5-pro"
];

/**
 * Initialize the Gemini client with the user's API key.
 */
export function initGemini(apiKey) {
  genAI = new GoogleGenerativeAI(apiKey);
}

/**
 * Check if the Gemini client has been initialized.
 */
export function isGeminiReady() {
  return genAI !== null;
}

/**
 * Parse a quota/rate-limit error into a friendly message.
 */
function parseGeminiError(err) {
  const msg = err?.message || "";
  if (msg.includes("429") || msg.includes("quota") || msg.includes("RESOURCE_EXHAUSTED")) {
    const retryMatch = msg.match(/retry in ([\d.]+)s/i);
    const retryIn = retryMatch ? Math.ceil(parseFloat(retryMatch[1])) : null;
    return retryIn
      ? `API quota exceeded. Please retry in ${retryIn} seconds.`
      : "API quota exceeded. Please wait a moment and try again, or use a different API key.";
  }
  if (msg.includes("API_KEY_INVALID") || msg.includes("401")) {
    return "Invalid API key. Please re-enter your Gemini API key.";
  }
  return msg || "Unknown error from Gemini API.";
}

/**
 * Sleep for `ms` milliseconds.
 */
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

/**
 * Try calling `fn` with each model in the fallback chain.
 * On 429 errors waits briefly before trying the next model.
 */
async function withModelFallback(fn) {
  if (!genAI) throw new Error("Gemini API key not configured.");

  let lastError = null;
  for (const modelName of MODEL_CHAIN) {
    const model = genAI.getGenerativeModel({ model: modelName });
    try {
      return await fn(model);
    } catch (err) {
      lastError = err;
      const msg = err?.message || "";
      const isQuota = msg.includes("429") || msg.includes("quota") || msg.includes("RESOURCE_EXHAUSTED");
      if (isQuota) {
        // Wait 2s then try the next model
        await sleep(2000);
        continue;
      }
      // Non-quota error — throw immediately
      throw new Error(parseGeminiError(err));
    }
  }
  // All models exhausted
  throw new Error(parseGeminiError(lastError));
}

/**
 * Strip markdown code fences from Gemini response text.
 */
function cleanJson(text) {
  return text
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

/**
 * Ask Gemini to generate a new frontend challenge.
 * Returns a structured challenge object.
 */
export async function generateChallenge(difficulty = "easy", topic = "") {
  const topicLine = topic
    ? `The challenge should focus on: ${topic}.`
    : "Pick a realistic frontend UI scenario.";

  const prompt = `You are a frontend training platform. Generate ONE coding challenge for a junior developer.

Difficulty: ${difficulty}
${topicLine}

Requirements:
- The challenge teaches HTML + Tailwind CSS (use Tailwind utility classes)
- initialCode must have intentional mistakes or missing classes that the user needs to fix
- solutionCode must be the correct, working version
- instructions should be 1-2 sentences, professional, and clear
- hints should guide without giving the full answer
- Code should be realistic (cards, navbars, layouts, buttons, forms, etc.)
- Use ONLY HTML with Tailwind CSS classes (no JavaScript, no React)

Respond with ONLY valid JSON — no markdown fences, no explanation:
{
  "title": "string",
  "difficulty": "Easy" or "Medium",
  "instructions": "string",
  "initialCode": "string (HTML with broken/missing Tailwind classes)",
  "solutionCode": "string (HTML with correct Tailwind classes)",
  "hints": ["string", "string", "string"]
}`;

  const parsed = await withModelFallback(async (model) => {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return JSON.parse(cleanJson(text));
  });

  if (
    !parsed.title ||
    !parsed.instructions ||
    !parsed.initialCode ||
    !parsed.solutionCode ||
    !Array.isArray(parsed.hints)
  ) {
    throw new Error("Invalid challenge format returned by Gemini.");
  }

  return parsed;
}

/**
 * Ask Gemini to generate 10 practice questions for a given module topic.
 * Returns an array of 10 question objects.
 */
export async function generateModuleQuestions(topic) {
  const prompt = `You are a frontend best-practices trainer. Generate exactly 10 practice questions for the topic: "${topic}".

Each question must teach a real-world frontend naming or methodology best practice.

Return ONLY valid JSON — no markdown fences, no explanation — with this exact shape:
[
  {
    "id": 1,
    "question": "Problem statement explaining what is wrong and what the user should fix",
    "incorrectCode": "HTML/CSS code snippet with the bad practice",
    "correctCode": "HTML/CSS code snippet with the corrected version",
    "explanation": "Why the original code was wrong and why the fix is better (2-3 sentences)",
    "hint": "A single helpful hint that guides without giving the full answer"
  }
]

Rules:
- Questions must be practical and real-world
- incorrectCode and correctCode should be short HTML snippets (5-15 lines max)
- Explanations should be educational, clear, and professional
- Hints should nudge, not reveal the answer
- All 10 questions must be distinct — no repetition
- For BEM topics: cover Block, Element (double underscore), and Modifier (double hyphen) patterns
- For Naming Convention topics: cover readability, consistency, semantic meaning, and avoiding cryptic abbreviations`;

  return await withModelFallback(async (model) => {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const parsed = JSON.parse(cleanJson(text));
    if (!Array.isArray(parsed) || parsed.length === 0) {
      throw new Error("Invalid module questions format returned by Gemini.");
    }
    return parsed;
  });
}


export async function validateWithAI(challenge, userCode) {
  const prompt = `You are a frontend code reviewer evaluating a junior developer's solution.

CHALLENGE TITLE: ${challenge.title}
INSTRUCTIONS: ${challenge.instructions}

EXPECTED SOLUTION:
${challenge.solutionCode}

USER'S CODE:
${userCode}

Evaluate whether the user's code fulfills the challenge instructions. Focus on:
1. Are the correct Tailwind CSS classes or inline styles applied?
2. Does the layout match what was asked? (flex, grid, centering, spacing, etc.)
3. Minor differences in whitespace, ordering, or extra non-conflicting classes are acceptable.
4. The user does NOT need to match the solution exactly — any approach that fulfills the instructions is correct.

Respond with ONLY valid JSON — no markdown fences:
{
  "correct": true or false,
  "score": number from 0-100,
  "feedback": "1-2 sentence explanation of what's right or what to fix"
}`;

  return await withModelFallback(async (model) => {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return JSON.parse(cleanJson(text));
  });
}

