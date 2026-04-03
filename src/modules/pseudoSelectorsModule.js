/**
 * CSS Pseudo-classes & Pseudo-elements Module
 * 10 advanced challenges covering :hover, :focus, :nth-child, ::before,
 * ::after, :not(), :is(), :where(), and more.
 */

export const pseudoSelectorsModule = {
  id: "pseudo-selectors",
  title: "Pseudo-classes & Pseudo-elements",
  description:
    "Deep-dive into CSS pseudo-classes and pseudo-elements to style elements based on state, position, and generated content without extra markup.",
  difficulty: "Advanced",
  icon: "🔮",
  color: "violet",
  questions: [
    {
      id: 1,
      title: "Style Every Even Row with :nth-child",
      difficulty: "Easy",
      instructions:
        "Use `tr:nth-child(even)` to give every even table row a light gray background (`#f8fafc`) to create a striped table effect.",
      initialCode: `<style>
  table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
  th { background: #6366f1; color: white; padding: 0.5rem 1rem; text-align: left; }
  td { padding: 0.5rem 1rem; color: #334155; }
  /* Style even rows here */
</style>
<div class="p-4 bg-slate-100 rounded-xl">
  <table>
    <thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>Alice</td><td>Designer</td><td>Active</td></tr>
      <tr><td>Bob</td><td>Developer</td><td>Active</td></tr>
      <tr><td>Carol</td><td>PM</td><td>On Leave</td></tr>
      <tr><td>Dave</td><td>QA</td><td>Active</td></tr>
    </tbody>
  </table>
</div>`,
      solutionCode: `<style>
  table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
  th { background: #6366f1; color: white; padding: 0.5rem 1rem; text-align: left; }
  td { padding: 0.5rem 1rem; color: #334155; }
  tr:nth-child(even) { background: #f8fafc; }
</style>
<div class="p-4 bg-slate-100 rounded-xl">
  <table>
    <thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>Alice</td><td>Designer</td><td>Active</td></tr>
      <tr><td>Bob</td><td>Developer</td><td>Active</td></tr>
      <tr><td>Carol</td><td>PM</td><td>On Leave</td></tr>
      <tr><td>Dave</td><td>QA</td><td>Active</td></tr>
    </tbody>
  </table>
</div>`,
      hints: [
        "`tr:nth-child(even)` selects every second `<tr>` element.",
        "Use `background: #f8fafc` or any light color for the zebra stripe.",
        "Add `tr:nth-child(even) { background: #f8fafc; }` to the styles.",
      ],
    },
    {
      id: 2,
      title: "Focus Ring with :focus-visible",
      difficulty: "Easy",
      instructions:
        "Add a visible focus ring to the input using `:focus-visible`. Set `outline: 2px solid #6366f1` and `outline-offset: 2px` so keyboard users see a clear focus indicator.",
      initialCode: `<style>
  .input {
    width: 100%;
    padding: 0.6rem 1rem;
    border: 1.5px solid #cbd5e1;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: #334155;
    outline: none;
    /* Add :focus-visible styles below as a separate rule */
  }
</style>
<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl px-8">
  <input class="input" type="text" placeholder="Click or tab to focus me" />
</div>`,
      solutionCode: `<style>
  .input {
    width: 100%;
    padding: 0.6rem 1rem;
    border: 1.5px solid #cbd5e1;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: #334155;
    outline: none;
  }
  .input:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
  }
</style>
<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl px-8">
  <input class="input" type="text" placeholder="Click or tab to focus me" />
</div>`,
      hints: [
        "`:focus-visible` only shows the ring for keyboard navigation, not mouse clicks.",
        "Use `outline: 2px solid #6366f1` — avoid hiding outlines entirely for accessibility.",
        "Add `.input:focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; }` as a separate rule.",
      ],
    },
    {
      id: 3,
      title: "Decorative Line with ::before",
      difficulty: "Easy",
      instructions:
        "Use `::before` on `.section-title` to prepend a colored bar. Set `content: ''`, `display: inline-block`, `width: 4px`, `height: 1em`, `background: #6366f1`, `margin-right: 0.5rem`, and `vertical-align: middle`.",
      initialCode: `<style>
  .section-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #1e293b;
    /* Add ::before pseudo-element rule */
  }
</style>
<div class="flex flex-col justify-center h-40 bg-slate-100 rounded-xl px-8 gap-4">
  <h2 class="section-title">Overview</h2>
  <h2 class="section-title">Features</h2>
</div>`,
      solutionCode: `<style>
  .section-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #1e293b;
  }
  .section-title::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 1em;
    background: #6366f1;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
</style>
<div class="flex flex-col justify-center h-40 bg-slate-100 rounded-xl px-8 gap-4">
  <h2 class="section-title">Overview</h2>
  <h2 class="section-title">Features</h2>
</div>`,
      hints: [
        "`::before` inserts generated content before the element's content.",
        "`content: ''` is required — even an empty string — for the pseudo-element to render.",
        "Use `display: inline-block` to give it width and height dimensions.",
      ],
    },
    {
      id: 4,
      title: "Tooltip with ::after",
      difficulty: "Medium",
      instructions:
        "Use `::after` on `.tooltip-trigger` to show a tooltip with `content: attr(data-tip)`. Position it absolutely, style with a dark background, and show it on `:hover` by toggling `opacity` from 0 to 1.",
      initialCode: `<style>
  .tooltip-trigger {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: #6366f1;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: default;
    /* Add ::after and :hover::after here */
  }
</style>
<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl">
  <span class="tooltip-trigger" data-tip="Sends notification to all users">
    ⚠️ Broadcast
  </span>
</div>`,
      solutionCode: `<style>
  .tooltip-trigger {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: #6366f1;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: default;
  }
  .tooltip-trigger::after {
    content: attr(data-tip);
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: #1e293b;
    color: white;
    font-size: 0.7rem;
    font-weight: 500;
    padding: 0.3rem 0.7rem;
    border-radius: 0.375rem;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
  }
  .tooltip-trigger:hover::after {
    opacity: 1;
  }
</style>
<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl">
  <span class="tooltip-trigger" data-tip="Sends notification to all users">
    ⚠️ Broadcast
  </span>
</div>`,
      hints: [
        "`content: attr(data-tip)` reads the element's `data-tip` attribute as the tooltip text.",
        "Position the `::after` absolutely relative to the parent (which needs `position: relative`).",
        "Toggle visibility using `opacity: 0` by default and `opacity: 1` on `:hover::after`.",
      ],
    },
    {
      id: 5,
      title: "Exclude Items with :not()",
      difficulty: "Medium",
      instructions:
        "The nav has a `.disabled` link that should appear grayed out. Use `:not(.disabled)` to apply `hover:text-indigo-600` and `cursor-pointer` only to links that are NOT disabled.",
      initialCode: `<style>
  .nav-link {
    font-size: 0.875rem;
    font-weight: 500;
    color: #475569;
    text-decoration: none;
    padding: 0.4rem 0.75rem;
    border-radius: 0.375rem;
    transition: color 0.15s;
  }
  .disabled { opacity: 0.4; cursor: not-allowed; }
  /* Apply hover styles only to non-disabled links */
</style>
<nav class="flex items-center gap-2 p-4 bg-white rounded-xl border border-slate-200 max-w-sm">
  <a href="#" class="nav-link">Home</a>
  <a href="#" class="nav-link">About</a>
  <a href="#" class="nav-link disabled">Billing</a>
  <a href="#" class="nav-link">Contact</a>
</nav>`,
      solutionCode: `<style>
  .nav-link {
    font-size: 0.875rem;
    font-weight: 500;
    color: #475569;
    text-decoration: none;
    padding: 0.4rem 0.75rem;
    border-radius: 0.375rem;
    transition: color 0.15s;
  }
  .disabled { opacity: 0.4; cursor: not-allowed; }
  .nav-link:not(.disabled):hover {
    color: #6366f1;
    background: #eef2ff;
    cursor: pointer;
  }
</style>
<nav class="flex items-center gap-2 p-4 bg-white rounded-xl border border-slate-200 max-w-sm">
  <a href="#" class="nav-link">Home</a>
  <a href="#" class="nav-link">About</a>
  <a href="#" class="nav-link disabled">Billing</a>
  <a href="#" class="nav-link">Contact</a>
</nav>`,
      hints: [
        "`:not(.disabled)` matches elements that do NOT have the `.disabled` class.",
        "Chain it: `.nav-link:not(.disabled):hover { ... }` to style hover on non-disabled links only.",
        "The `.disabled` link will be unaffected by the hover rule.",
      ],
    },
    {
      id: 6,
      title: "First and Last Child Borders",
      difficulty: "Medium",
      instructions:
        "Remove the top border from the first list item and the bottom border from the last using `:first-child` and `:last-child` selectors.",
      initialCode: `<style>
  .list-item {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    color: #334155;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
  }
  /* Remove top border on first, bottom border on last */
</style>
<div class="bg-white rounded-xl overflow-hidden border border-slate-200 max-w-xs">
  <div class="list-item">Dashboard</div>
  <div class="list-item">Settings</div>
  <div class="list-item">Profile</div>
  <div class="list-item">Logout</div>
</div>`,
      solutionCode: `<style>
  .list-item {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    color: #334155;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
  }
  .list-item:first-child { border-top: none; }
  .list-item:last-child  { border-bottom: none; }
</style>
<div class="bg-white rounded-xl overflow-hidden border border-slate-200 max-w-xs">
  <div class="list-item">Dashboard</div>
  <div class="list-item">Settings</div>
  <div class="list-item">Profile</div>
  <div class="list-item">Logout</div>
</div>`,
      hints: [
        "`:first-child` matches an element that is the first sibling of its parent.",
        "`:last-child` matches the last sibling.",
        "Use `border-top: none` on `:first-child` and `border-bottom: none` on `:last-child`.",
      ],
    },
    {
      id: 7,
      title: "Required Field Marker with ::after",
      difficulty: "Medium",
      instructions:
        "Use `label.required::after` to append a red asterisk (`*`) after every label that has the `.required` class, so required fields are visually marked without changing the HTML.",
      initialCode: `<style>
  .label {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.3rem;
  }
  /* Add ::after rule for .label.required to show a red * */
  input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1.5px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    outline: none;
  }
</style>
<div class="p-5 bg-slate-100 rounded-xl max-w-xs space-y-4">
  <div>
    <label class="label required">Email address</label>
    <input type="email" placeholder="you@example.com" />
  </div>
  <div>
    <label class="label">Website</label>
    <input type="url" placeholder="https://..." />
  </div>
  <div>
    <label class="label required">Password</label>
    <input type="password" placeholder="••••••••" />
  </div>
</div>`,
      solutionCode: `<style>
  .label {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.3rem;
  }
  .label.required::after {
    content: ' *';
    color: #ef4444;
    font-weight: 700;
  }
  input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1.5px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    outline: none;
  }
</style>
<div class="p-5 bg-slate-100 rounded-xl max-w-xs space-y-4">
  <div>
    <label class="label required">Email address</label>
    <input type="email" placeholder="you@example.com" />
  </div>
  <div>
    <label class="label">Website</label>
    <input type="url" placeholder="https://..." />
  </div>
  <div>
    <label class="label required">Password</label>
    <input type="password" placeholder="••••••••" />
  </div>
</div>`,
      hints: [
        "Chain both classes: `.label.required::after` targets labels that have BOTH classes.",
        "`content: ' *'` adds a space and asterisk after the label text.",
        "Color it red with `color: #ef4444`.",
      ],
    },
    {
      id: 8,
      title: "Simplify with :is()",
      difficulty: "Hard",
      instructions:
        "Replace the three separate hover rules for `h1:hover`, `h2:hover`, and `h3:hover` with a single `:is(h1, h2, h3):hover` rule that sets `color: #6366f1`.",
      initialCode: `<style>
  .content h1, .content h2, .content h3 {
    font-weight: 700;
    color: #1e293b;
    cursor: pointer;
    transition: color 0.15s;
  }
  /* Replace these three rules with a single :is() rule */
  .content h1:hover { color: #6366f1; }
  .content h2:hover { color: #6366f1; }
  .content h3:hover { color: #6366f1; }
</style>
<div class="content p-5 bg-slate-100 rounded-xl space-y-2">
  <h1 style="font-size:1.5rem">Heading Level 1</h1>
  <h2 style="font-size:1.25rem">Heading Level 2</h2>
  <h3 style="font-size:1.1rem">Heading Level 3</h3>
  <p style="font-size:0.875rem;color:#64748b">Hover the headings above</p>
</div>`,
      solutionCode: `<style>
  .content h1, .content h2, .content h3 {
    font-weight: 700;
    color: #1e293b;
    cursor: pointer;
    transition: color 0.15s;
  }
  .content :is(h1, h2, h3):hover {
    color: #6366f1;
  }
</style>
<div class="content p-5 bg-slate-100 rounded-xl space-y-2">
  <h1 style="font-size:1.5rem">Heading Level 1</h1>
  <h2 style="font-size:1.25rem">Heading Level 2</h2>
  <h3 style="font-size:1.1rem">Heading Level 3</h3>
  <p style="font-size:0.875rem;color:#64748b">Hover the headings above</p>
</div>`,
      hints: [
        "`:is()` accepts a selector list and matches any element that matches one of them.",
        "`.content :is(h1, h2, h3):hover` replaces all three separate hover rules.",
        "`:is()` uses the specificity of its most specific argument.",
      ],
    },
    {
      id: 9,
      title: "Select Checked State with :checked + sibling",
      difficulty: "Hard",
      instructions:
        "Style the `<label>` next to a checked checkbox using the adjacent sibling combinator: `input:checked + label`. When checked, make the label text bold and `color: #6366f1` to give visual feedback.",
      initialCode: `<style>
  .option { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; }
  .option input[type="checkbox"] { width: 1rem; height: 1rem; accent-color: #6366f1; }
  .option label { font-size: 0.875rem; color: #475569; cursor: pointer; transition: color 0.15s; }
  /* Style label when adjacent checkbox is checked */
</style>
<div class="p-5 bg-slate-100 rounded-xl max-w-xs">
  <p class="text-sm font-semibold text-slate-700 mb-3">Select your interests</p>
  <div class="option"><input type="checkbox" id="a" checked /><label for="a">Web Development</label></div>
  <div class="option"><input type="checkbox" id="b" /><label for="b">Machine Learning</label></div>
  <div class="option"><input type="checkbox" id="c" checked /><label for="c">UI/UX Design</label></div>
</div>`,
      solutionCode: `<style>
  .option { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; }
  .option input[type="checkbox"] { width: 1rem; height: 1rem; accent-color: #6366f1; }
  .option label { font-size: 0.875rem; color: #475569; cursor: pointer; transition: color 0.15s; }
  .option input:checked + label {
    color: #6366f1;
    font-weight: 700;
  }
</style>
<div class="p-5 bg-slate-100 rounded-xl max-w-xs">
  <p class="text-sm font-semibold text-slate-700 mb-3">Select your interests</p>
  <div class="option"><input type="checkbox" id="a" checked /><label for="a">Web Development</label></div>
  <div class="option"><input type="checkbox" id="b" /><label for="b">Machine Learning</label></div>
  <div class="option"><input type="checkbox" id="c" checked /><label for="c">UI/UX Design</label></div>
</div>`,
      hints: [
        "`:checked` pseudo-class matches an `<input>` when it is in the checked state.",
        "The `+` combinator selects the immediately following sibling.",
        "`input:checked + label` targets the label that directly follows a checked input.",
      ],
    },
    {
      id: 10,
      title: "Empty State with :empty",
      difficulty: "Hard",
      instructions:
        "Use the `:empty` pseudo-class on `.notification-dot` to hide the dot when it has no content. When it has content (the digit `3`), it should be visible as a red circle badge.",
      initialCode: `<style>
  .notification-dot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.25rem;
    height: 1.25rem;
    background: #ef4444;
    color: white;
    font-size: 0.65rem;
    font-weight: 700;
    border-radius: 9999px;
    padding: 0 0.25rem;
    /* Hide when empty using :empty */
  }
</style>
<div class="flex items-center justify-center gap-8 h-40 bg-slate-100 rounded-xl">
  <div class="relative inline-block">
    <span class="text-2xl">🔔</span>
    <span class="notification-dot absolute -top-1 -right-1">3</span>
  </div>
  <div class="relative inline-block">
    <span class="text-2xl">📧</span>
    <span class="notification-dot absolute -top-1 -right-1"></span>
  </div>
</div>`,
      solutionCode: `<style>
  .notification-dot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.25rem;
    height: 1.25rem;
    background: #ef4444;
    color: white;
    font-size: 0.65rem;
    font-weight: 700;
    border-radius: 9999px;
    padding: 0 0.25rem;
  }
  .notification-dot:empty {
    display: none;
  }
</style>
<div class="flex items-center justify-center gap-8 h-40 bg-slate-100 rounded-xl">
  <div class="relative inline-block">
    <span class="text-2xl">🔔</span>
    <span class="notification-dot absolute -top-1 -right-1">3</span>
  </div>
  <div class="relative inline-block">
    <span class="text-2xl">📧</span>
    <span class="notification-dot absolute -top-1 -right-1"></span>
  </div>
</div>`,
      hints: [
        "`:empty` matches an element that has no children (including text nodes).",
        "An element with only whitespace is NOT considered empty.",
        "Add `.notification-dot:empty { display: none; }` to hide the empty dot.",
      ],
    },
  ],
};
