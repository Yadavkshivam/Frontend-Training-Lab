/**
 * CSS Custom Properties (Variables) Module
 * 10 challenges covering defining variables, scoping, fallback values,
 * theming, and dynamic updates via Tailwind arbitrary values.
 * Shape: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */

export const cssVariablesModule = {
  id: "css-variables",
  title: "CSS Custom Properties",
  description:
    "Master CSS variables — define, scope, inherit, and override custom properties to build dynamic, themeable UIs with minimal effort.",
  difficulty: "Advanced",
  icon: "🎨",
  color: "fuchsia",
  questions: [
    {
      id: 1,
      title: "Define a Brand Colour Variable",
      difficulty: "Easy",
      instructions:
        "The button uses a hardcoded blue colour. Define a CSS custom property `--brand` on the `:root` and reference it on the button using `style` attribute `background-color: var(--brand)`. Set `--brand` to `#6366f1`.",
      initialCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl">
  <button style="background-color: #6366f1;" class="text-white font-semibold px-6 py-3 rounded-lg">
    Brand Button
  </button>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl" style="--brand: #6366f1;">
  <button style="background-color: var(--brand);" class="text-white font-semibold px-6 py-3 rounded-lg">
    Brand Button
  </button>
</div>`,
      hints: [
        "Custom properties are defined with a `--` prefix, e.g. `--brand: #6366f1`.",
        "Reference a variable with `var(--brand)` in any CSS value.",
        "Define `--brand` on the container div so child elements can inherit it.",
      ],
    },
    {
      id: 2,
      title: "Fallback Value in var()",
      difficulty: "Easy",
      instructions:
        "The heading uses `var(--heading-color)` but the variable is never defined, so it falls back to the browser default. Add a fallback of `#1e293b` inside the `var()` call so the heading is always dark slate.",
      initialCode: `<div class="flex items-center justify-center h-32 bg-white rounded-xl border border-slate-200 p-6">
  <h2 style="color: var(--heading-color);" class="text-2xl font-bold">
    Hello, CSS Variables!
  </h2>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-32 bg-white rounded-xl border border-slate-200 p-6">
  <h2 style="color: var(--heading-color, #1e293b);" class="text-2xl font-bold">
    Hello, CSS Variables!
  </h2>
</div>`,
      hints: [
        "`var(--name, fallback)` uses the fallback when `--name` is not defined.",
        "The fallback can be any valid CSS value: colour, length, etc.",
        "Change `var(--heading-color)` to `var(--heading-color, #1e293b)`.",
      ],
    },
    {
      id: 3,
      title: "Scope a Variable to a Component",
      difficulty: "Easy",
      instructions:
        "Both cards share the same markup, but the second card should have a pink accent. Add `--accent: #ec4899` to only the second card's wrapper `style` attribute so its accent bar turns pink while the first stays blue.",
      initialCode: `<div class="flex gap-4 p-4 bg-slate-100 rounded-xl">
  <div style="--accent: #3b82f6;" class="bg-white rounded-xl border border-slate-200 p-4 flex-1">
    <div style="background-color: var(--accent);" class="h-2 rounded-full mb-3"></div>
    <p class="text-sm font-semibold text-slate-700">Card One</p>
  </div>
  <div class="bg-white rounded-xl border border-slate-200 p-4 flex-1">
    <div style="background-color: var(--accent, #3b82f6);" class="h-2 rounded-full mb-3"></div>
    <p class="text-sm font-semibold text-slate-700">Card Two</p>
  </div>
</div>`,
      solutionCode: `<div class="flex gap-4 p-4 bg-slate-100 rounded-xl">
  <div style="--accent: #3b82f6;" class="bg-white rounded-xl border border-slate-200 p-4 flex-1">
    <div style="background-color: var(--accent);" class="h-2 rounded-full mb-3"></div>
    <p class="text-sm font-semibold text-slate-700">Card One</p>
  </div>
  <div style="--accent: #ec4899;" class="bg-white rounded-xl border border-slate-200 p-4 flex-1">
    <div style="background-color: var(--accent, #3b82f6);" class="h-2 rounded-full mb-3"></div>
    <p class="text-sm font-semibold text-slate-700">Card Two</p>
  </div>
</div>`,
      hints: [
        "CSS variables are scoped — defining `--accent` on an element overrides it for that subtree only.",
        "Add `style=\"--accent: #ec4899;\"` to the second card's wrapper `<div>`.",
        "The second card's accent bar already reads `var(--accent, #3b82f6)`, so it will pick up the new value.",
      ],
    },
    {
      id: 4,
      title: "Spacing Scale with Variables",
      difficulty: "Medium",
      instructions:
        "The card has inconsistent padding values scattered across several elements. Define `--space: 1rem` on the card wrapper and use `var(--space)` for the `padding` of both inner divs to keep spacing consistent.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 max-w-xs">
  <div style="padding: 24px;">
    <p class="text-sm font-bold text-slate-800">Article Title</p>
    <p class="text-xs text-slate-500 mt-1">Published on March 31, 2026</p>
  </div>
  <div style="padding: 16px;" class="border-t border-slate-100">
    <p class="text-xs text-slate-600">This is a short excerpt from the article body text.</p>
  </div>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 max-w-xs" style="--space: 1rem;">
  <div style="padding: var(--space);">
    <p class="text-sm font-bold text-slate-800">Article Title</p>
    <p class="text-xs text-slate-500 mt-1">Published on March 31, 2026</p>
  </div>
  <div style="padding: var(--space);" class="border-t border-slate-100">
    <p class="text-xs text-slate-600">This is a short excerpt from the article body text.</p>
  </div>
</div>`,
      hints: [
        "Define `--space: 1rem` on the outer card wrapper.",
        "Replace both `padding: 24px` and `padding: 16px` with `padding: var(--space)`.",
        "Now changing `--space` in one place updates all paddings at once.",
      ],
    },
    {
      id: 5,
      title: "Colour Theme Toggle via Variables",
      difficulty: "Medium",
      instructions:
        "There are two theme wrappers: `.theme-light` and `.theme-dark`. The dark wrapper is missing its variable overrides. Add `--bg: #0f172a`, `--text: #f1f5f9`, and `--card: #1e293b` to the `.theme-dark` style attribute so the second card renders in dark colours.",
      initialCode: `<div class="flex gap-4 p-4 bg-slate-200 rounded-xl">
  <div style="--bg: #f8fafc; --text: #1e293b; --card: #ffffff; background-color: var(--bg);" class="rounded-xl p-4 flex-1">
    <div style="background-color: var(--card); color: var(--text);" class="rounded-lg p-4 border border-slate-200">
      <p class="text-sm font-bold">Light Theme</p>
      <p class="text-xs mt-1 opacity-70">Clean and bright.</p>
    </div>
  </div>
  <div style="background-color: var(--bg, #f8fafc);" class="rounded-xl p-4 flex-1">
    <div style="background-color: var(--card, #ffffff); color: var(--text, #1e293b);" class="rounded-lg p-4">
      <p class="text-sm font-bold">Dark Theme</p>
      <p class="text-xs mt-1 opacity-70">Easy on the eyes.</p>
    </div>
  </div>
</div>`,
      solutionCode: `<div class="flex gap-4 p-4 bg-slate-200 rounded-xl">
  <div style="--bg: #f8fafc; --text: #1e293b; --card: #ffffff; background-color: var(--bg);" class="rounded-xl p-4 flex-1">
    <div style="background-color: var(--card); color: var(--text);" class="rounded-lg p-4 border border-slate-200">
      <p class="text-sm font-bold">Light Theme</p>
      <p class="text-xs mt-1 opacity-70">Clean and bright.</p>
    </div>
  </div>
  <div style="--bg: #0f172a; --text: #f1f5f9; --card: #1e293b; background-color: var(--bg, #f8fafc);" class="rounded-xl p-4 flex-1">
    <div style="background-color: var(--card, #ffffff); color: var(--text, #1e293b);" class="rounded-lg p-4">
      <p class="text-sm font-bold">Dark Theme</p>
      <p class="text-xs mt-1 opacity-70">Easy on the eyes.</p>
    </div>
  </div>
</div>`,
      hints: [
        "Add `--bg: #0f172a; --text: #f1f5f9; --card: #1e293b;` to the second wrapper's `style`.",
        "The child elements already use `var(--card)` and `var(--text)` so they will inherit the new values.",
        "CSS variable overrides only affect the element they are defined on and its descendants.",
      ],
    },
    {
      id: 6,
      title: "Dynamic Border Radius with a Variable",
      difficulty: "Medium",
      instructions:
        "The design system uses a single `--radius` token. Define `--radius: 0.75rem` on the container and apply `border-radius: var(--radius)` to the card and button so changing one value re-rounds all elements uniformly.",
      initialCode: `<div class="flex items-center justify-center h-56 bg-slate-100 rounded-xl p-6">
  <div class="bg-white border border-slate-200 p-6 flex flex-col items-center gap-4 shadow-sm" style="border-radius: 4px;">
    <p class="text-sm font-semibold text-slate-700">Design Token Demo</p>
    <button class="bg-indigo-500 text-white text-sm font-medium px-4 py-2" style="border-radius: 4px;">
      Get Started
    </button>
  </div>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-56 bg-slate-100 rounded-xl p-6" style="--radius: 0.75rem;">
  <div class="bg-white border border-slate-200 p-6 flex flex-col items-center gap-4 shadow-sm" style="border-radius: var(--radius);">
    <p class="text-sm font-semibold text-slate-700">Design Token Demo</p>
    <button class="bg-indigo-500 text-white text-sm font-medium px-4 py-2" style="border-radius: var(--radius);">
      Get Started
    </button>
  </div>
</div>`,
      hints: [
        "Define `--radius: 0.75rem` on the outermost wrapper.",
        "Replace the hardcoded `4px` values with `var(--radius)` on both elements.",
        "Now you only need to change `--radius` once to re-theme all rounded corners.",
      ],
    },
    {
      id: 7,
      title: "Shadow Token",
      difficulty: "Medium",
      instructions:
        "Define `--shadow: 0 4px 24px 0 rgba(99,102,241,0.18)` on the card wrapper and use `box-shadow: var(--shadow)` on the inner card instead of the hardcoded shadow. This makes the shadow a single reusable token.",
      initialCode: `<div class="flex items-center justify-center h-48 bg-slate-100 rounded-xl p-6">
  <div class="bg-white rounded-xl p-6 text-center" style="box-shadow: 0 4px 24px 0 rgba(99,102,241,0.18);">
    <p class="text-sm font-bold text-slate-800">Shadow Token</p>
    <p class="text-xs text-slate-400 mt-1">Defined as a variable</p>
  </div>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-48 bg-slate-100 rounded-xl p-6" style="--shadow: 0 4px 24px 0 rgba(99,102,241,0.18);">
  <div class="bg-white rounded-xl p-6 text-center" style="box-shadow: var(--shadow);">
    <p class="text-sm font-bold text-slate-800">Shadow Token</p>
    <p class="text-xs text-slate-400 mt-1">Defined as a variable</p>
  </div>
</div>`,
      hints: [
        "Define `--shadow` on the outer wrapper so the inner card can inherit it.",
        "Replace the inline box-shadow value with `var(--shadow)`.",
        "CSS variables work with any property, including complex ones like `box-shadow`.",
      ],
    },
    {
      id: 8,
      title: "Override a Variable at Breakpoint Context",
      difficulty: "Hard",
      instructions:
        "The grid gap is controlled by `--gap`. Add a second wrapper class `compact` that overrides `--gap` to `0.5rem` by adding `style=\"--gap: 0.5rem;\"` to the inner compact grid, making it visually tighter than the default grid.",
      initialCode: `<div class="p-4 bg-slate-100 rounded-xl space-y-4" style="--gap: 1.5rem;">
  <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Default Gap</p>
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--gap);">
    <div class="h-10 bg-indigo-200 rounded-lg"></div>
    <div class="h-10 bg-indigo-200 rounded-lg"></div>
    <div class="h-10 bg-indigo-200 rounded-lg"></div>
  </div>
  <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Compact Gap</p>
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--gap);">
    <div class="h-10 bg-fuchsia-200 rounded-lg"></div>
    <div class="h-10 bg-fuchsia-200 rounded-lg"></div>
    <div class="h-10 bg-fuchsia-200 rounded-lg"></div>
  </div>
</div>`,
      solutionCode: `<div class="p-4 bg-slate-100 rounded-xl space-y-4" style="--gap: 1.5rem;">
  <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Default Gap</p>
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--gap);">
    <div class="h-10 bg-indigo-200 rounded-lg"></div>
    <div class="h-10 bg-indigo-200 rounded-lg"></div>
    <div class="h-10 bg-indigo-200 rounded-lg"></div>
  </div>
  <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">Compact Gap</p>
  <div style="--gap: 0.5rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--gap);">
    <div class="h-10 bg-fuchsia-200 rounded-lg"></div>
    <div class="h-10 bg-fuchsia-200 rounded-lg"></div>
    <div class="h-10 bg-fuchsia-200 rounded-lg"></div>
  </div>
</div>`,
      hints: [
        "Add `--gap: 0.5rem;` at the start of the compact grid's `style` attribute.",
        "The `--gap` override only affects the element it is defined on and its children.",
        "The first grid will keep using `--gap: 1.5rem` from the parent wrapper.",
      ],
    },
    {
      id: 9,
      title: "Animated Gradient via CSS Variable",
      difficulty: "Hard",
      instructions:
        "The progress bar uses a hardcoded `width`. Replace the width value with `var(--progress)` and set `--progress: 68%` on the bar element to achieve the same look but via a CSS variable that could be updated dynamically.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-sm">
  <div class="flex justify-between text-sm font-medium text-slate-700 mb-2">
    <span>Course Progress</span>
    <span>68%</span>
  </div>
  <div class="h-3 bg-slate-100 rounded-full overflow-hidden">
    <div class="h-full bg-linear-to-r from-fuchsia-500 to-purple-500 rounded-full transition-all duration-500" style="width: 68%;"></div>
  </div>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-sm">
  <div class="flex justify-between text-sm font-medium text-slate-700 mb-2">
    <span>Course Progress</span>
    <span>68%</span>
  </div>
  <div class="h-3 bg-slate-100 rounded-full overflow-hidden">
    <div class="h-full bg-linear-to-r from-fuchsia-500 to-purple-500 rounded-full transition-all duration-500" style="--progress: 68%; width: var(--progress);"></div>
  </div>
</div>`,
      hints: [
        "Define `--progress: 68%` on the bar element itself.",
        "Replace `width: 68%` with `width: var(--progress)`.",
        "Now the JavaScript can update a single variable to animate the bar.",
      ],
    },
    {
      id: 10,
      title: "Full Design Token System",
      difficulty: "Hard",
      instructions:
        "Build a token-driven pricing card. Define three tokens on the outer wrapper: `--accent: #a855f7`, `--radius: 1rem`, and `--shadow: 0 8px 32px rgba(168,85,247,0.2)`. Apply them to the card: `border-radius: var(--radius)`, `box-shadow: var(--shadow)`, and the badge background `background-color: var(--accent)`.",
      initialCode: `<div class="flex items-center justify-center h-64 bg-slate-100 rounded-xl">
  <div class="bg-white border border-slate-200 p-6 w-56 text-center">
    <span class="text-white text-xs font-bold px-3 py-1 rounded-full" style="background-color: #a855f7;">PRO</span>
    <p class="text-2xl font-extrabold text-slate-800 mt-4">$29<span class="text-sm font-normal text-slate-400">/mo</span></p>
    <p class="text-xs text-slate-500 mt-1">Everything you need</p>
  </div>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-64 bg-slate-100 rounded-xl" style="--accent: #a855f7; --radius: 1rem; --shadow: 0 8px 32px rgba(168,85,247,0.2);">
  <div class="bg-white border border-slate-200 p-6 w-56 text-center" style="border-radius: var(--radius); box-shadow: var(--shadow);">
    <span class="text-white text-xs font-bold px-3 py-1 rounded-full" style="background-color: var(--accent);">PRO</span>
    <p class="text-2xl font-extrabold text-slate-800 mt-4">$29<span class="text-sm font-normal text-slate-400">/mo</span></p>
    <p class="text-xs text-slate-500 mt-1">Everything you need</p>
  </div>
</div>`,
      hints: [
        "Define all three tokens on the outermost wrapper: `--accent`, `--radius`, `--shadow`.",
        "Apply `border-radius: var(--radius)` and `box-shadow: var(--shadow)` to the card div.",
        "Apply `background-color: var(--accent)` to the badge span.",
      ],
    },
  ],
};
