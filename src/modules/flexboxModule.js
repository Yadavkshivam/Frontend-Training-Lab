/**
 * CSS Flexbox Module
 * 10 progressive challenges covering flex containers, axes, alignment,
 * wrapping, order, and grow/shrink behaviour.
 * Shape: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */
export const flexboxModule = {
  id: "css-flexbox",
  title: "CSS Flexbox",
  description:
    "Master one-dimensional layouts with Flexbox. Learn to align, distribute, and reorder elements along main and cross axes.",
  difficulty: "Beginner",
  icon: "📐",
  color: "emerald",
  questions: [
    {
      id: 1,
      title: "Make a Flex Container",
      difficulty: "Easy",
      instructions:
        "The three colored boxes stack vertically. Turn the wrapper into a flex container so the boxes line up **horizontally** in a row.",
      initialCode: `<div class="w-full p-6 bg-slate-100 rounded-lg">
  <div class="w-16 h-16 bg-blue-500 rounded-lg"></div>
  <div class="w-16 h-16 bg-green-500 rounded-lg"></div>
  <div class="w-16 h-16 bg-rose-500 rounded-lg"></div>
</div>`,
      solutionCode: `<div class="w-full p-6 bg-slate-100 rounded-lg flex gap-4">
  <div class="w-16 h-16 bg-blue-500 rounded-lg"></div>
  <div class="w-16 h-16 bg-green-500 rounded-lg"></div>
  <div class="w-16 h-16 bg-rose-500 rounded-lg"></div>
</div>`,
      hints: [
        "Add `flex` to the parent div to start a flex context.",
        "Items flow in a row by default once `flex` is applied.",
        "Add `gap-4` so the boxes have space between them.",
      ],
    },
    {
      id: 2,
      title: "Center Items on Both Axes",
      difficulty: "Easy",
      instructions:
        "The blue card inside the tall gray container should be **perfectly centered** — both horizontally and vertically.",
      initialCode: `<div class="w-full h-72 bg-slate-200 rounded-lg flex">
  <div class="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg">Centered</div>
</div>`,
      solutionCode: `<div class="w-full h-72 bg-slate-200 rounded-lg flex items-center justify-center">
  <div class="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg">Centered</div>
</div>`,
      hints: [
        "`justify-content` controls alignment on the main axis (horizontal by default).",
        "`align-items` controls alignment on the cross axis (vertical by default).",
        "Add `items-center justify-center` to the container.",
      ],
    },
    {
      id: 3,
      title: "Space Between Nav Items",
      difficulty: "Easy",
      instructions:
        "The navbar logo and links should be pushed to **opposite ends** of the bar. Keep the links grouped on the right and the logo on the left.",
      initialCode: `<nav class="w-full bg-slate-800 text-white px-6 py-4 flex items-center">
  <span class="font-bold text-lg">Logo</span>
  <div class="flex gap-4 text-sm text-slate-300">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`,
      solutionCode: `<nav class="w-full bg-slate-800 text-white px-6 py-4 flex items-center justify-between">
  <span class="font-bold text-lg">Logo</span>
  <div class="flex gap-4 text-sm text-slate-300">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`,
      hints: [
        "The container already has `flex` and `items-center`.",
        "`justify-between` pushes first and last children to opposite ends.",
        "Add `justify-between` to the nav element.",
      ],
    },
    {
      id: 4,
      title: "Column Direction",
      difficulty: "Easy",
      instructions:
        "The three step cards should stack **vertically** (top to bottom) with a gap, not sit side-by-side. Change the flex direction.",
      initialCode: `<div class="w-64 p-4 bg-slate-50 rounded-lg flex gap-3">
  <div class="bg-white border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700">Step 1 – Plan</div>
  <div class="bg-white border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700">Step 2 – Design</div>
  <div class="bg-white border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700">Step 3 – Build</div>
</div>`,
      solutionCode: `<div class="w-64 p-4 bg-slate-50 rounded-lg flex flex-col gap-3">
  <div class="bg-white border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700">Step 1 – Plan</div>
  <div class="bg-white border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700">Step 2 – Design</div>
  <div class="bg-white border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700">Step 3 – Build</div>
</div>`,
      hints: [
        "By default flex lays items in a row (`flex-row`).",
        "`flex-col` switches the main axis to vertical.",
        "Add `flex-col` to the container alongside the existing `flex`.",
      ],
    },
    {
      id: 5,
      title: "Flex Grow — Fill Remaining Space",
      difficulty: "Medium",
      instructions:
        "The search bar input should **stretch** to fill all the horizontal space between the icon on the left and the button on the right.",
      initialCode: `<div class="w-full flex items-center gap-2 bg-white border border-slate-300 rounded-lg px-3 py-2">
  <svg class="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/></svg>
  <input type="text" placeholder="Search…" class="outline-none text-sm text-slate-700" />
  <button class="shrink-0 bg-blue-500 text-white text-xs px-3 py-1 rounded-md">Go</button>
</div>`,
      solutionCode: `<div class="w-full flex items-center gap-2 bg-white border border-slate-300 rounded-lg px-3 py-2">
  <svg class="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/></svg>
  <input type="text" placeholder="Search…" class="flex-1 outline-none text-sm text-slate-700" />
  <button class="shrink-0 bg-blue-500 text-white text-xs px-3 py-1 rounded-md">Go</button>
</div>`,
      hints: [
        "`flex-grow: 1` (or `flex-1`) makes an item absorb all available free space.",
        "The icon and button already have `shrink-0`; the input should grow.",
        "Add `flex-1` to the `<input>` element.",
      ],
    },
    {
      id: 6,
      title: "Align a Single Item Differently",
      difficulty: "Medium",
      instructions:
        "The three stat cards are in a row aligned to the top. The middle card (Conversion) should stretch to the **bottom** of the row while the others stay at the top. Use `align-self` on just that card.",
      initialCode: `<div class="w-full flex gap-4 items-start p-4 bg-slate-100 rounded-xl">
  <div class="bg-white border border-slate-200 rounded-lg p-5 flex-1">
    <p class="text-xs text-slate-400 uppercase tracking-wide">Users</p>
    <p class="text-2xl font-bold text-slate-800 mt-1">12,400</p>
  </div>
  <div class="bg-white border border-slate-200 rounded-lg p-5 flex-1">
    <p class="text-xs text-slate-400 uppercase tracking-wide">Conversion</p>
    <p class="text-2xl font-bold text-slate-800 mt-1">4.2%</p>
    <p class="text-xs text-slate-400 mt-2">Up from 3.8% last month</p>
    <p class="text-xs text-slate-400">Based on 30-day data</p>
  </div>
  <div class="bg-white border border-slate-200 rounded-lg p-5 flex-1">
    <p class="text-xs text-slate-400 uppercase tracking-wide">Revenue</p>
    <p class="text-2xl font-bold text-slate-800 mt-1">$98k</p>
  </div>
</div>`,
      solutionCode: `<div class="w-full flex gap-4 items-start p-4 bg-slate-100 rounded-xl">
  <div class="bg-white border border-slate-200 rounded-lg p-5 flex-1">
    <p class="text-xs text-slate-400 uppercase tracking-wide">Users</p>
    <p class="text-2xl font-bold text-slate-800 mt-1">12,400</p>
  </div>
  <div class="bg-white border border-slate-200 rounded-lg p-5 flex-1 self-stretch">
    <p class="text-xs text-slate-400 uppercase tracking-wide">Conversion</p>
    <p class="text-2xl font-bold text-slate-800 mt-1">4.2%</p>
    <p class="text-xs text-slate-400 mt-2">Up from 3.8% last month</p>
    <p class="text-xs text-slate-400">Based on 30-day data</p>
  </div>
  <div class="bg-white border border-slate-200 rounded-lg p-5 flex-1">
    <p class="text-xs text-slate-400 uppercase tracking-wide">Revenue</p>
    <p class="text-2xl font-bold text-slate-800 mt-1">$98k</p>
  </div>
</div>`,
      hints: [
        "The parent uses `items-start`; this is the default alignment for all children.",
        "`align-self` overrides the parent's `align-items` for just one child.",
        "Add `self-stretch` to the middle card only.",
      ],
    },
    {
      id: 7,
      title: "Flex Wrap for Tag Cloud",
      difficulty: "Medium",
      instructions:
        "The skill tags overflow their container on one line. Allow them to **wrap** onto multiple lines so all tags are visible.",
      initialCode: `<div class="w-72 p-4 bg-slate-50 rounded-xl border border-slate-200 flex gap-2">
  <span class="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">HTML</span>
  <span class="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">CSS</span>
  <span class="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">JavaScript</span>
  <span class="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">React</span>
  <span class="bg-rose-100 text-rose-700 text-xs font-medium px-3 py-1 rounded-full">Tailwind</span>
  <span class="bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">TypeScript</span>
  <span class="bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full">Node.js</span>
</div>`,
      solutionCode: `<div class="w-72 p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-wrap gap-2">
  <span class="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">HTML</span>
  <span class="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">CSS</span>
  <span class="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">JavaScript</span>
  <span class="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">React</span>
  <span class="bg-rose-100 text-rose-700 text-xs font-medium px-3 py-1 rounded-full">Tailwind</span>
  <span class="bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">TypeScript</span>
  <span class="bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full">Node.js</span>
</div>`,
      hints: [
        "By default flex items stay on one line (`nowrap`).",
        "`flex-wrap` allows items to jump to the next line when they overflow.",
        "Add `flex-wrap` to the container alongside the existing `flex`.",
      ],
    },
    {
      id: 8,
      title: "Reverse Row Order",
      difficulty: "Medium",
      instructions:
        "The image should appear on the **right** and the text block on the **left** without changing the HTML source order. Use `flex-row-reverse`.",
      initialCode: `<div class="w-full flex gap-6 items-center p-6 bg-white rounded-xl border border-slate-200">
  <div class="flex-1">
    <h2 class="text-xl font-bold text-slate-800">Why Flexbox?</h2>
    <p class="text-sm text-slate-500 mt-2">Flexbox gives you powerful control over alignment and distribution in one dimension.</p>
    <button class="mt-4 bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg">Learn More</button>
  </div>
  <div class="w-32 h-32 bg-linear-to-br from-blue-400 to-indigo-500 rounded-xl shrink-0 flex items-center justify-center text-white text-4xl">📐</div>
</div>`,
      solutionCode: `<div class="w-full flex flex-row-reverse gap-6 items-center p-6 bg-white rounded-xl border border-slate-200">
  <div class="flex-1">
    <h2 class="text-xl font-bold text-slate-800">Why Flexbox?</h2>
    <p class="text-sm text-slate-500 mt-2">Flexbox gives you powerful control over alignment and distribution in one dimension.</p>
    <button class="mt-4 bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg">Learn More</button>
  </div>
  <div class="w-32 h-32 bg-linear-to-br from-blue-400 to-indigo-500 rounded-xl shrink-0 flex items-center justify-center text-white text-4xl">📐</div>
</div>`,
      hints: [
        "You should not swap the HTML elements — use a CSS-only approach.",
        "`flex-row-reverse` reverses the visual order of children.",
        "Replace the implied `flex-row` by adding `flex-row-reverse` to the container.",
      ],
    },
    {
      id: 9,
      title: "Equal-Width Columns with flex-1",
      difficulty: "Medium",
      instructions:
        "The dashboard stat cards should each take up an **equal share** of the row width regardless of their content length. Use `flex-1` on each card.",
      initialCode: `<div class="w-full flex gap-4 p-4 bg-slate-100 rounded-xl">
  <div class="bg-white rounded-xl p-5 border border-slate-200 text-center">
    <p class="text-xs text-slate-400 uppercase">Sessions</p>
    <p class="text-2xl font-bold text-slate-800 mt-1">1,204</p>
  </div>
  <div class="bg-white rounded-xl p-5 border border-slate-200 text-center">
    <p class="text-xs text-slate-400 uppercase">Bounce Rate</p>
    <p class="text-2xl font-bold text-slate-800 mt-1">38.7%</p>
  </div>
  <div class="bg-white rounded-xl p-5 border border-slate-200 text-center">
    <p class="text-xs text-slate-400 uppercase">Avg. Duration</p>
    <p class="text-2xl font-bold text-slate-800 mt-1">2m 14s</p>
  </div>
</div>`,
      solutionCode: `<div class="w-full flex gap-4 p-4 bg-slate-100 rounded-xl">
  <div class="flex-1 bg-white rounded-xl p-5 border border-slate-200 text-center">
    <p class="text-xs text-slate-400 uppercase">Sessions</p>
    <p class="text-2xl font-bold text-slate-800 mt-1">1,204</p>
  </div>
  <div class="flex-1 bg-white rounded-xl p-5 border border-slate-200 text-center">
    <p class="text-xs text-slate-400 uppercase">Bounce Rate</p>
    <p class="text-2xl font-bold text-slate-800 mt-1">38.7%</p>
  </div>
  <div class="flex-1 bg-white rounded-xl p-5 border border-slate-200 text-center">
    <p class="text-xs text-slate-400 uppercase">Avg. Duration</p>
    <p class="text-2xl font-bold text-slate-800 mt-1">2m 14s</p>
  </div>
</div>`,
      hints: [
        "`flex-1` is shorthand for `flex-grow: 1; flex-shrink: 1; flex-basis: 0`.",
        "When all siblings have `flex-1` they share free space equally.",
        "Add `flex-1` to each of the three card divs.",
      ],
    },
    {
      id: 10,
      title: "Sticky Footer with Column Flex",
      difficulty: "Hard",
      instructions:
        "The card has a header, body, and footer. The footer button should always stick to the **bottom** of the card even when the body content is short. Use a column flex layout with `flex-1` on the body.",
      initialCode: `<div class="w-72 h-80 bg-white rounded-xl border border-slate-200 overflow-hidden p-5">
  <div class="border-b border-slate-100 pb-3 mb-3">
    <h3 class="font-bold text-slate-800">Project Alpha</h3>
    <p class="text-xs text-slate-400 mt-0.5">Due: April 30</p>
  </div>
  <div>
    <p class="text-sm text-slate-500">Short description.</p>
  </div>
  <div class="pt-3 border-t border-slate-100 mt-3">
    <button class="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-lg">Open Project</button>
  </div>
</div>`,
      solutionCode: `<div class="w-72 h-80 bg-white rounded-xl border border-slate-200 overflow-hidden p-5 flex flex-col">
  <div class="border-b border-slate-100 pb-3 mb-3">
    <h3 class="font-bold text-slate-800">Project Alpha</h3>
    <p class="text-xs text-slate-400 mt-0.5">Due: April 30</p>
  </div>
  <div class="flex-1">
    <p class="text-sm text-slate-500">Short description.</p>
  </div>
  <div class="pt-3 border-t border-slate-100 mt-3">
    <button class="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-lg">Open Project</button>
  </div>
</div>`,
      hints: [
        "Make the card a `flex flex-col` container so children stack vertically.",
        "The middle body section should absorb remaining height with `flex-1`.",
        "The footer will then naturally sit at the bottom of the fixed-height card.",
      ],
    },
  ],
};
