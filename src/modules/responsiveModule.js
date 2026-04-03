/**
 * Responsive Design Module
 * 10 challenges covering Tailwind breakpoint prefixes, responsive
 * typography, show/hide, flex-to-stack patterns, and mobile-first thinking.
 * Shape: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */
export const responsiveModule = {
  id: "responsive-design",
  title: "Responsive Design",
  description:
    "Build layouts that look great on every screen size. Learn Tailwind's mobile-first breakpoint system to adapt typography, grids, and spacing.",
  difficulty: "Intermediate",
  icon: "📱",
  color: "rose",
  questions: [
    {
      id: 1,
      title: "Stack on Mobile, Row on Desktop",
      difficulty: "Easy",
      instructions:
        "The two panels should stack vertically on small screens and sit **side by side** on medium screens and wider. Use `flex-col` as the default and `md:flex-row` to switch at the `md` breakpoint.",
      initialCode: `<div class="flex gap-4 p-4 bg-slate-100 rounded-xl">
  <div class="flex-1 bg-white rounded-lg p-5 border border-slate-200">
    <h3 class="font-semibold text-slate-800">Panel A</h3>
    <p class="text-sm text-slate-500 mt-1">Left panel content goes here.</p>
  </div>
  <div class="flex-1 bg-white rounded-lg p-5 border border-slate-200">
    <h3 class="font-semibold text-slate-800">Panel B</h3>
    <p class="text-sm text-slate-500 mt-1">Right panel content goes here.</p>
  </div>
</div>`,
      solutionCode: `<div class="flex flex-col md:flex-row gap-4 p-4 bg-slate-100 rounded-xl">
  <div class="flex-1 bg-white rounded-lg p-5 border border-slate-200">
    <h3 class="font-semibold text-slate-800">Panel A</h3>
    <p class="text-sm text-slate-500 mt-1">Left panel content goes here.</p>
  </div>
  <div class="flex-1 bg-white rounded-lg p-5 border border-slate-200">
    <h3 class="font-semibold text-slate-800">Panel B</h3>
    <p class="text-sm text-slate-500 mt-1">Right panel content goes here.</p>
  </div>
</div>`,
      hints: [
        "Tailwind is mobile-first — start with the mobile style, then override at breakpoints.",
        "`flex-col` stacks items vertically (mobile default).",
        "`md:flex-row` switches to horizontal at the `md` (768px) breakpoint.",
      ],
    },
    {
      id: 2,
      title: "Responsive Typography Scale",
      difficulty: "Easy",
      instructions:
        "The heading should be **small on mobile** (text-xl) and grow through sizes at larger breakpoints: text-2xl at `sm`, text-4xl at `md`, and text-5xl at `lg`.",
      initialCode: `<section class="p-8 bg-white rounded-xl border border-slate-200 text-center">
  <h1 class="text-4xl font-bold text-slate-800">Grow With Us</h1>
  <p class="text-slate-500 mt-3 max-w-md mx-auto">A platform designed to scale with your ambitions — from solo project to enterprise.</p>
</section>`,
      solutionCode: `<section class="p-8 bg-white rounded-xl border border-slate-200 text-center">
  <h1 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800">Grow With Us</h1>
  <p class="text-slate-500 mt-3 max-w-md mx-auto">A platform designed to scale with your ambitions — from solo project to enterprise.</p>
</section>`,
      hints: [
        "Start with the smallest size as the base: `text-xl`.",
        "Then layer on larger sizes with breakpoint prefixes: `sm:`, `md:`, `lg:`.",
        "Final class list: `text-xl sm:text-2xl md:text-4xl lg:text-5xl`.",
      ],
    },
    {
      id: 3,
      title: "Responsive Column Count",
      difficulty: "Easy",
      instructions:
        "The card grid should show **1 column on mobile**, 2 columns on `sm`, and 3 columns on `md` screens. Use responsive `grid-cols-*` classes.",
      initialCode: `<div class="p-6 bg-slate-100 rounded-xl grid grid-cols-3 gap-4">
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 1</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 2</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 3</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 4</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 5</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 6</div>
</div>`,
      solutionCode: `<div class="p-6 bg-slate-100 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 1</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 2</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 3</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 4</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 5</div>
  <div class="bg-white rounded-lg p-4 border border-slate-200 text-sm font-medium text-slate-700">Card 6</div>
</div>`,
      hints: [
        "Default (mobile): `grid-cols-1`.",
        "At `sm` (640px): `sm:grid-cols-2`.",
        "At `md` (768px): `md:grid-cols-3`. All three go on the same element.",
      ],
    },
    {
      id: 4,
      title: "Hide on Mobile, Show on Desktop",
      difficulty: "Easy",
      instructions:
        "The sidebar navigation should be **hidden on small screens** and visible from the `md` breakpoint onwards. Use `hidden` as the default with `md:block` to reveal it.",
      initialCode: `<div class="flex h-64 bg-slate-100 rounded-xl overflow-hidden gap-1">
  <aside class="w-48 bg-slate-800 text-white p-4 shrink-0">
    <p class="text-xs font-bold mb-3 text-slate-300 uppercase tracking-wide">Menu</p>
    <ul class="space-y-2 text-sm text-slate-400">
      <li>Dashboard</li>
      <li>Reports</li>
      <li>Settings</li>
    </ul>
  </aside>
  <main class="flex-1 bg-white p-6">
    <h2 class="font-semibold text-slate-800">Content Area</h2>
    <p class="text-sm text-slate-500 mt-2">Resize the preview to see the sidebar hide.</p>
  </main>
</div>`,
      solutionCode: `<div class="flex h-64 bg-slate-100 rounded-xl overflow-hidden gap-1">
  <aside class="hidden md:block w-48 bg-slate-800 text-white p-4 shrink-0">
    <p class="text-xs font-bold mb-3 text-slate-300 uppercase tracking-wide">Menu</p>
    <ul class="space-y-2 text-sm text-slate-400">
      <li>Dashboard</li>
      <li>Reports</li>
      <li>Settings</li>
    </ul>
  </aside>
  <main class="flex-1 bg-white p-6">
    <h2 class="font-semibold text-slate-800">Content Area</h2>
    <p class="text-sm text-slate-500 mt-2">Resize the preview to see the sidebar hide.</p>
  </main>
</div>`,
      hints: [
        "`hidden` sets `display: none` — hides the element on all sizes by default.",
        "`md:block` overrides to `display: block` from the `md` breakpoint upwards.",
        "Add `hidden md:block` to the `<aside>` element.",
      ],
    },
    {
      id: 5,
      title: "Responsive Padding",
      difficulty: "Easy",
      instructions:
        "The card should have **tight padding on mobile** (p-4) and generously spaced padding on larger screens (p-8 at `md`, p-12 at `lg`).",
      initialCode: `<div class="p-12 bg-white rounded-xl border border-slate-200 max-w-lg mx-auto">
  <h2 class="text-xl font-bold text-slate-800">Responsive Padding</h2>
  <p class="text-sm text-slate-500 mt-2">The padding on this card should shrink on mobile and grow on larger screens.</p>
  <button class="mt-4 bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg">Action</button>
</div>`,
      solutionCode: `<div class="p-4 md:p-8 lg:p-12 bg-white rounded-xl border border-slate-200 max-w-lg mx-auto">
  <h2 class="text-xl font-bold text-slate-800">Responsive Padding</h2>
  <p class="text-sm text-slate-500 mt-2">The padding on this card should shrink on mobile and grow on larger screens.</p>
  <button class="mt-4 bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg">Action</button>
</div>`,
      hints: [
        "Mobile-first: start with the smallest padding — `p-4`.",
        "`md:p-8` increases padding at the medium breakpoint.",
        "`lg:p-12` increases it further at the large breakpoint.",
      ],
    },
    {
      id: 6,
      title: "Responsive Navbar: Hamburger vs Links",
      difficulty: "Medium",
      instructions:
        "Show the **hamburger icon** on mobile and hide it on `md`+. Conversely, **hide the link list** on mobile and show it from `md`+ using `hidden md:flex`.",
      initialCode: `<nav class="bg-slate-800 text-white px-6 py-4 flex items-center justify-between rounded-xl">
  <span class="font-bold text-lg">Brand</span>
  <button class="text-slate-300 md:hidden">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
  </button>
  <div class="flex gap-6 text-sm text-slate-300">
    <a href="#">Home</a>
    <a href="#">Docs</a>
    <a href="#">Pricing</a>
    <a href="#">Login</a>
  </div>
</nav>`,
      solutionCode: `<nav class="bg-slate-800 text-white px-6 py-4 flex items-center justify-between rounded-xl">
  <span class="font-bold text-lg">Brand</span>
  <button class="text-slate-300 md:hidden">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
  </button>
  <div class="hidden md:flex gap-6 text-sm text-slate-300">
    <a href="#">Home</a>
    <a href="#">Docs</a>
    <a href="#">Pricing</a>
    <a href="#">Login</a>
  </div>
</nav>`,
      hints: [
        "The button already has `md:hidden` — it shows on mobile, hides on desktop. ✅",
        "The link list needs the opposite: hidden by default, visible on `md`+.",
        "Change the link div's class from `flex` to `hidden md:flex`.",
      ],
    },
    {
      id: 7,
      title: "Responsive Hero Text Alignment",
      difficulty: "Medium",
      instructions:
        "On mobile the hero content should be **left-aligned** (`text-left`, `items-start`). From `md` onwards it should switch to **center-aligned** (`md:text-center`, `md:items-center`).",
      initialCode: `<section class="flex flex-col items-center text-center p-8 bg-slate-900 text-white rounded-xl">
  <h1 class="text-3xl font-bold max-w-lg">The Future of UI Development</h1>
  <p class="text-slate-400 mt-3 max-w-md">Build faster, ship smarter, and design with confidence using modern tools.</p>
  <div class="flex gap-3 mt-6">
    <button class="bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-medium">Get Started</button>
    <button class="border border-slate-600 text-slate-300 px-5 py-2 rounded-lg text-sm">Learn More</button>
  </div>
</section>`,
      solutionCode: `<section class="flex flex-col items-start text-left md:items-center md:text-center p-8 bg-slate-900 text-white rounded-xl">
  <h1 class="text-3xl font-bold max-w-lg">The Future of UI Development</h1>
  <p class="text-slate-400 mt-3 max-w-md">Build faster, ship smarter, and design with confidence using modern tools.</p>
  <div class="flex gap-3 mt-6">
    <button class="bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-medium">Get Started</button>
    <button class="border border-slate-600 text-slate-300 px-5 py-2 rounded-lg text-sm">Learn More</button>
  </div>
</section>`,
      hints: [
        "Change `items-center` to `items-start` (mobile default) and add `md:items-center`.",
        "Change `text-center` to `text-left` and add `md:text-center`.",
        "Both changes go on the `<section>` element.",
      ],
    },
    {
      id: 8,
      title: "Show on Mobile Only",
      difficulty: "Medium",
      instructions:
        "The 'Mobile Banner' alert should be **visible only on small screens** (below `md`). Hide it completely at the `md` breakpoint and above using `md:hidden`.",
      initialCode: `<div class="space-y-4 p-4">
  <div class="bg-amber-400 text-amber-900 text-sm font-medium px-4 py-3 rounded-lg flex items-center gap-2">
    <span>📱</span> You're on mobile — tap the menu icon to navigate.
  </div>
  <div class="bg-white border border-slate-200 rounded-xl p-6">
    <h2 class="font-semibold text-slate-800">Main Page Content</h2>
    <p class="text-sm text-slate-500 mt-2">This content is visible on all screen sizes.</p>
  </div>
</div>`,
      solutionCode: `<div class="space-y-4 p-4">
  <div class="md:hidden bg-amber-400 text-amber-900 text-sm font-medium px-4 py-3 rounded-lg flex items-center gap-2">
    <span>📱</span> You're on mobile — tap the menu icon to navigate.
  </div>
  <div class="bg-white border border-slate-200 rounded-xl p-6">
    <h2 class="font-semibold text-slate-800">Main Page Content</h2>
    <p class="text-sm text-slate-500 mt-2">This content is visible on all screen sizes.</p>
  </div>
</div>`,
      hints: [
        "`md:hidden` hides an element from the `md` breakpoint upwards.",
        "Since no `hidden` is set as default, it shows on mobile by default.",
        "Add `md:hidden` to the amber banner div.",
      ],
    },
    {
      id: 9,
      title: "Responsive Max-Width Centering",
      difficulty: "Medium",
      instructions:
        "The content section should be **full width on mobile** and constrained to `max-w-2xl`, centered with `mx-auto`, starting from the `md` breakpoint.",
      initialCode: `<div class="p-6 bg-slate-100 min-h-32">
  <div class="bg-white rounded-xl p-6 border border-slate-200">
    <h2 class="text-lg font-bold text-slate-800">Contained Content</h2>
    <p class="text-sm text-slate-500 mt-2">On desktop this block should be centered and capped at a comfortable reading width.</p>
  </div>
</div>`,
      solutionCode: `<div class="p-6 bg-slate-100 min-h-32">
  <div class="bg-white rounded-xl p-6 border border-slate-200 md:max-w-2xl md:mx-auto">
    <h2 class="text-lg font-bold text-slate-800">Contained Content</h2>
    <p class="text-sm text-slate-500 mt-2">On desktop this block should be centered and capped at a comfortable reading width.</p>
  </div>
</div>`,
      hints: [
        "On mobile the card should span full width — don't set any max-width by default.",
        "`md:max-w-2xl` constrains the width from `md` breakpoint.",
        "`md:mx-auto` centers the constrained box horizontally.",
      ],
    },
    {
      id: 10,
      title: "Responsive Order Swap",
      difficulty: "Hard",
      instructions:
        "On mobile the image should appear **below** the text. On `md`+ the image should move to the **right** using `md:order-last` — without changing HTML order.",
      initialCode: `<div class="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl border border-slate-200 items-center">
  <div class="flex-1">
    <h2 class="text-xl font-bold text-slate-800">Design-First Approach</h2>
    <p class="text-sm text-slate-500 mt-2">We start every project with user research and wireframes before writing a single line of code.</p>
    <button class="mt-4 bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg">Our Process</button>
  </div>
  <div class="w-full md:w-48 h-36 bg-linear-to-br from-violet-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-5xl shrink-0">🎨</div>
</div>`,
      solutionCode: `<div class="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl border border-slate-200 items-center">
  <div class="flex-1">
    <h2 class="text-xl font-bold text-slate-800">Design-First Approach</h2>
    <p class="text-sm text-slate-500 mt-2">We start every project with user research and wireframes before writing a single line of code.</p>
    <button class="mt-4 bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg">Our Process</button>
  </div>
  <div class="md:order-last w-full md:w-48 h-36 bg-linear-to-br from-violet-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-5xl shrink-0">🎨</div>
</div>`,
      hints: [
        "In a flex-col (mobile) layout, source order determines visual order.",
        "In the `md:flex-row` layout, `order` controls the visual sequence.",
        "`md:order-last` pushes the image to the end of the row on desktop only.",
      ],
    },
  ],
};
