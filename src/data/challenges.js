const challenges = [
  // ─────────────────────────── EASY ───────────────────────────

  {
    id: 1,
    title: "Center a Div with Flexbox",
    difficulty: "Easy",
    instructions:
      "The blue box should be perfectly centered inside the gray container. Add the correct Tailwind flex utilities to the outer div.",
    initialCode: `<div class="w-full h-72 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg">
  <div class="w-24 h-24 bg-blue-500 rounded-lg"></div>
</div>`,
    solutionCode: `<div class="w-full h-72 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center">
  <div class="w-24 h-24 bg-blue-500 rounded-lg"></div>
</div>`,
    hints: [
      "The outer container needs to become a flex container.",
      "Check the justify-content and align-items axis.",
      "Try adding: flex items-center justify-center",
    ],
  },
  {
    id: 2,
    title: "Fix Text Alignment & Color",
    difficulty: "Easy",
    instructions:
      "The heading text should be centered, colored blue-600, and sized to 3xl. Fix the Tailwind classes on the h1 element.",
    initialCode: `<div class="p-10 bg-slate-50 rounded-lg">
  <h1 class="text-sm text-left text-black font-bold">
    Welcome to Frontend Lab
  </h1>
  <p class="text-slate-500 mt-2">Start building beautiful UIs today.</p>
</div>`,
    solutionCode: `<div class="p-10 bg-slate-50 rounded-lg">
  <h1 class="text-3xl text-center text-blue-600 font-bold">
    Welcome to Frontend Lab
  </h1>
  <p class="text-slate-500 mt-2">Start building beautiful UIs today.</p>
</div>`,
    hints: [
      "Look at the h1 classes — the size and alignment are wrong.",
      "Replace text-sm with a larger size class.",
      "Use text-center for alignment and text-blue-600 for color.",
    ],
  },
  {
    id: 3,
    title: "Add Proper Spacing",
    difficulty: "Easy",
    instructions:
      "The three info cards are stacked with no spacing. Add vertical gap between them using Tailwind's space or gap utilities on the container.",
    initialCode: `<div class="p-6 bg-white rounded-lg">
  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
    <h3 class="font-semibold text-blue-800">Step 1</h3>
    <p class="text-sm text-blue-600">Learn HTML basics</p>
  </div>
  <div class="bg-green-50 border border-green-200 rounded-lg p-4">
    <h3 class="font-semibold text-green-800">Step 2</h3>
    <p class="text-sm text-green-600">Master CSS layouts</p>
  </div>
  <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
    <h3 class="font-semibold text-purple-800">Step 3</h3>
    <p class="text-sm text-purple-600">Build with Tailwind</p>
  </div>
</div>`,
    solutionCode: `<div class="p-6 bg-white rounded-lg space-y-4">
  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
    <h3 class="font-semibold text-blue-800">Step 1</h3>
    <p class="text-sm text-blue-600">Learn HTML basics</p>
  </div>
  <div class="bg-green-50 border border-green-200 rounded-lg p-4">
    <h3 class="font-semibold text-green-800">Step 2</h3>
    <p class="text-sm text-green-600">Master CSS layouts</p>
  </div>
  <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
    <h3 class="font-semibold text-purple-800">Step 3</h3>
    <p class="text-sm text-purple-600">Build with Tailwind</p>
  </div>
</div>`,
    hints: [
      "The cards need vertical spacing between them.",
      "Tailwind has a space-y utility for vertical gaps.",
      "Add space-y-4 to the parent container.",
    ],
  },
  {
    id: 4,
    title: "Fix the Button Styling",
    difficulty: "Easy",
    instructions:
      "The button looks broken — it has no padding, background, or rounded corners. Style it to be a proper blue call-to-action button with white text.",
    initialCode: `<div class="flex items-center justify-center h-64 bg-slate-50 rounded-lg">
  <button class="text-black text-sm">
    Get Started
  </button>
</div>`,
    solutionCode: `<div class="flex items-center justify-center h-64 bg-slate-50 rounded-lg">
  <button class="bg-blue-500 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-blue-600">
    Get Started
  </button>
</div>`,
    hints: [
      "The button needs a background color and text color.",
      "Add horizontal and vertical padding (px, py).",
      "Use bg-blue-500, text-white, px-6, py-3, and rounded-lg.",
    ],
  },
  {
    id: 5,
    title: "Fix Image and Text Layout",
    difficulty: "Easy",
    instructions:
      "The profile image and the name/role text should sit side by side (horizontally), not stacked. Fix the layout on the container.",
    initialCode: `<div class="p-6 bg-white rounded-lg border border-slate-200">
  <img src="https://api.dicebear.com/7.x/initials/svg?seed=JD&backgroundColor=3b82f6" alt="avatar" class="w-14 h-14 rounded-full" />
  <div>
    <h3 class="font-semibold text-slate-800">Jane Doe</h3>
    <p class="text-sm text-slate-500">Frontend Developer</p>
  </div>
</div>`,
    solutionCode: `<div class="p-6 bg-white rounded-lg border border-slate-200 flex items-center gap-4">
  <img src="https://api.dicebear.com/7.x/initials/svg?seed=JD&backgroundColor=3b82f6" alt="avatar" class="w-14 h-14 rounded-full" />
  <div>
    <h3 class="font-semibold text-slate-800">Jane Doe</h3>
    <p class="text-sm text-slate-500">Frontend Developer</p>
  </div>
</div>`,
    hints: [
      "The items are stacking vertically by default (block layout).",
      "You need a horizontal layout — think flexbox.",
      "Add flex, items-center, and gap-4 to the outer container.",
    ],
  },

  // ─────────────────────────── MEDIUM ───────────────────────────

  {
    id: 6,
    title: "Navbar with Space Between",
    difficulty: "Medium",
    instructions:
      "The navigation bar should have the logo on the far left and the links on the far right. Fix the nav container's flex alignment to spread them apart.",
    initialCode: `<nav class="bg-slate-800 text-white p-4 rounded-lg">
  <div class="font-bold text-lg">MyBrand</div>
  <div class="flex gap-6 text-sm text-slate-300">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`,
    solutionCode: `<nav class="bg-slate-800 text-white p-4 rounded-lg flex items-center justify-between">
  <div class="font-bold text-lg">MyBrand</div>
  <div class="flex gap-6 text-sm text-slate-300">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`,
    hints: [
      "The nav needs to be a flex container.",
      "To push items to opposite sides, use justify-between.",
      "Add flex, items-center, and justify-between to the nav.",
    ],
  },
  {
    id: 7,
    title: "Three-Column Card Grid",
    difficulty: "Medium",
    instructions:
      "The feature cards should be arranged in a 3-column grid layout with equal spacing. Use CSS Grid utilities on the container.",
    initialCode: `<div class="p-6 bg-slate-50 rounded-lg">
  <div class="bg-white border border-slate-200 rounded-lg p-5">
    <h3 class="font-semibold text-slate-800">⚡ Fast</h3>
    <p class="text-sm text-slate-500 mt-1">Lightning-fast performance.</p>
  </div>
  <div class="bg-white border border-slate-200 rounded-lg p-5">
    <h3 class="font-semibold text-slate-800">🔒 Secure</h3>
    <p class="text-sm text-slate-500 mt-1">Enterprise-grade security.</p>
  </div>
  <div class="bg-white border border-slate-200 rounded-lg p-5">
    <h3 class="font-semibold text-slate-800">🎨 Beautiful</h3>
    <p class="text-sm text-slate-500 mt-1">Modern, clean design.</p>
  </div>
</div>`,
    solutionCode: `<div class="p-6 bg-slate-50 rounded-lg grid grid-cols-3 gap-4">
  <div class="bg-white border border-slate-200 rounded-lg p-5">
    <h3 class="font-semibold text-slate-800">⚡ Fast</h3>
    <p class="text-sm text-slate-500 mt-1">Lightning-fast performance.</p>
  </div>
  <div class="bg-white border border-slate-200 rounded-lg p-5">
    <h3 class="font-semibold text-slate-800">🔒 Secure</h3>
    <p class="text-sm text-slate-500 mt-1">Enterprise-grade security.</p>
  </div>
  <div class="bg-white border border-slate-200 rounded-lg p-5">
    <h3 class="font-semibold text-slate-800">🎨 Beautiful</h3>
    <p class="text-sm text-slate-500 mt-1">Modern, clean design.</p>
  </div>
</div>`,
    hints: [
      "The cards are stacking vertically — you need a grid layout.",
      "Tailwind's grid and grid-cols-3 can create three columns.",
      "Add grid, grid-cols-3, and gap-4 to the outer container.",
    ],
  },
  {
    id: 8,
    title: "Fix the Pricing Card",
    difficulty: "Medium",
    instructions:
      "The pricing card is missing its visual styling. Add a shadow, rounded corners (xl), center the content text, and make the price text large and bold. Also give the button full width.",
    initialCode: `<div class="max-w-xs mx-auto bg-white border border-slate-200 p-6">
  <h3 class="text-slate-800 font-semibold">Pro Plan</h3>
  <p class="text-slate-400 text-sm mt-1">Everything you need</p>
  <div class="mt-4">
    <span class="text-slate-800">$29</span>
    <span class="text-slate-400 text-sm">/month</span>
  </div>
  <ul class="mt-4 space-y-2 text-sm text-slate-600">
    <li>✓ Unlimited projects</li>
    <li>✓ Priority support</li>
    <li>✓ Custom domain</li>
  </ul>
  <button class="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium">
    Subscribe
  </button>
</div>`,
    solutionCode: `<div class="max-w-xs mx-auto bg-white border border-slate-200 p-6 rounded-xl shadow-lg text-center">
  <h3 class="text-slate-800 font-semibold">Pro Plan</h3>
  <p class="text-slate-400 text-sm mt-1">Everything you need</p>
  <div class="mt-4">
    <span class="text-4xl font-bold text-slate-800">$29</span>
    <span class="text-slate-400 text-sm">/month</span>
  </div>
  <ul class="mt-4 space-y-2 text-sm text-slate-600">
    <li>✓ Unlimited projects</li>
    <li>✓ Priority support</li>
    <li>✓ Custom domain</li>
  </ul>
  <button class="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium w-full hover:bg-blue-600">
    Subscribe
  </button>
</div>`,
    hints: [
      "The card container needs rounded-xl, shadow-lg, and text-center.",
      "The price span should be larger — try text-4xl and font-bold.",
      "Make the button full-width with w-full.",
    ],
  },
  {
    id: 9,
    title: "Sidebar + Content Layout",
    difficulty: "Medium",
    instructions:
      "Build a basic app layout: a narrow sidebar (width 48/w-48) on the left and the main content area filling the remaining space. Use flexbox on the wrapper.",
    initialCode: `<div class="h-72 bg-slate-100 rounded-lg overflow-hidden">
  <aside class="bg-slate-800 text-white p-4">
    <h3 class="font-bold text-sm mb-4">Navigation</h3>
    <ul class="space-y-2 text-sm text-slate-300">
      <li>Dashboard</li>
      <li>Projects</li>
      <li>Settings</li>
    </ul>
  </aside>
  <main class="p-6">
    <h2 class="text-lg font-semibold text-slate-800">Dashboard</h2>
    <p class="text-sm text-slate-500 mt-2">Welcome back! Here's your overview.</p>
  </main>
</div>`,
    solutionCode: `<div class="h-72 bg-slate-100 rounded-lg overflow-hidden flex">
  <aside class="bg-slate-800 text-white p-4 w-48 shrink-0">
    <h3 class="font-bold text-sm mb-4">Navigation</h3>
    <ul class="space-y-2 text-sm text-slate-300">
      <li>Dashboard</li>
      <li>Projects</li>
      <li>Settings</li>
    </ul>
  </aside>
  <main class="p-6 flex-1">
    <h2 class="text-lg font-semibold text-slate-800">Dashboard</h2>
    <p class="text-sm text-slate-500 mt-2">Welcome back! Here's your overview.</p>
  </main>
</div>`,
    hints: [
      "The outer wrapper needs to be a flex container.",
      "The sidebar needs a fixed width (w-48) and shrink-0 to prevent shrinking.",
      "The main content should take remaining space with flex-1.",
    ],
  },
  {
    id: 10,
    title: "Responsive Hero Section",
    difficulty: "Medium",
    instructions:
      "The hero section has a heading, description, and two buttons. Center all content vertically and horizontally inside the container. The buttons should sit side-by-side with a gap.",
    initialCode: `<section class="h-80 rounded-lg text-white p-8" style="background: linear-gradient(to bottom right, #2563eb, #4338ca)">
  <h1 class="text-3xl font-bold">Build Better Frontends</h1>
  <p class="text-blue-100 mt-2 max-w-md">Practice real-world UI challenges and level up your CSS, Flexbox, and Tailwind skills.</p>
  <div class="mt-6">
    <button class="bg-white text-blue-600 font-semibold px-6 py-2.5 rounded-lg text-sm">
      Get Started
    </button>
    <button class="border border-white text-white font-semibold px-6 py-2.5 rounded-lg text-sm">
      Learn More
    </button>
  </div>
</section>`,
    solutionCode: `<section class="h-80 rounded-lg text-white p-8 flex flex-col items-center justify-center text-center" style="background: linear-gradient(to bottom right, #2563eb, #4338ca)">
  <h1 class="text-3xl font-bold">Build Better Frontends</h1>
  <p class="text-blue-100 mt-2 max-w-md">Practice real-world UI challenges and level up your CSS, Flexbox, and Tailwind skills.</p>
  <div class="mt-6 flex gap-3">
    <button class="bg-white text-blue-600 font-semibold px-6 py-2.5 rounded-lg text-sm">
      Get Started
    </button>
    <button class="border border-white text-white font-semibold px-6 py-2.5 rounded-lg text-sm">
      Learn More
    </button>
  </div>
</section>`,
    hints: [
      "The section needs flex, flex-col, items-center, and justify-center to center content.",
      "Add text-center to the section for text alignment.",
      "The button container needs flex and gap-3 to place buttons side by side.",
    ],
  },
];

export default challenges; 
