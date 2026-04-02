/**
 * CSS Grid Module
 * 10 progressive challenges covering grid containers, columns/rows,
 * gap, spanning, template areas, and auto-placement.
 * Shape: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */
export const gridModule = {
  id: "css-grid",
  title: "CSS Grid",
  description:
    "Build two-dimensional layouts with CSS Grid. Control rows, columns, gaps, and spanning to create complex page structures with ease.",
  difficulty: "Intermediate",
  icon: "🔲",
  color: "amber",
  questions: [
    {
      id: 1,
      title: "Create a 3-Column Grid",
      difficulty: "Easy",
      instructions:
        "The six cards are stacking vertically. Turn the container into a **3-column CSS grid** with equal columns and a gap between items.",
      initialCode: `<div class="p-6 bg-slate-100 rounded-xl">
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 1</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 2</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 3</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 4</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 5</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 6</div>
</div>`,
      solutionCode: `<div class="p-6 bg-slate-100 rounded-xl grid grid-cols-3 gap-4">
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 1</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 2</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 3</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 4</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 5</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 6</div>
</div>`,
      hints: [
        "Add `grid` to the container to activate CSS grid.",
        "`grid-cols-3` creates three equal-width columns.",
        "Add `gap-4` to create spacing between all grid cells.",
      ],
    },
    {
      id: 2,
      title: "Span a Card Across Two Columns",
      difficulty: "Easy",
      instructions:
        "You have a 3-column grid. Make the first card (Featured) span **2 columns** wide so it stands out from the rest.",
      initialCode: `<div class="p-6 bg-slate-100 rounded-xl grid grid-cols-3 gap-4">
  <div class="bg-blue-500 text-white rounded-lg p-5">
    <p class="text-xs uppercase tracking-wide opacity-75">Featured</p>
    <p class="text-lg font-bold mt-1">Main Article</p>
  </div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 2</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 3</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 4</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 5</div>
</div>`,
      solutionCode: `<div class="p-6 bg-slate-100 rounded-xl grid grid-cols-3 gap-4">
  <div class="col-span-2 bg-blue-500 text-white rounded-lg p-5">
    <p class="text-xs uppercase tracking-wide opacity-75">Featured</p>
    <p class="text-lg font-bold mt-1">Main Article</p>
  </div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 2</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 3</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 4</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 5</div>
</div>`,
      hints: [
        "`col-span-{n}` makes an item span across n grid columns.",
        "Add the class to the item itself, not the container.",
        "Add `col-span-2` to the Featured card div.",
      ],
    },
    {
      id: 3,
      title: "Fixed + Flexible Columns",
      difficulty: "Easy",
      instructions:
        "The sidebar should be a **fixed 200px wide** and the main content should fill the rest. Use `grid-cols-[200px_1fr]` to achieve this.",
      initialCode: `<div class="h-64 rounded-xl overflow-hidden grid bg-slate-100">
  <aside class="bg-slate-800 text-white p-4">
    <p class="text-sm font-bold mb-3">Sidebar</p>
    <ul class="space-y-2 text-xs text-slate-400">
      <li>Dashboard</li>
      <li>Reports</li>
      <li>Settings</li>
    </ul>
  </aside>
  <main class="p-6 bg-white">
    <h2 class="text-lg font-semibold text-slate-800">Main Content</h2>
    <p class="text-sm text-slate-500 mt-2">This area fills the remaining space.</p>
  </main>
</div>`,
      solutionCode: `<div class="h-64 rounded-xl overflow-hidden grid grid-cols-[200px_1fr] bg-slate-100">
  <aside class="bg-slate-800 text-white p-4">
    <p class="text-sm font-bold mb-3">Sidebar</p>
    <ul class="space-y-2 text-xs text-slate-400">
      <li>Dashboard</li>
      <li>Reports</li>
      <li>Settings</li>
    </ul>
  </aside>
  <main class="p-6 bg-white">
    <h2 class="text-lg font-semibold text-slate-800">Main Content</h2>
    <p class="text-sm text-slate-500 mt-2">This area fills the remaining space.</p>
  </main>
</div>`,
      hints: [
        "Tailwind supports arbitrary values with square brackets: `grid-cols-[...]`.",
        "`200px` is a fixed track; `1fr` takes all remaining space.",
        "Add `grid-cols-[200px_1fr]` to the container (use underscore for space inside brackets).",
      ],
    },
    {
      id: 4,
      title: "Row Gap vs Column Gap",
      difficulty: "Easy",
      instructions:
        "The 2-column form grid needs **more vertical space** (gap-y-6) between rows but only a small horizontal gap (gap-x-4) between the two columns.",
      initialCode: `<div class="p-6 bg-white rounded-xl border border-slate-200 grid grid-cols-2 gap-2">
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">First Name</label>
    <input class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" placeholder="Jane" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">Last Name</label>
    <input class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" placeholder="Doe" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">Email</label>
    <input class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" placeholder="jane@example.com" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">Phone</label>
    <input class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" placeholder="+1 555 0100" />
  </div>
</div>`,
      solutionCode: `<div class="p-6 bg-white rounded-xl border border-slate-200 grid grid-cols-2 gap-x-4 gap-y-6">
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">First Name</label>
    <input class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" placeholder="Jane" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">Last Name</label>
    <input class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" placeholder="Doe" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">Email</label>
    <input class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" placeholder="jane@example.com" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">Phone</label>
    <input class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" placeholder="+1 555 0100" />
  </div>
</div>`,
      hints: [
        "`gap` sets both row and column gaps equally.",
        "`gap-x-{n}` controls only horizontal (column) gaps.",
        "`gap-y-{n}` controls only vertical (row) gaps. Replace `gap-2` with `gap-x-4 gap-y-6`.",
      ],
    },
    {
      id: 5,
      title: "Full-Width Item in a Grid",
      difficulty: "Medium",
      instructions:
        "The form has a 2-column grid for the fields. The 'Message' textarea at the bottom should span the **full width** (both columns).",
      initialCode: `<div class="p-6 bg-white rounded-xl border border-slate-200 grid grid-cols-2 gap-4">
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">Name</label>
    <input class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" placeholder="Your name" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">Email</label>
    <input class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" placeholder="your@email.com" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">Message</label>
    <textarea class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none resize-none h-24" placeholder="Write your message…"></textarea>
  </div>
</div>`,
      solutionCode: `<div class="p-6 bg-white rounded-xl border border-slate-200 grid grid-cols-2 gap-4">
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">Name</label>
    <input class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" placeholder="Your name" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">Email</label>
    <input class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none" placeholder="your@email.com" />
  </div>
  <div class="col-span-2 flex flex-col gap-1">
    <label class="text-xs font-medium text-slate-600">Message</label>
    <textarea class="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none resize-none h-24" placeholder="Write your message…"></textarea>
  </div>
</div>`,
      hints: [
        "The grid has 2 columns, so a full-width item needs to span all 2.",
        "`col-span-2` makes the item stretch across both columns.",
        "Add `col-span-2` to the Message wrapper div.",
      ],
    },
    {
      id: 6,
      title: "Auto-Fill Responsive Grid",
      difficulty: "Medium",
      instructions:
        "Use `grid-cols-[repeat(auto-fill,minmax(140px,1fr))]` so the card grid **automatically** creates as many columns as fit, each at least 140px wide.",
      initialCode: `<div class="p-6 bg-slate-100 rounded-xl grid grid-cols-3 gap-4">
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-center text-sm font-medium text-slate-700">🎨 Design</div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-center text-sm font-medium text-slate-700">⚡ Speed</div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-center text-sm font-medium text-slate-700">🔒 Security</div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-center text-sm font-medium text-slate-700">📱 Mobile</div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-center text-sm font-medium text-slate-700">🌐 SEO</div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-center text-sm font-medium text-slate-700">♿ A11y</div>
</div>`,
      solutionCode: `<div class="p-6 bg-slate-100 rounded-xl grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-center text-sm font-medium text-slate-700">🎨 Design</div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-center text-sm font-medium text-slate-700">⚡ Speed</div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-center text-sm font-medium text-slate-700">🔒 Security</div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-center text-sm font-medium text-slate-700">📱 Mobile</div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-center text-sm font-medium text-slate-700">🌐 SEO</div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-center text-sm font-medium text-slate-700">♿ A11y</div>
</div>`,
      hints: [
        "`auto-fill` fills the row with as many tracks as possible.",
        "`minmax(140px, 1fr)` sets a minimum of 140px and lets the track grow.",
        "Use Tailwind arbitrary value: `grid-cols-[repeat(auto-fill,minmax(140px,1fr))]`.",
      ],
    },
    {
      id: 7,
      title: "Row Spanning — Tall Featured Card",
      difficulty: "Medium",
      instructions:
        "In this 2-column grid the left 'Featured' card should span **2 rows** tall, making it the same height as the two smaller cards stacked beside it.",
      initialCode: `<div class="p-6 bg-slate-100 rounded-xl grid grid-cols-2 gap-4">
  <div class="bg-blue-600 text-white rounded-xl p-6 flex flex-col justify-between">
    <span class="text-xs uppercase tracking-wide opacity-75">Featured</span>
    <div>
      <h2 class="text-xl font-bold">Big Announcement</h2>
      <p class="text-sm opacity-80 mt-1">Something exciting is coming very soon.</p>
    </div>
  </div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-sm font-medium text-slate-700">Update 1</div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-sm font-medium text-slate-700">Update 2</div>
</div>`,
      solutionCode: `<div class="p-6 bg-slate-100 rounded-xl grid grid-cols-2 gap-4">
  <div class="row-span-2 bg-blue-600 text-white rounded-xl p-6 flex flex-col justify-between">
    <span class="text-xs uppercase tracking-wide opacity-75">Featured</span>
    <div>
      <h2 class="text-xl font-bold">Big Announcement</h2>
      <p class="text-sm opacity-80 mt-1">Something exciting is coming very soon.</p>
    </div>
  </div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-sm font-medium text-slate-700">Update 1</div>
  <div class="bg-white rounded-xl p-4 border border-slate-200 text-sm font-medium text-slate-700">Update 2</div>
</div>`,
      hints: [
        "`row-span-{n}` stretches an item across multiple grid rows.",
        "It works just like `col-span` but on the vertical axis.",
        "Add `row-span-2` to the Featured card div.",
      ],
    },
    {
      id: 8,
      title: "Place an Item at an Exact Cell",
      difficulty: "Medium",
      instructions:
        "In this 3-column grid, move the **Highlight** card so it starts at column 2 and row 1 — place it explicitly using `col-start-2` and `row-start-1`.",
      initialCode: `<div class="p-4 bg-slate-100 rounded-xl grid grid-cols-3 gap-4">
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm text-slate-600">Cell A</div>
  <div class="bg-yellow-400 rounded-lg p-4 text-sm font-bold text-yellow-900">Highlight</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm text-slate-600">Cell C</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm text-slate-600">Cell D</div>
</div>`,
      solutionCode: `<div class="p-4 bg-slate-100 rounded-xl grid grid-cols-3 gap-4">
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm text-slate-600">Cell A</div>
  <div class="col-start-2 row-start-1 bg-yellow-400 rounded-lg p-4 text-sm font-bold text-yellow-900">Highlight</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm text-slate-600">Cell C</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm text-slate-600">Cell D</div>
</div>`,
      hints: [
        "`col-start-{n}` places the item at a specific column line.",
        "`row-start-{n}` places the item at a specific row line.",
        "Add `col-start-2 row-start-1` to the Highlight div.",
      ],
    },
    {
      id: 9,
      title: "Classic Page Layout with Grid Areas",
      difficulty: "Hard",
      instructions:
        "Create a classic header / sidebar / main / footer layout using `grid-areas`. The container should have rows for header (auto), a middle section (flex-1), and footer (auto). The middle row should use 2 columns: sidebar (200px) and main (1fr).",
      initialCode: `<div class="h-96 bg-slate-100 rounded-xl overflow-hidden grid gap-1">
  <header class="bg-blue-600 text-white px-6 py-3 font-bold text-sm">Header</header>
  <aside class="bg-slate-800 p-4 text-xs text-slate-300">Sidebar</aside>
  <main class="bg-white p-6 text-sm text-slate-600">Main content area</main>
  <footer class="bg-slate-200 px-6 py-3 text-xs text-slate-500">Footer</footer>
</div>`,
      solutionCode: `<div class="h-96 bg-slate-100 rounded-xl overflow-hidden grid grid-rows-[auto_1fr_auto] grid-cols-[200px_1fr] gap-1 [grid-template-areas:'header_header'_'sidebar_main'_'footer_footer']">
  <header class="[grid-area:header] bg-blue-600 text-white px-6 py-3 font-bold text-sm">Header</header>
  <aside class="[grid-area:sidebar] bg-slate-800 p-4 text-xs text-slate-300">Sidebar</aside>
  <main class="[grid-area:main] bg-white p-6 text-sm text-slate-600">Main content area</main>
  <footer class="[grid-area:footer] bg-slate-200 px-6 py-3 text-xs text-slate-500">Footer</footer>
</div>`,
      hints: [
        "Use `grid-template-areas` to name regions. Each string is a row, each word is a cell.",
        "Tailwind arbitrary value for template areas: `[grid-template-areas:'header_header'_'sidebar_main'_'footer_footer']`.",
        "Assign each child to its area with `[grid-area:header]`, `[grid-area:sidebar]`, etc.",
      ],
    },
    {
      id: 10,
      title: "Masonry-Style Unequal Rows",
      difficulty: "Hard",
      instructions:
        "Create a 3-column grid where each column has a **different height**: 120px / 180px / 120px. Use `grid-rows-[120px_180px_120px]` on the container and make card 2 span 2 rows.",
      initialCode: `<div class="p-4 bg-slate-100 rounded-xl grid grid-cols-3 gap-4">
  <div class="bg-blue-100 text-blue-800 rounded-xl p-4 text-sm font-medium flex items-center justify-center">Short</div>
  <div class="bg-indigo-500 text-white rounded-xl p-4 text-sm font-bold flex items-center justify-center">Tall Feature</div>
  <div class="bg-blue-100 text-blue-800 rounded-xl p-4 text-sm font-medium flex items-center justify-center">Short</div>
  <div class="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-600 flex items-center justify-center">Row 2 A</div>
  <div class="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-600 flex items-center justify-center">Row 2 C</div>
</div>`,
      solutionCode: `<div class="p-4 bg-slate-100 rounded-xl grid grid-cols-3 grid-rows-[120px_180px_120px] gap-4">
  <div class="bg-blue-100 text-blue-800 rounded-xl p-4 text-sm font-medium flex items-center justify-center">Short</div>
  <div class="row-span-2 bg-indigo-500 text-white rounded-xl p-4 text-sm font-bold flex items-center justify-center">Tall Feature</div>
  <div class="bg-blue-100 text-blue-800 rounded-xl p-4 text-sm font-medium flex items-center justify-center">Short</div>
  <div class="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-600 flex items-center justify-center">Row 2 A</div>
  <div class="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-600 flex items-center justify-center">Row 2 C</div>
</div>`,
      hints: [
        "`grid-rows-[...]` defines explicit row heights using arbitrary values.",
        "Make the Tall Feature card span two rows with `row-span-2`.",
        "Add `grid-rows-[120px_180px_120px]` to the container and `row-span-2` to the second card.",
      ],
    },
  ],
};
