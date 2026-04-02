/**
 * CSS Pseudo-classes & Pseudo-elements Module
 * 10 challenges covering :hover, :focus, :nth-child, :not, ::before, ::after,
 * ::placeholder, and advanced selector combinations.
 * Shape: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */

export const pseudoModule = {
  id: "css-pseudo",
  title: "Pseudo-classes & Pseudo-elements",
  description:
    "Go beyond basic selectors — use :hover, :focus, :nth-child, ::before and ::after to add interactivity and decorative elements without extra markup.",
  difficulty: "Advanced",
  icon: "🔬",
  color: "violet",
  questions: [
    {
      id: 1,
      title: "Focus Ring on Input",
      difficulty: "Easy",
      instructions:
        "The search input has no visible focus indicator. Add `focus:ring-2 focus:ring-violet-400 focus:outline-none` so a purple ring appears when the field is focused.",
      initialCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl p-6">
  <input
    type="text"
    placeholder="Search…"
    class="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-700 bg-white"
  />
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl p-6">
  <input
    type="text"
    placeholder="Search…"
    class="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-700 bg-white focus:ring-2 focus:ring-violet-400 focus:outline-none"
  />
</div>`,
      hints: [
        "`focus:ring-2` adds a 2px ring when the element is focused.",
        "`focus:ring-violet-400` sets the ring colour.",
        "`focus:outline-none` removes the default browser outline so your ring is the only indicator.",
      ],
    },
    {
      id: 2,
      title: "Highlight Odd Table Rows",
      difficulty: "Easy",
      instructions:
        "The table rows are all white. Use Tailwind's `odd:bg-violet-50` class on each `<tr>` so every odd row gets a light purple tint, creating a striped table effect.",
      initialCode: `<div class="overflow-hidden rounded-xl border border-slate-200 max-w-md">
  <table class="w-full text-sm">
    <thead class="bg-slate-800 text-white">
      <tr><th class="px-4 py-2 text-left">Name</th><th class="px-4 py-2 text-left">Role</th></tr>
    </thead>
    <tbody>
      <tr class="bg-white"><td class="px-4 py-2">Alice</td><td class="px-4 py-2">Designer</td></tr>
      <tr class="bg-white"><td class="px-4 py-2">Bob</td><td class="px-4 py-2">Developer</td></tr>
      <tr class="bg-white"><td class="px-4 py-2">Carol</td><td class="px-4 py-2">PM</td></tr>
      <tr class="bg-white"><td class="px-4 py-2">Dan</td><td class="px-4 py-2">QA</td></tr>
    </tbody>
  </table>
</div>`,
      solutionCode: `<div class="overflow-hidden rounded-xl border border-slate-200 max-w-md">
  <table class="w-full text-sm">
    <thead class="bg-slate-800 text-white">
      <tr><th class="px-4 py-2 text-left">Name</th><th class="px-4 py-2 text-left">Role</th></tr>
    </thead>
    <tbody>
      <tr class="odd:bg-violet-50"><td class="px-4 py-2">Alice</td><td class="px-4 py-2">Designer</td></tr>
      <tr class="odd:bg-violet-50"><td class="px-4 py-2">Bob</td><td class="px-4 py-2">Developer</td></tr>
      <tr class="odd:bg-violet-50"><td class="px-4 py-2">Carol</td><td class="px-4 py-2">PM</td></tr>
      <tr class="odd:bg-violet-50"><td class="px-4 py-2">Dan</td><td class="px-4 py-2">QA</td></tr>
    </tbody>
  </table>
</div>`,
      hints: [
        "`odd:` is Tailwind's variant for the `:nth-child(odd)` pseudo-class.",
        "Replace `bg-white` on every `<tr>` with `odd:bg-violet-50`.",
        "Even rows will have the default transparent background.",
      ],
    },
    {
      id: 3,
      title: "Style Placeholder Text",
      difficulty: "Easy",
      instructions:
        "The textarea placeholder is the default grey. Add `placeholder:text-violet-300 placeholder:italic` to style the placeholder text in a light purple italic style.",
      initialCode: `<div class="flex items-center justify-center h-48 bg-slate-100 rounded-xl p-6">
  <textarea
    placeholder="Write your thoughts here…"
    rows="3"
    class="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-violet-300"
  ></textarea>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-48 bg-slate-100 rounded-xl p-6">
  <textarea
    placeholder="Write your thoughts here…"
    rows="3"
    class="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-violet-300 placeholder:text-violet-300 placeholder:italic"
  ></textarea>
</div>`,
      hints: [
        "Tailwind's `placeholder:` variant targets the `::placeholder` pseudo-element.",
        "`placeholder:text-violet-300` sets the placeholder colour.",
        "`placeholder:italic` makes the placeholder text italic.",
      ],
    },
    {
      id: 4,
      title: "Disabled State Styling",
      difficulty: "Easy",
      instructions:
        "The disabled button looks identical to an active one. Add `disabled:opacity-50 disabled:cursor-not-allowed` so it visually signals it cannot be clicked. The `disabled` HTML attribute is already on the button.",
      initialCode: `<div class="flex items-center justify-center gap-4 h-40 bg-slate-100 rounded-xl">
  <button class="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors">
    Active
  </button>
  <button disabled class="bg-violet-500 text-white font-semibold px-5 py-2.5 rounded-xl">
    Disabled
  </button>
</div>`,
      solutionCode: `<div class="flex items-center justify-center gap-4 h-40 bg-slate-100 rounded-xl">
  <button class="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors">
    Active
  </button>
  <button disabled class="bg-violet-500 text-white font-semibold px-5 py-2.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed">
    Disabled
  </button>
</div>`,
      hints: [
        "`disabled:` is Tailwind's variant for the `:disabled` CSS pseudo-class.",
        "`disabled:opacity-50` reduces visual weight to signal inactivity.",
        "`disabled:cursor-not-allowed` shows a no-entry cursor on hover.",
      ],
    },
    {
      id: 5,
      title: "First and Last Child Borders",
      difficulty: "Medium",
      instructions:
        "The menu items all have a `border-b`. Remove the border from the last item by adding `last:border-b-0` to each `<li>`. This avoids double borders or a dangling border at the bottom.",
      initialCode: `<ul class="bg-white rounded-xl border border-slate-200 divide-y-0 max-w-xs overflow-hidden">
  <li class="px-4 py-3 text-sm text-slate-700 border-b border-slate-100 hover:bg-slate-50 cursor-pointer">Profile</li>
  <li class="px-4 py-3 text-sm text-slate-700 border-b border-slate-100 hover:bg-slate-50 cursor-pointer">Settings</li>
  <li class="px-4 py-3 text-sm text-slate-700 border-b border-slate-100 hover:bg-slate-50 cursor-pointer">Billing</li>
  <li class="px-4 py-3 text-sm text-red-500  border-b border-slate-100 hover:bg-red-50  cursor-pointer">Sign Out</li>
</ul>`,
      solutionCode: `<ul class="bg-white rounded-xl border border-slate-200 divide-y-0 max-w-xs overflow-hidden">
  <li class="px-4 py-3 text-sm text-slate-700 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 cursor-pointer">Profile</li>
  <li class="px-4 py-3 text-sm text-slate-700 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 cursor-pointer">Settings</li>
  <li class="px-4 py-3 text-sm text-slate-700 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 cursor-pointer">Billing</li>
  <li class="px-4 py-3 text-sm text-red-500  border-b border-slate-100 last:border-b-0 hover:bg-red-50  cursor-pointer">Sign Out</li>
</ul>`,
      hints: [
        "`last:` targets the element when it is the last child of its parent.",
        "`last:border-b-0` removes the bottom border on the last list item.",
        "Add `last:border-b-0` to every `<li>` — it only activates on the actual last one.",
      ],
    },
    {
      id: 6,
      title: "Not Selector — Exclude the Active Tab",
      difficulty: "Medium",
      instructions:
        "The active tab has a white background and dark text. Add `not-last:text-slate-400` is not what we want here — instead add `hover:text-slate-700` only to the inactive tabs by using Tailwind's group of classes. More precisely: add `hover:bg-slate-100` to every tab *except* the active one using `not([aria-current])`. In Tailwind use the `aria-[current]:` variant: add `aria-[current=page]:bg-white aria-[current=page]:text-slate-800 aria-[current=page]:shadow-sm` to all tabs and add `aria-current=\"page\"` only to the active tab.",
      initialCode: `<div class="flex gap-1 bg-slate-100 p-1 rounded-xl max-w-sm">
  <button class="flex-1 px-4 py-2 text-sm font-medium rounded-lg bg-white text-slate-800 shadow-sm">Overview</button>
  <button class="flex-1 px-4 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-200">Analytics</button>
  <button class="flex-1 px-4 py-2 text-sm font-medium rounded-lg text-slate-500 hover:bg-slate-200">Reports</button>
</div>`,
      solutionCode: `<div class="flex gap-1 bg-slate-100 p-1 rounded-xl max-w-sm">
  <button aria-current="page" class="flex-1 px-4 py-2 text-sm font-medium rounded-lg aria-[current=page]:bg-white aria-[current=page]:text-slate-800 aria-[current=page]:shadow-sm text-slate-500 hover:bg-slate-200">Overview</button>
  <button class="flex-1 px-4 py-2 text-sm font-medium rounded-lg aria-[current=page]:bg-white aria-[current=page]:text-slate-800 aria-[current=page]:shadow-sm text-slate-500 hover:bg-slate-200">Analytics</button>
  <button class="flex-1 px-4 py-2 text-sm font-medium rounded-lg aria-[current=page]:bg-white aria-[current=page]:text-slate-800 aria-[current=page]:shadow-sm text-slate-500 hover:bg-slate-200">Reports</button>
</div>`,
      hints: [
        "Add `aria-current=\"page\"` to the active button only.",
        "Tailwind's `aria-[current=page]:` variant applies styles when the aria attribute matches.",
        "Add `aria-[current=page]:bg-white aria-[current=page]:text-slate-800 aria-[current=page]:shadow-sm` to all buttons.",
      ],
    },
    {
      id: 7,
      title: "Peer — Reveal Helper Text on Invalid Input",
      difficulty: "Medium",
      instructions:
        "The error message is always hidden. Mark the input with the `peer` class and update the error `<p>` to use `peer-invalid:block hidden` so it only appears when the input value fails HTML validation. The input has `required` and `minlength=\"6\"` already set.",
      initialCode: `<div class="flex flex-col gap-1 max-w-xs p-6 bg-white rounded-xl border border-slate-200">
  <label class="text-xs font-semibold text-slate-600">Password</label>
  <input
    type="text"
    required
    minlength="6"
    placeholder="Min 6 characters"
    class="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
  />
  <p class="text-xs text-red-500 hidden">Must be at least 6 characters.</p>
</div>`,
      solutionCode: `<div class="flex flex-col gap-1 max-w-xs p-6 bg-white rounded-xl border border-slate-200">
  <label class="text-xs font-semibold text-slate-600">Password</label>
  <input
    type="text"
    required
    minlength="6"
    placeholder="Min 6 characters"
    class="peer border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
  />
  <p class="text-xs text-red-500 hidden peer-invalid:block">Must be at least 6 characters.</p>
</div>`,
      hints: [
        "Add `peer` to the input element to mark it as the peer source.",
        "The sibling `<p>` needs `peer-invalid:block` to appear when the input is invalid.",
        "Keep `hidden` as the default — `peer-invalid:block` overrides it conditionally.",
      ],
    },
    {
      id: 8,
      title: "::before Decorative Bullet",
      difficulty: "Hard",
      instructions:
        "Each feature item should show a purple dot before it using a CSS `::before` pseudo-element. The items already have the class `feature-item`. Add an inline `<style>` block that sets `.feature-item::before { content: ''; display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #7c3aed; margin-right: 0.5rem; vertical-align: middle; }`.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-xs space-y-3">
  <p class="text-sm font-bold text-slate-800 mb-4">Why choose us?</p>
  <p class="feature-item text-sm text-slate-600">Unlimited projects</p>
  <p class="feature-item text-sm text-slate-600">24/7 support</p>
  <p class="feature-item text-sm text-slate-600">99.9% uptime SLA</p>
  <p class="feature-item text-sm text-slate-600">GDPR compliant</p>
</div>`,
      solutionCode: `<style>
.feature-item::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #7c3aed;
  margin-right: 0.5rem;
  vertical-align: middle;
}
</style>
<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-xs space-y-3">
  <p class="text-sm font-bold text-slate-800 mb-4">Why choose us?</p>
  <p class="feature-item text-sm text-slate-600">Unlimited projects</p>
  <p class="feature-item text-sm text-slate-600">24/7 support</p>
  <p class="feature-item text-sm text-slate-600">99.9% uptime SLA</p>
  <p class="feature-item text-sm text-slate-600">GDPR compliant</p>
</div>`,
      hints: [
        "`::before` inserts a generated content box before the element's content.",
        "Set `content: ''` (empty string) — the visual comes from width/height and background.",
        "Use `display: inline-block` so width and height apply to the inline pseudo-element.",
      ],
    },
    {
      id: 9,
      title: ":nth-child — Highlight Every Third Card",
      difficulty: "Hard",
      instructions:
        "Every third stat card should have a violet background to create a visual rhythm. Add an inline `<style>` block targeting `.stat-card:nth-child(3n) { background: #ede9fe; border-color: #c4b5fd; }` to highlight cards 3, 6, 9…",
      initialCode: `<div class="grid grid-cols-3 gap-3 p-4 bg-slate-100 rounded-xl">
  <div class="stat-card bg-white border border-slate-200 rounded-xl p-3 text-center"><p class="text-lg font-bold text-slate-800">12K</p><p class="text-xs text-slate-400">Users</p></div>
  <div class="stat-card bg-white border border-slate-200 rounded-xl p-3 text-center"><p class="text-lg font-bold text-slate-800">98%</p><p class="text-xs text-slate-400">Uptime</p></div>
  <div class="stat-card bg-white border border-slate-200 rounded-xl p-3 text-center"><p class="text-lg font-bold text-slate-800">4.9★</p><p class="text-xs text-slate-400">Rating</p></div>
  <div class="stat-card bg-white border border-slate-200 rounded-xl p-3 text-center"><p class="text-lg font-bold text-slate-800">50ms</p><p class="text-xs text-slate-400">Latency</p></div>
  <div class="stat-card bg-white border border-slate-200 rounded-xl p-3 text-center"><p class="text-lg font-bold text-slate-800">200+</p><p class="text-xs text-slate-400">Regions</p></div>
  <div class="stat-card bg-white border border-slate-200 rounded-xl p-3 text-center"><p class="text-lg font-bold text-slate-800">∞</p><p class="text-xs text-slate-400">Scale</p></div>
</div>`,
      solutionCode: `<style>
.stat-card:nth-child(3n) {
  background: #ede9fe;
  border-color: #c4b5fd;
}
</style>
<div class="grid grid-cols-3 gap-3 p-4 bg-slate-100 rounded-xl">
  <div class="stat-card bg-white border border-slate-200 rounded-xl p-3 text-center"><p class="text-lg font-bold text-slate-800">12K</p><p class="text-xs text-slate-400">Users</p></div>
  <div class="stat-card bg-white border border-slate-200 rounded-xl p-3 text-center"><p class="text-lg font-bold text-slate-800">98%</p><p class="text-xs text-slate-400">Uptime</p></div>
  <div class="stat-card bg-white border border-slate-200 rounded-xl p-3 text-center"><p class="text-lg font-bold text-slate-800">4.9★</p><p class="text-xs text-slate-400">Rating</p></div>
  <div class="stat-card bg-white border border-slate-200 rounded-xl p-3 text-center"><p class="text-lg font-bold text-slate-800">50ms</p><p class="text-xs text-slate-400">Latency</p></div>
  <div class="stat-card bg-white border border-slate-200 rounded-xl p-3 text-center"><p class="text-lg font-bold text-slate-800">200+</p><p class="text-xs text-slate-400">Regions</p></div>
  <div class="stat-card bg-white border border-slate-200 rounded-xl p-3 text-center"><p class="text-lg font-bold text-slate-800">∞</p><p class="text-xs text-slate-400">Scale</p></div>
</div>`,
      hints: [
        "`:nth-child(3n)` matches every element whose position is a multiple of 3 (3, 6, 9…).",
        "Add a `<style>` block above the grid with `.stat-card:nth-child(3n)` selector.",
        "Set `background` and `border-color` inside the rule.",
      ],
    },
    {
      id: 10,
      title: ":focus-within — Highlight the Whole Form Group",
      difficulty: "Hard",
      instructions:
        "When the input inside a form group is focused, the entire group wrapper should get a violet left border. Add the class `focus-within:border-l-4 focus-within:border-violet-400 focus-within:pl-3 transition-all duration-150` to each `.form-group` wrapper div.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-xs space-y-4">
  <div class="form-group space-y-1">
    <label class="text-xs font-semibold text-slate-600">Full Name</label>
    <input type="text" placeholder="Jane Doe" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none" />
  </div>
  <div class="form-group space-y-1">
    <label class="text-xs font-semibold text-slate-600">Email</label>
    <input type="email" placeholder="jane@example.com" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none" />
  </div>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-xs space-y-4">
  <div class="form-group space-y-1 focus-within:border-l-4 focus-within:border-violet-400 focus-within:pl-3 transition-all duration-150">
    <label class="text-xs font-semibold text-slate-600">Full Name</label>
    <input type="text" placeholder="Jane Doe" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none" />
  </div>
  <div class="form-group space-y-1 focus-within:border-l-4 focus-within:border-violet-400 focus-within:pl-3 transition-all duration-150">
    <label class="text-xs font-semibold text-slate-600">Email</label>
    <input type="email" placeholder="jane@example.com" class="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none" />
  </div>
</div>`,
      hints: [
        "`:focus-within` activates on a parent when any descendant is focused.",
        "Tailwind's `focus-within:` variant applies styles using this pseudo-class.",
        "Add `focus-within:border-l-4 focus-within:border-violet-400 focus-within:pl-3` to each group wrapper.",
      ],
    },
  ],
};
