/**
 * HTML Semantics Module
 * 10 challenges covering semantic HTML5 elements, ARIA roles, landmark
 * regions, accessible forms, and replacing divs with meaningful tags.
 * Shape: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */
export const semanticsModule = {
  id: "html-semantics",
  title: "HTML Semantics",
  description:
    "Replace generic divs with meaningful HTML5 elements. Write accessible, SEO-friendly markup that communicates structure to browsers and screen readers.",
  difficulty: "Beginner",
  icon: "🏗️",
  color: "teal",
  questions: [
    {
      id: 1,
      title: "Replace div with header",
      difficulty: "Easy",
      instructions:
        "The top banner uses a `<div>` but it is the site's page header. Replace it with the `<header>` element so browsers and screen readers recognise it as a landmark region.",
      initialCode: `<div class="bg-slate-900 text-white px-6 py-4 flex items-center justify-between rounded-t-xl">
  <span class="text-xl font-bold">DevBlog</span>
  <nav class="flex gap-6 text-sm text-slate-300">
    <a href="#">Articles</a>
    <a href="#">Projects</a>
    <a href="#">About</a>
  </nav>
</div>
<main class="bg-white p-6 rounded-b-xl border border-slate-200">
  <p class="text-sm text-slate-500">Page content goes here.</p>
</main>`,
      solutionCode: `<header class="bg-slate-900 text-white px-6 py-4 flex items-center justify-between rounded-t-xl">
  <span class="text-xl font-bold">DevBlog</span>
  <nav class="flex gap-6 text-sm text-slate-300">
    <a href="#">Articles</a>
    <a href="#">Projects</a>
    <a href="#">About</a>
  </nav>
</header>
<main class="bg-white p-6 rounded-b-xl border border-slate-200">
  <p class="text-sm text-slate-500">Page content goes here.</p>
</main>`,
      hints: [
        "The `<header>` element represents introductory content or a navigational landmark.",
        "It should wrap the site logo and primary navigation.",
        "Simply replace the opening `<div>` and closing `</div>` tags with `<header>` and `</header>`.",
      ],
    },
    {
      id: 2,
      title: "Use nav for Navigation",
      difficulty: "Easy",
      instructions:
        "The links list is wrapped in a plain `<div>`. Replace it with a `<nav>` element — the correct semantic landmark for site navigation.",
      initialCode: `<div class="bg-white border-b border-slate-200 px-6 py-3 rounded-xl">
  <div class="flex gap-6 text-sm font-medium text-slate-600">
    <a href="#" class="text-blue-600 border-b-2 border-blue-600 pb-1">Home</a>
    <a href="#" class="hover:text-slate-900">Blog</a>
    <a href="#" class="hover:text-slate-900">Portfolio</a>
    <a href="#" class="hover:text-slate-900">Contact</a>
  </div>
</div>`,
      solutionCode: `<div class="bg-white border-b border-slate-200 px-6 py-3 rounded-xl">
  <nav class="flex gap-6 text-sm font-medium text-slate-600">
    <a href="#" class="text-blue-600 border-b-2 border-blue-600 pb-1">Home</a>
    <a href="#" class="hover:text-slate-900">Blog</a>
    <a href="#" class="hover:text-slate-900">Portfolio</a>
    <a href="#" class="hover:text-slate-900">Contact</a>
  </nav>
</div>`,
      hints: [
        "`<nav>` is the correct element for a set of navigation links.",
        "Only replace the inner `<div>` that wraps the links — not the outer container.",
        "Change the inner `<div class=\"flex gap-6…\">` to `<nav class=\"flex gap-6…\">`.",
      ],
    },
    {
      id: 3,
      title: "article vs section vs div",
      difficulty: "Easy",
      instructions:
        "A blog post is a self-contained piece of content — it should use `<article>`. Replace the outer `<div>` wrapping the post with `<article>`.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-lg">
  <div class="text-xs text-slate-400 uppercase tracking-wide mb-1">Tutorial · 5 min read</div>
  <h2 class="text-xl font-bold text-slate-800">Getting Started with CSS Grid</h2>
  <p class="text-sm text-slate-500 mt-2 leading-relaxed">CSS Grid is a powerful layout system that lets you build two-dimensional designs with ease.</p>
  <a href="#" class="inline-block mt-4 text-sm text-blue-600 font-medium hover:underline">Read more →</a>
</div>`,
      solutionCode: `<article class="bg-white rounded-xl border border-slate-200 p-6 max-w-lg">
  <div class="text-xs text-slate-400 uppercase tracking-wide mb-1">Tutorial · 5 min read</div>
  <h2 class="text-xl font-bold text-slate-800">Getting Started with CSS Grid</h2>
  <p class="text-sm text-slate-500 mt-2 leading-relaxed">CSS Grid is a powerful layout system that lets you build two-dimensional designs with ease.</p>
  <a href="#" class="inline-block mt-4 text-sm text-blue-600 font-medium hover:underline">Read more →</a>
</article>`,
      hints: [
        "`<article>` is for self-contained content that can stand independently (blog posts, news articles).",
        "`<section>` groups thematically related content but isn't necessarily standalone.",
        "Replace the outer `<div>` with `<article>`.",
      ],
    },
    {
      id: 4,
      title: "Use footer for Page Footer",
      difficulty: "Easy",
      instructions:
        "The bottom bar uses a generic `<div>`. Swap it for a `<footer>` element, which is the semantic landmark for page or section footer information.",
      initialCode: `<div class="min-h-48 flex flex-col rounded-xl overflow-hidden">
  <main class="flex-1 bg-white p-6">
    <p class="text-sm text-slate-500">Main content.</p>
  </main>
  <div class="bg-slate-800 text-slate-400 text-xs px-6 py-4 flex items-center justify-between">
    <span>© 2026 DevCo. All rights reserved.</span>
    <div class="flex gap-4">
      <a href="#" class="hover:text-white">Privacy</a>
      <a href="#" class="hover:text-white">Terms</a>
    </div>
  </div>
</div>`,
      solutionCode: `<div class="min-h-48 flex flex-col rounded-xl overflow-hidden">
  <main class="flex-1 bg-white p-6">
    <p class="text-sm text-slate-500">Main content.</p>
  </main>
  <footer class="bg-slate-800 text-slate-400 text-xs px-6 py-4 flex items-center justify-between">
    <span>© 2026 DevCo. All rights reserved.</span>
    <div class="flex gap-4">
      <a href="#" class="hover:text-white">Privacy</a>
      <a href="#" class="hover:text-white">Terms</a>
    </div>
  </footer>
</div>`,
      hints: [
        "`<footer>` is a landmark element for footer content — copyright, links, legal info.",
        "Replace the bottom `<div>` (and its closing tag) with `<footer>` and `</footer>`.",
        "The classes stay exactly the same — only the tag name changes.",
      ],
    },
    {
      id: 5,
      title: "Accessible Button vs Clickable Div",
      difficulty: "Medium",
      instructions:
        "The 'Subscribe' action is coded as a `<div>` with an `onclick`. Replace it with a proper `<button>` element so it is keyboard-accessible and semantically correct. Keep all the same classes.",
      initialCode: `<div class="p-6 bg-white rounded-xl border border-slate-200 flex items-center gap-4">
  <input type="email" placeholder="you@example.com" class="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" />
  <div onclick="alert('subscribed')" class="bg-blue-500 text-white text-sm font-medium px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
    Subscribe
  </div>
</div>`,
      solutionCode: `<div class="p-6 bg-white rounded-xl border border-slate-200 flex items-center gap-4">
  <input type="email" placeholder="you@example.com" class="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" />
  <button onclick="alert('subscribed')" class="bg-blue-500 text-white text-sm font-medium px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
    Subscribe
  </button>
</div>`,
      hints: [
        "Divs are not focusable or activatable by keyboard — buttons are.",
        "`<button>` gets `type`, `disabled`, `aria-*` attributes and is natively accessible.",
        "Replace `<div onclick=...>` with `<button onclick=...>` and `</div>` with `</button>`.",
      ],
    },
    {
      id: 6,
      title: "Semantic Form Labels",
      difficulty: "Medium",
      instructions:
        "The form inputs use placeholder text as a substitute for labels. Add a proper `<label>` element with matching `for` attribute above each input so screen readers can announce the field name.",
      initialCode: `<form class="bg-white rounded-xl border border-slate-200 p-6 space-y-4 max-w-sm">
  <div class="flex flex-col gap-1">
    <input id="username" type="text" placeholder="Username" class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" />
  </div>
  <div class="flex flex-col gap-1">
    <input id="email" type="email" placeholder="Email address" class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" />
  </div>
  <button type="submit" class="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-lg">Create Account</button>
</form>`,
      solutionCode: `<form class="bg-white rounded-xl border border-slate-200 p-6 space-y-4 max-w-sm">
  <div class="flex flex-col gap-1">
    <label for="username" class="text-xs font-medium text-slate-600">Username</label>
    <input id="username" type="text" placeholder="Username" class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" />
  </div>
  <div class="flex flex-col gap-1">
    <label for="email" class="text-xs font-medium text-slate-600">Email address</label>
    <input id="email" type="email" placeholder="Email address" class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" />
  </div>
  <button type="submit" class="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-lg">Create Account</button>
</form>`,
      hints: [
        "`<label for=\"inputId\">` links a label to an input via matching `id`.",
        "When a user clicks the label, focus moves to the associated input.",
        "Add a `<label for=\"username\">` before the first input and `<label for=\"email\">` before the second.",
      ],
    },
    {
      id: 7,
      title: "Use figure and figcaption",
      difficulty: "Medium",
      instructions:
        "The image and its caption are in plain `<div>` elements. Wrap them in `<figure>` and replace the caption `<div>` with `<figcaption>` for correct semantic association.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-xs">
  <div class="w-full h-40 bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-5xl">🌄</div>
  <div class="px-4 py-3">
    <div class="text-xs text-slate-400 text-center">Figure 1 — Mountain sunrise at 4,200m elevation</div>
  </div>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-xs">
  <figure class="w-full">
    <div class="w-full h-40 bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-5xl">🌄</div>
    <figcaption class="px-4 py-3 text-xs text-slate-400 text-center">Figure 1 — Mountain sunrise at 4,200m elevation</figcaption>
  </figure>
</div>`,
      hints: [
        "`<figure>` wraps self-contained content like images, diagrams, or code snippets.",
        "`<figcaption>` inside a `<figure>` semantically labels the figure's content.",
        "Wrap the image div and caption in `<figure>`, then change the caption `<div>` to `<figcaption>`.",
      ],
    },
    {
      id: 8,
      title: "Use time element for Dates",
      difficulty: "Medium",
      instructions:
        "The published date is in a plain `<span>`. Replace it with a `<time>` element and add the machine-readable `datetime` attribute set to `2026-03-15` so search engines can parse the date correctly.",
      initialCode: `<article class="bg-white rounded-xl border border-slate-200 p-6 max-w-md">
  <p class="text-xs text-slate-400 mb-1">Published on <span class="font-medium text-slate-600">March 15, 2026</span></p>
  <h2 class="text-lg font-bold text-slate-800">Mastering CSS Custom Properties</h2>
  <p class="text-sm text-slate-500 mt-2">CSS variables unlock dynamic theming and maintainable stylesheets at scale.</p>
</article>`,
      solutionCode: `<article class="bg-white rounded-xl border border-slate-200 p-6 max-w-md">
  <p class="text-xs text-slate-400 mb-1">Published on <time datetime="2026-03-15" class="font-medium text-slate-600">March 15, 2026</time></p>
  <h2 class="text-lg font-bold text-slate-800">Mastering CSS Custom Properties</h2>
  <p class="text-sm text-slate-500 mt-2">CSS variables unlock dynamic theming and maintainable stylesheets at scale.</p>
</article>`,
      hints: [
        "`<time>` semantically marks up dates and times.",
        "The `datetime` attribute provides the machine-readable ISO 8601 format.",
        "Replace `<span>` with `<time datetime=\"2026-03-15\">` and close with `</time>`.",
      ],
    },
    {
      id: 9,
      title: "Ordered vs Unordered Lists",
      difficulty: "Hard",
      instructions:
        "The 'steps' list uses `<ul>` (unordered), but steps have a **required sequence** — they should use `<ol>` (ordered). The 'features' list is correctly unordered. Change only the steps list to `<ol>`.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 space-y-5 max-w-sm">
  <div>
    <h3 class="font-semibold text-slate-800 mb-2">Setup Steps</h3>
    <ul class="space-y-1 text-sm text-slate-600 list-disc list-inside">
      <li>Install Node.js</li>
      <li>Run npm install</li>
      <li>Configure environment variables</li>
      <li>Start the dev server</li>
    </ul>
  </div>
  <div>
    <h3 class="font-semibold text-slate-800 mb-2">Key Features</h3>
    <ul class="space-y-1 text-sm text-slate-600 list-disc list-inside">
      <li>Fast HMR</li>
      <li>TypeScript support</li>
      <li>Plugin ecosystem</li>
    </ul>
  </div>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 space-y-5 max-w-sm">
  <div>
    <h3 class="font-semibold text-slate-800 mb-2">Setup Steps</h3>
    <ol class="space-y-1 text-sm text-slate-600 list-decimal list-inside">
      <li>Install Node.js</li>
      <li>Run npm install</li>
      <li>Configure environment variables</li>
      <li>Start the dev server</li>
    </ol>
  </div>
  <div>
    <h3 class="font-semibold text-slate-800 mb-2">Key Features</h3>
    <ul class="space-y-1 text-sm text-slate-600 list-disc list-inside">
      <li>Fast HMR</li>
      <li>TypeScript support</li>
      <li>Plugin ecosystem</li>
    </ul>
  </div>
</div>`,
      hints: [
        "`<ul>` is for unordered lists where sequence doesn't matter (bullet points).",
        "`<ol>` is for ordered lists where order is important (numbered steps).",
        "Change `<ul>` to `<ol>` and `list-disc` to `list-decimal` for the Setup Steps only.",
      ],
    },
    {
      id: 10,
      title: "Full Semantic Page Structure",
      difficulty: "Hard",
      instructions:
        "Refactor the entire page so it uses the correct semantic landmark elements: `<header>` for the top bar, `<main>` for primary content with an `<article>` inside, `<aside>` for the sidebar, and `<footer>` for the bottom bar.",
      initialCode: `<div class="min-h-64 flex flex-col rounded-xl overflow-hidden text-sm">
  <div class="bg-slate-900 text-white px-6 py-3 font-bold">MySite</div>
  <div class="flex flex-1">
    <div class="flex-1 bg-white p-6">
      <div class="max-w-prose">
        <h1 class="text-xl font-bold text-slate-800">Welcome Post</h1>
        <p class="text-slate-500 mt-2">This is the main article content of the page.</p>
      </div>
    </div>
    <div class="w-48 bg-slate-50 border-l border-slate-200 p-4">
      <h2 class="font-semibold text-slate-700 text-xs uppercase tracking-wide">Related</h2>
      <ul class="mt-2 space-y-1 text-xs text-slate-500"><li>Link 1</li><li>Link 2</li></ul>
    </div>
  </div>
  <div class="bg-slate-800 text-slate-400 text-xs px-6 py-3">© 2026 MySite</div>
</div>`,
      solutionCode: `<div class="min-h-64 flex flex-col rounded-xl overflow-hidden text-sm">
  <header class="bg-slate-900 text-white px-6 py-3 font-bold">MySite</header>
  <div class="flex flex-1">
    <main class="flex-1 bg-white p-6">
      <article class="max-w-prose">
        <h1 class="text-xl font-bold text-slate-800">Welcome Post</h1>
        <p class="text-slate-500 mt-2">This is the main article content of the page.</p>
      </article>
    </main>
    <aside class="w-48 bg-slate-50 border-l border-slate-200 p-4">
      <h2 class="font-semibold text-slate-700 text-xs uppercase tracking-wide">Related</h2>
      <ul class="mt-2 space-y-1 text-xs text-slate-500"><li>Link 1</li><li>Link 2</li></ul>
    </aside>
  </div>
  <footer class="bg-slate-800 text-slate-400 text-xs px-6 py-3">© 2026 MySite</footer>
</div>`,
      hints: [
        "Top bar → `<header>`, primary content area → `<main>`, blog post inside → `<article>`.",
        "Sidebar → `<aside>` (complementary content), bottom bar → `<footer>`.",
        "Replace all 5 structural `<div>` elements with their semantic counterparts.",
      ],
    },
  ],
};
