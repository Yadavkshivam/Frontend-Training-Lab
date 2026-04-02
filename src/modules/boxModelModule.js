/**
 * CSS Box Model Module
 * 10 challenges covering margin, padding, border, outline, box-sizing,
 * overflow, and the visual difference between spacing utilities.
 * Shape: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */
export const boxModelModule = {
  id: "css-box-model",
  title: "CSS Box Model",
  description:
    "Understand how every element is a box. Practice margin, padding, border, overflow, and box-sizing to control spacing and layout with precision.",
  difficulty: "Beginner",
  icon: "📦",
  color: "sky",
  questions: [
    {
      id: 1,
      title: "Padding vs Margin",
      difficulty: "Easy",
      instructions:
        "The card has no internal breathing room — text touches the edges. Add `p-6` (padding) to the card so the content is spaced inside. Do NOT add margin here — padding is the space inside the box.",
      initialCode: `<div class="bg-slate-100 rounded-xl p-4">
  <div class="bg-white rounded-lg border border-slate-200">
    <h3 class="font-semibold text-slate-800">Card Title</h3>
    <p class="text-sm text-slate-500 mt-1">The content is cramped against the card edges.</p>
  </div>
</div>`,
      solutionCode: `<div class="bg-slate-100 rounded-xl p-4">
  <div class="bg-white rounded-lg border border-slate-200 p-6">
    <h3 class="font-semibold text-slate-800">Card Title</h3>
    <p class="text-sm text-slate-500 mt-1">The content is cramped against the card edges.</p>
  </div>
</div>`,
      hints: [
        "Padding adds space **inside** an element, between its border and content.",
        "Margin adds space **outside** an element, between it and neighbouring elements.",
        "Add `p-6` to the card `<div>`.",
      ],
    },
    {
      id: 2,
      title: "Add Space Between Cards",
      difficulty: "Easy",
      instructions:
        "The three cards are stacked with no space between them. Add `space-y-4` to the container (which applies top-margin to each child after the first) to create vertical gaps.",
      initialCode: `<div class="p-4 bg-slate-100 rounded-xl">
  <div class="bg-white border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700">Card A</div>
  <div class="bg-white border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700">Card B</div>
  <div class="bg-white border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700">Card C</div>
</div>`,
      solutionCode: `<div class="p-4 bg-slate-100 rounded-xl space-y-4">
  <div class="bg-white border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700">Card A</div>
  <div class="bg-white border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700">Card B</div>
  <div class="bg-white border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700">Card C</div>
</div>`,
      hints: [
        "`space-y-4` applies `margin-top: 1rem` to every child except the first.",
        "It is a shortcut that avoids adding individual margin classes to each card.",
        "Add `space-y-4` to the outer container div.",
      ],
    },
    {
      id: 3,
      title: "Fix Asymmetric Padding",
      difficulty: "Easy",
      instructions:
        "The button should have **more horizontal padding** than vertical (wide, comfortable button feel). Replace `p-4` with `px-8 py-3` to set different padding on each axis.",
      initialCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl">
  <button class="bg-blue-500 text-white font-semibold rounded-lg p-4">
    Get Started
  </button>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl">
  <button class="bg-blue-500 text-white font-semibold rounded-lg px-8 py-3">
    Get Started
  </button>
</div>`,
      hints: [
        "`px-{n}` sets left and right (horizontal) padding.",
        "`py-{n}` sets top and bottom (vertical) padding.",
        "Replace `p-4` with `px-8 py-3`.",
      ],
    },
    {
      id: 4,
      title: "Border Width and Style",
      difficulty: "Easy",
      instructions:
        "The input field has no visible border. Add a `border-2 border-slate-300` to it. Also add `focus:border-blue-500 focus:outline-none` so the border highlights on focus.",
      initialCode: `<div class="p-6 bg-white rounded-xl max-w-xs">
  <label class="text-xs font-medium text-slate-600 block mb-1">Email</label>
  <input type="email" placeholder="you@example.com" class="w-full px-3 py-2 rounded-lg text-sm text-slate-700" />
</div>`,
      solutionCode: `<div class="p-6 bg-white rounded-xl max-w-xs">
  <label class="text-xs font-medium text-slate-600 block mb-1">Email</label>
  <input type="email" placeholder="you@example.com" class="w-full px-3 py-2 rounded-lg text-sm text-slate-700 border-2 border-slate-300 focus:border-blue-500 focus:outline-none" />
</div>`,
      hints: [
        "`border-2` sets a 2px solid border on all sides.",
        "`border-slate-300` sets the border colour.",
        "Add `focus:border-blue-500 focus:outline-none` to highlight on focus.",
      ],
    },
    {
      id: 5,
      title: "Overflow Hidden — Clip Content",
      difficulty: "Medium",
      instructions:
        "The image inside the rounded card bleeds outside the rounded corners. Add `overflow-hidden` to the card container so the image is clipped to the card's border radius.",
      initialCode: `<div class="bg-white rounded-2xl border border-slate-200 max-w-xs">
  <div class="w-full h-40 bg-linear-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-5xl rounded-2xl">🌊</div>
  <div class="p-4">
    <h3 class="font-semibold text-slate-800 text-sm">Ocean Theme</h3>
    <p class="text-xs text-slate-400 mt-1">A cool blue gradient header card.</p>
  </div>
</div>`,
      solutionCode: `<div class="bg-white rounded-2xl border border-slate-200 max-w-xs overflow-hidden">
  <div class="w-full h-40 bg-linear-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-5xl">🌊</div>
  <div class="p-4">
    <h3 class="font-semibold text-slate-800 text-sm">Ocean Theme</h3>
    <p class="text-xs text-slate-400 mt-1">A cool blue gradient header card.</p>
  </div>
</div>`,
      hints: [
        "`overflow-hidden` clips any child content that extends beyond the parent's boundaries.",
        "Without it, child elements ignore the parent's `border-radius`.",
        "Add `overflow-hidden` to the outer card div and remove the `rounded-2xl` from the inner image div.",
      ],
    },
    {
      id: 6,
      title: "Box Shadow Depth",
      difficulty: "Medium",
      instructions:
        "The three cards should have different elevation levels: the first `shadow-sm`, the second `shadow-md`, and the third `shadow-xl`. Add the correct shadow class to each.",
      initialCode: `<div class="p-8 bg-slate-200 rounded-xl flex gap-6 items-center justify-center">
  <div class="bg-white rounded-xl p-5 w-28 text-center text-xs font-medium text-slate-600">
    <p class="text-lg mb-1">📄</p>Flat
  </div>
  <div class="bg-white rounded-xl p-5 w-28 text-center text-xs font-medium text-slate-600">
    <p class="text-lg mb-1">📋</p>Medium
  </div>
  <div class="bg-white rounded-xl p-5 w-28 text-center text-xs font-medium text-slate-600">
    <p class="text-lg mb-1">🗂️</p>Floating
  </div>
</div>`,
      solutionCode: `<div class="p-8 bg-slate-200 rounded-xl flex gap-6 items-center justify-center">
  <div class="bg-white rounded-xl p-5 w-28 text-center text-xs font-medium text-slate-600 shadow-sm">
    <p class="text-lg mb-1">📄</p>Flat
  </div>
  <div class="bg-white rounded-xl p-5 w-28 text-center text-xs font-medium text-slate-600 shadow-md">
    <p class="text-lg mb-1">📋</p>Medium
  </div>
  <div class="bg-white rounded-xl p-5 w-28 text-center text-xs font-medium text-slate-600 shadow-xl">
    <p class="text-lg mb-1">🗂️</p>Floating
  </div>
</div>`,
      hints: [
        "`shadow-sm` is a subtle 1px shadow — barely lifted.",
        "`shadow-md` gives a moderate elevation.",
        "`shadow-xl` creates a deep shadow — as if floating high above the surface.",
      ],
    },
    {
      id: 7,
      title: "Negative Margin Overlap",
      difficulty: "Medium",
      instructions:
        "The avatar images in this group should **overlap** each other. Apply `-ml-3` to each avatar after the first to pull them leftward so they stack on top of each other.",
      initialCode: `<div class="flex items-center p-6 bg-white rounded-xl border border-slate-200">
  <img src="https://api.dicebear.com/7.x/initials/svg?seed=A&backgroundColor=3b82f6" class="w-10 h-10 rounded-full border-2 border-white" />
  <img src="https://api.dicebear.com/7.x/initials/svg?seed=B&backgroundColor=8b5cf6" class="w-10 h-10 rounded-full border-2 border-white" />
  <img src="https://api.dicebear.com/7.x/initials/svg?seed=C&backgroundColor=ec4899" class="w-10 h-10 rounded-full border-2 border-white" />
  <img src="https://api.dicebear.com/7.x/initials/svg?seed=D&backgroundColor=f59e0b" class="w-10 h-10 rounded-full border-2 border-white" />
  <span class="ml-3 text-sm text-slate-500">+12 members</span>
</div>`,
      solutionCode: `<div class="flex items-center p-6 bg-white rounded-xl border border-slate-200">
  <img src="https://api.dicebear.com/7.x/initials/svg?seed=A&backgroundColor=3b82f6" class="w-10 h-10 rounded-full border-2 border-white" />
  <img src="https://api.dicebear.com/7.x/initials/svg?seed=B&backgroundColor=8b5cf6" class="w-10 h-10 rounded-full border-2 border-white -ml-3" />
  <img src="https://api.dicebear.com/7.x/initials/svg?seed=C&backgroundColor=ec4899" class="w-10 h-10 rounded-full border-2 border-white -ml-3" />
  <img src="https://api.dicebear.com/7.x/initials/svg?seed=D&backgroundColor=f59e0b" class="w-10 h-10 rounded-full border-2 border-white -ml-3" />
  <span class="ml-3 text-sm text-slate-500">+12 members</span>
</div>`,
      hints: [
        "Negative margins pull an element towards a neighbouring element.",
        "`-ml-3` reduces the left margin by 0.75rem, causing overlap.",
        "Add `-ml-3` to the 2nd, 3rd, and 4th `<img>` elements only.",
      ],
    },
    {
      id: 8,
      title: "Ring vs Border for Focus State",
      difficulty: "Medium",
      instructions:
        "The focused button should display a visible focus ring for accessibility. Add `focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none` to the button.",
      initialCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl">
  <button class="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600">
    Focus Me (Tab key)
  </button>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl">
  <button class="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
    Focus Me (Tab key)
  </button>
</div>`,
      hints: [
        "`ring` in Tailwind creates a box-shadow-based outline ring.",
        "`ring-offset-2` adds a small white gap between the element and the ring.",
        "`focus:outline-none` removes the default browser outline so the ring takes over.",
      ],
    },
    {
      id: 9,
      title: "Scroll Inside a Fixed Height Box",
      difficulty: "Hard",
      instructions:
        "The message list is too tall and overflows the container. Set a fixed height (`h-48`) on the list container and add `overflow-y-auto` so it scrolls internally instead of pushing other elements down.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 p-4 max-w-xs">
  <h3 class="font-semibold text-slate-800 text-sm mb-3">Messages</h3>
  <div class="space-y-2">
    <div class="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-600">Hey, are you free tomorrow?</div>
    <div class="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-600">The design review is at 2pm</div>
    <div class="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-600">Can you share the Figma link?</div>
    <div class="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-600">I pushed the changes to main</div>
    <div class="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-600">Let's sync on Monday morning</div>
    <div class="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-600">Looks great — ship it!</div>
  </div>
  <button class="mt-3 w-full text-xs text-blue-500 font-medium">View all</button>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 p-4 max-w-xs">
  <h3 class="font-semibold text-slate-800 text-sm mb-3">Messages</h3>
  <div class="h-48 overflow-y-auto space-y-2">
    <div class="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-600">Hey, are you free tomorrow?</div>
    <div class="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-600">The design review is at 2pm</div>
    <div class="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-600">Can you share the Figma link?</div>
    <div class="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-600">I pushed the changes to main</div>
    <div class="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-600">Let's sync on Monday morning</div>
    <div class="bg-slate-50 rounded-lg px-3 py-2 text-xs text-slate-600">Looks great — ship it!</div>
  </div>
  <button class="mt-3 w-full text-xs text-blue-500 font-medium">View all</button>
</div>`,
      hints: [
        "Add `h-48` to fix the height of the messages container.",
        "`overflow-y-auto` adds a vertical scrollbar only when content exceeds the height.",
        "Both classes go on the `<div>` that wraps the message items.",
      ],
    },
    {
      id: 10,
      title: "Horizontal Scroll for Tag Row",
      difficulty: "Hard",
      instructions:
        "The wide tag row wraps onto multiple lines inside the narrow container. Make it scroll horizontally in a single line by adding `overflow-x-auto whitespace-nowrap flex gap-2` to the tag container, replacing `flex flex-wrap gap-2`.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 p-4 max-w-xs">
  <h3 class="font-semibold text-slate-800 text-sm mb-3">Topics</h3>
  <div class="flex flex-wrap gap-2">
    <span class="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">HTML5</span>
    <span class="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">CSS Grid</span>
    <span class="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">Flexbox</span>
    <span class="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">Tailwind</span>
    <span class="bg-rose-100 text-rose-700 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">Animations</span>
    <span class="bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">Typography</span>
  </div>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 p-4 max-w-xs">
  <h3 class="font-semibold text-slate-800 text-sm mb-3">Topics</h3>
  <div class="overflow-x-auto whitespace-nowrap flex gap-2 pb-1">
    <span class="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">HTML5</span>
    <span class="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">CSS Grid</span>
    <span class="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">Flexbox</span>
    <span class="inline-block bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">Tailwind</span>
    <span class="inline-block bg-rose-100 text-rose-700 text-xs font-medium px-3 py-1 rounded-full">Animations</span>
    <span class="inline-block bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">Typography</span>
  </div>
</div>`,
      hints: [
        "`overflow-x-auto` enables horizontal scrolling when content is wider than the container.",
        "`whitespace-nowrap` prevents the flex container itself from wrapping.",
        "Replace `flex-wrap` with nothing (remove it) and add `overflow-x-auto whitespace-nowrap`.",
      ],
    },
  ],
};
