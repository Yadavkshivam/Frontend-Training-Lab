/**
 * CSS Specificity Module
 * 10 challenges covering selector weight, cascade order, inline styles,
 * !important, and real-world override patterns.
 * Shape: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */
export const specificityModule = {
  id: "css-specificity",
  title: "CSS Specificity",
  description:
    "Understand how browsers decide which styles win. Learn selector weight, cascade order, and how to write overrides cleanly without fighting the cascade.",
  difficulty: "Advanced",
  icon: "⚖️",
  color: "purple",
  questions: [
    {
      id: 1,
      title: "Class Beats Element Selector",
      difficulty: "Easy",
      instructions:
        "The `<p>` is styled red by the element selector in the `<style>` block. Add a class `highlight` to the paragraph so the class rule (blue) wins over the element rule.",
      initialCode: `<style>
  p { color: red; font-size: 1rem; }
  .highlight { color: blue; font-weight: bold; }
</style>
<div class="p-6 bg-white rounded-xl border border-slate-200">
  <p>This text should be blue and bold, not red.</p>
</div>`,
      solutionCode: `<style>
  p { color: red; font-size: 1rem; }
  .highlight { color: blue; font-weight: bold; }
</style>
<div class="p-6 bg-white rounded-xl border border-slate-200">
  <p class="highlight">This text should be blue and bold, not red.</p>
</div>`,
      hints: [
        "A class selector (0,1,0) has higher specificity than an element selector (0,0,1).",
        "The `.highlight` rule already exists in the `<style>` block.",
        "Add `class=\"highlight\"` to the `<p>` element.",
      ],
    },
    {
      id: 2,
      title: "ID Beats Class",
      difficulty: "Easy",
      instructions:
        "Both a class `.warning` and an ID `#alert` are applied to the div. The ID rule should win and make the text **dark red** with a red background. Observe the current result and add the missing `id=\"alert\"` attribute.",
      initialCode: `<style>
  .warning { background-color: #fef9c3; color: #854d0e; border: 1px solid #fde047; }
  #alert { background-color: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; }
</style>
<div class="warning p-4 rounded-lg text-sm font-medium">
  ⚠️ This should have a red background (ID rule), not yellow (class rule).
</div>`,
      solutionCode: `<style>
  .warning { background-color: #fef9c3; color: #854d0e; border: 1px solid #fde047; }
  #alert { background-color: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; }
</style>
<div id="alert" class="warning p-4 rounded-lg text-sm font-medium">
  ⚠️ This should have a red background (ID rule), not yellow (class rule).
</div>`,
      hints: [
        "ID selectors (1,0,0) have higher specificity than class selectors (0,1,0).",
        "The `#alert` rule is in the stylesheet but the element has no `id` attribute yet.",
        "Add `id=\"alert\"` to the div.",
      ],
    },
    {
      id: 3,
      title: "Source Order Tiebreaker",
      difficulty: "Easy",
      instructions:
        "Two classes `.btn-primary` and `.btn-secondary` have the same specificity. The **last declared rule** wins. Swap their order in the `<style>` block so `.btn-primary` (blue) always wins.",
      initialCode: `<style>
  .btn-primary { background-color: #3b82f6; color: white; }
  .btn-secondary { background-color: #64748b; color: white; }
</style>
<div class="p-6 bg-slate-100 rounded-xl flex gap-3">
  <button class="btn-primary btn-secondary px-5 py-2 rounded-lg text-sm font-medium">Primary</button>
  <button class="btn-secondary px-5 py-2 rounded-lg text-sm font-medium">Secondary</button>
</div>`,
      solutionCode: `<style>
  .btn-secondary { background-color: #64748b; color: white; }
  .btn-primary { background-color: #3b82f6; color: white; }
</style>
<div class="p-6 bg-slate-100 rounded-xl flex gap-3">
  <button class="btn-primary btn-secondary px-5 py-2 rounded-lg text-sm font-medium">Primary</button>
  <button class="btn-secondary px-5 py-2 rounded-lg text-sm font-medium">Secondary</button>
</div>`,
      hints: [
        "When two selectors have equal specificity, the one declared **later** wins.",
        "Both buttons use both classes — the last defined rule in the stylesheet takes effect.",
        "Move `.btn-secondary` before `.btn-primary` in the `<style>` block.",
      ],
    },
    {
      id: 4,
      title: "Inline Style vs Class",
      difficulty: "Easy",
      instructions:
        "The paragraph has an inline style setting the text to green, but the `.error` class should make it red. Add `style=\"color: red\"` as an inline style directly on the element to override the class.",
      initialCode: `<style>
  .error { color: red; font-weight: 600; }
</style>
<div class="p-6 bg-white rounded-xl border border-slate-200">
  <p class="error" style="color: green;">This text should be red, not green.</p>
</div>`,
      solutionCode: `<style>
  .error { color: red; font-weight: 600; }
</style>
<div class="p-6 bg-white rounded-xl border border-slate-200">
  <p class="error" style="color: red;">This text should be red, not green.</p>
</div>`,
      hints: [
        "Inline styles have a specificity of (1,0,0,0) — higher than any class or ID.",
        "The inline style is currently overriding the class with `green`.",
        "Change the inline style value from `green` to `red`.",
      ],
    },
    {
      id: 5,
      title: "Chained Class Selector Wins",
      difficulty: "Medium",
      instructions:
        "The `.card` rule sets a white background. The `.card.featured` chained selector (higher specificity) should set a blue background. Add `featured` to the second card's class list so the chained rule wins.",
      initialCode: `<style>
  .card { background-color: white; border: 1px solid #e2e8f0; color: #1e293b; }
  .card.featured { background-color: #3b82f6; border-color: #2563eb; color: white; }
</style>
<div class="p-6 bg-slate-100 rounded-xl flex gap-4">
  <div class="card p-5 rounded-xl flex-1 text-sm font-medium">Regular Card</div>
  <div class="card p-5 rounded-xl flex-1 text-sm font-medium">Featured Card</div>
</div>`,
      solutionCode: `<style>
  .card { background-color: white; border: 1px solid #e2e8f0; color: #1e293b; }
  .card.featured { background-color: #3b82f6; border-color: #2563eb; color: white; }
</style>
<div class="p-6 bg-slate-100 rounded-xl flex gap-4">
  <div class="card p-5 rounded-xl flex-1 text-sm font-medium">Regular Card</div>
  <div class="card featured p-5 rounded-xl flex-1 text-sm font-medium">Featured Card</div>
</div>`,
      hints: [
        "A chained selector `.card.featured` (0,2,0) beats `.card` alone (0,1,0).",
        "The `.card.featured` rule only applies when an element has **both** classes.",
        "Add `featured` to the second card's class attribute.",
      ],
    },
    {
      id: 6,
      title: "Descendant Selector Specificity",
      difficulty: "Medium",
      instructions:
        "The `.sidebar a` rule should override the generic `a` rule and make sidebar links **indigo**, but both classes are missing. Add class `sidebar` to the `<nav>` so the descendant rule wins.",
      initialCode: `<style>
  a { color: #3b82f6; text-decoration: underline; }
  .sidebar a { color: #6366f1; text-decoration: none; font-weight: 500; }
</style>
<div class="p-6 bg-white rounded-xl border border-slate-200 flex gap-8">
  <nav class="space-y-2 text-sm">
    <a href="#">Dashboard</a><br/>
    <a href="#">Projects</a><br/>
    <a href="#">Settings</a>
  </nav>
  <div class="text-sm">
    <p>Regular paragraph with an <a href="#">inline link</a> — stays blue.</p>
  </div>
</div>`,
      solutionCode: `<style>
  a { color: #3b82f6; text-decoration: underline; }
  .sidebar a { color: #6366f1; text-decoration: none; font-weight: 500; }
</style>
<div class="p-6 bg-white rounded-xl border border-slate-200 flex gap-8">
  <nav class="sidebar space-y-2 text-sm">
    <a href="#">Dashboard</a><br/>
    <a href="#">Projects</a><br/>
    <a href="#">Settings</a>
  </nav>
  <div class="text-sm">
    <p>Regular paragraph with an <a href="#">inline link</a> — stays blue.</p>
  </div>
</div>`,
      hints: [
        "`.sidebar a` (0,1,1) has higher specificity than `a` (0,0,1) alone.",
        "The descendant rule only matches `<a>` elements **inside** an element with class `sidebar`.",
        "Add `sidebar` to the `<nav>` element's class attribute.",
      ],
    },
    {
      id: 7,
      title: "Remove !important Abuse",
      difficulty: "Medium",
      instructions:
        "The `.override` class uses `!important` to force blue text, beating the `.theme-dark` scoped rule. Remove the `!important` from `.override` so the scoped `.theme-dark .text` rule wins and text appears light gray.",
      initialCode: `<style>
  .override { color: #3b82f6 !important; }
  .theme-dark .text { color: #cbd5e1; font-size: 0.875rem; }
</style>
<div class="theme-dark bg-slate-900 rounded-xl p-6">
  <p class="text override">This should be light gray inside the dark theme, not blue.</p>
</div>`,
      solutionCode: `<style>
  .override { color: #3b82f6; }
  .theme-dark .text { color: #cbd5e1; font-size: 0.875rem; }
</style>
<div class="theme-dark bg-slate-900 rounded-xl p-6">
  <p class="text override">This should be light gray inside the dark theme, not blue.</p>
</div>`,
      hints: [
        "`!important` beats everything including higher-specificity selectors.",
        "Without `!important`, `.theme-dark .text` (0,2,1) beats `.override` (0,1,0).",
        "Remove `!important` from the `.override` rule.",
      ],
    },
    {
      id: 8,
      title: "Pseudo-class Specificity",
      difficulty: "Medium",
      instructions:
        "The base `.btn` rule sets a blue background. The `.btn:hover` rule should change it to dark blue on hover — but the `#submit` ID rule is blocking it. Remove the `id=\"submit\"` so the pseudo-class can apply correctly.",
      initialCode: `<style>
  .btn { background-color: #3b82f6; color: white; padding: 0.5rem 1.25rem; border-radius: 0.5rem; border: none; cursor: pointer; font-weight: 500; }
  .btn:hover { background-color: #1d4ed8; }
  #submit { background-color: #3b82f6; }
</style>
<div class="p-6 bg-white rounded-xl border border-slate-200 flex gap-3">
  <button id="submit" class="btn">Submit (hover me)</button>
  <button class="btn">Cancel (hover me)</button>
</div>`,
      solutionCode: `<style>
  .btn { background-color: #3b82f6; color: white; padding: 0.5rem 1.25rem; border-radius: 0.5rem; border: none; cursor: pointer; font-weight: 500; }
  .btn:hover { background-color: #1d4ed8; }
  #submit { background-color: #3b82f6; }
</style>
<div class="p-6 bg-white rounded-xl border border-slate-200 flex gap-3">
  <button class="btn">Submit (hover me)</button>
  <button class="btn">Cancel (hover me)</button>
</div>`,
      hints: [
        "`#submit` (1,0,0) beats `.btn:hover` (0,2,0) and locks the background.",
        "Removing the ID attribute means only the class rules apply.",
        "Delete `id=\"submit\"` from the first button.",
      ],
    },
    {
      id: 9,
      title: "Scoped Overrides with BEM + Specificity",
      difficulty: "Hard",
      instructions:
        "The `.modal__button` base rule sets a gray button. The `.modal__button--danger` modifier should override the background to red, but it currently loses. Fix it by making the modifier selector more specific: use `.modal .modal__button--danger`.",
      initialCode: `<style>
  .modal__button { background-color: #64748b; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; border: none; cursor: pointer; font-weight: 500; font-size: 0.875rem; }
  .modal__button--danger { background-color: #ef4444; }
</style>
<div class="modal bg-white border border-slate-200 rounded-xl p-6 max-w-sm space-y-4">
  <h3 class="font-semibold text-slate-800">Delete Account?</h3>
  <p class="text-sm text-slate-500">This action cannot be undone.</p>
  <div class="flex gap-3">
    <button class="modal__button">Cancel</button>
    <button class="modal__button modal__button--danger">Delete</button>
  </div>
</div>`,
      solutionCode: `<style>
  .modal__button { background-color: #64748b; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; border: none; cursor: pointer; font-weight: 500; font-size: 0.875rem; }
  .modal .modal__button--danger { background-color: #ef4444; }
</style>
<div class="modal bg-white border border-slate-200 rounded-xl p-6 max-w-sm space-y-4">
  <h3 class="font-semibold text-slate-800">Delete Account?</h3>
  <p class="text-sm text-slate-500">This action cannot be undone.</p>
  <div class="flex gap-3">
    <button class="modal__button">Cancel</button>
    <button class="modal__button modal__button--danger">Delete</button>
  </div>
</div>`,
      hints: [
        "`.modal__button` (0,1,0) and `.modal__button--danger` (0,1,0) have equal specificity — source order decides.",
        "Since `.modal__button` is declared last conceptually via the combined class, the modifier can lose.",
        "Change `.modal__button--danger` to `.modal .modal__button--danger` — two classes (0,2,0) beats one (0,1,0).",
      ],
    },
    {
      id: 10,
      title: "The Specificity Hierarchy in Full",
      difficulty: "Hard",
      instructions:
        "Four conflicting rules target the same `<h2>`. In order from weakest to strongest: element `h2` (red), class `.title` (blue), ID `#main-title` (green), inline style (orange). The inline style should win. Set the correct inline style `color: orange` on the element so it beats all other rules.",
      initialCode: `<style>
  h2 { color: red; }
  .title { color: blue; }
  #main-title { color: green; }
</style>
<div class="p-8 bg-white rounded-xl border border-slate-200">
  <h2 id="main-title" class="title text-2xl font-bold">
    This heading should be orange (inline wins).
  </h2>
  <p class="text-xs text-slate-400 mt-3">Hierarchy: element (red) &lt; class (blue) &lt; ID (green) &lt; inline (orange)</p>
</div>`,
      solutionCode: `<style>
  h2 { color: red; }
  .title { color: blue; }
  #main-title { color: green; }
</style>
<div class="p-8 bg-white rounded-xl border border-slate-200">
  <h2 id="main-title" class="title text-2xl font-bold" style="color: orange;">
    This heading should be orange (inline wins).
  </h2>
  <p class="text-xs text-slate-400 mt-3">Hierarchy: element (red) &lt; class (blue) &lt; ID (green) &lt; inline (orange)</p>
</div>`,
      hints: [
        "Inline styles (1,0,0,0) beat IDs (0,1,0,0), classes (0,0,1,0), and elements (0,0,0,1).",
        "An inline style is applied directly via the `style` attribute on the HTML element.",
        "Add `style=\"color: orange;\"` to the `<h2>` element.",
      ],
    },
  ],
};
