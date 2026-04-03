/**
 * CSS Logical Properties & Modern Layout Module
 * 10 challenges covering logical properties (margin-inline, padding-block),
 * aspect-ratio, object-fit, container queries (via clamp), min/max content,
 * and writing-mode — essential for internationalised, resilient UIs.
 * Shape: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */

export const logicalPropertiesModule = {
  id: "css-logical-properties",
  title: "Logical Properties & Modern Layout",
  description:
    "Write direction-agnostic CSS using logical properties, aspect-ratio, object-fit, clamp(), and min/max-content for truly resilient and internationalisation-ready UIs.",
  difficulty: "Advanced",
  icon: "🧭",
  color: "fuchsia",
  questions: [
    {
      id: 1,
      title: "aspect-ratio — Square Avatar",
      difficulty: "Easy",
      instructions:
        "The avatar div has only a `width` set but no height. Add `aspect-square` (Tailwind for `aspect-ratio: 1 / 1`) to keep it perfectly square regardless of its width.",
      initialCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl gap-4">
  <div class="w-16 bg-indigo-400 rounded-full overflow-hidden">
    <img src="https://i.pravatar.cc/64?img=5" alt="User avatar" class="w-full object-cover" />
  </div>
  <div>
    <p class="text-sm font-bold text-slate-800">Jane Smith</p>
    <p class="text-xs text-slate-400">Product Designer</p>
  </div>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl gap-4">
  <div class="w-16 aspect-square bg-indigo-400 rounded-full overflow-hidden">
    <img src="https://i.pravatar.cc/64?img=5" alt="User avatar" class="w-full h-full object-cover" />
  </div>
  <div>
    <p class="text-sm font-bold text-slate-800">Jane Smith</p>
    <p class="text-xs text-slate-400">Product Designer</p>
  </div>
</div>`,
      hints: [
        "`aspect-square` is Tailwind shorthand for `aspect-ratio: 1 / 1`.",
        "Also add `h-full` to the `<img>` so it fills the square container.",
        "This ensures the avatar stays perfectly circular at any width.",
      ],
    },
    {
      id: 2,
      title: "16 / 9 Video Embed",
      difficulty: "Easy",
      instructions:
        "The video placeholder should always maintain a 16:9 ratio as it resizes. Add `aspect-video` (Tailwind for `aspect-ratio: 16 / 9`) to the wrapper div.",
      initialCode: `<div class="bg-slate-100 rounded-xl p-4 max-w-md">
  <div class="bg-slate-800 rounded-xl flex items-center justify-center">
    <span class="text-white text-2xl">▶</span>
  </div>
  <p class="text-sm font-medium text-slate-700 mt-3">Introduction to CSS Grid</p>
</div>`,
      solutionCode: `<div class="bg-slate-100 rounded-xl p-4 max-w-md">
  <div class="aspect-video bg-slate-800 rounded-xl flex items-center justify-center">
    <span class="text-white text-2xl">▶</span>
  </div>
  <p class="text-sm font-medium text-slate-700 mt-3">Introduction to CSS Grid</p>
</div>`,
      hints: [
        "`aspect-video` is `aspect-ratio: 16 / 9` — perfect for video embeds.",
        "No explicit height needed — the browser calculates it from the width.",
        "Add `aspect-video` to the dark wrapper div.",
      ],
    },
    {
      id: 3,
      title: "object-fit — Prevent Distorted Images",
      difficulty: "Easy",
      instructions:
        "The product image is stretching to fill its container and looks distorted. Add `object-cover` to the `<img>` so it fills the box while maintaining its natural aspect ratio by cropping instead of stretching.",
      initialCode: `<div class="flex items-center justify-center h-56 bg-slate-100 rounded-xl">
  <div class="bg-white rounded-xl border border-slate-200 overflow-hidden w-40 shadow-sm">
    <img
      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=200&fit=crop"
      alt="Watch"
      class="w-full h-28"
    />
    <div class="p-3">
      <p class="text-xs font-bold text-slate-800">Classic Watch</p>
      <p class="text-xs text-slate-400">$129</p>
    </div>
  </div>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-56 bg-slate-100 rounded-xl">
  <div class="bg-white rounded-xl border border-slate-200 overflow-hidden w-40 shadow-sm">
    <img
      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=200&fit=crop"
      alt="Watch"
      class="w-full h-28 object-cover"
    />
    <div class="p-3">
      <p class="text-xs font-bold text-slate-800">Classic Watch</p>
      <p class="text-xs text-slate-400">$129</p>
    </div>
  </div>
</div>`,
      hints: [
        "`object-cover` fills the element's box by scaling the image and cropping any overflow.",
        "`object-contain` would show the whole image with empty space instead.",
        "Add `object-cover` to the `<img>` element.",
      ],
    },
    {
      id: 4,
      title: "clamp() — Fluid Heading Size",
      difficulty: "Medium",
      instructions:
        "The heading font size is fixed at `text-2xl`. Replace it with an inline style using `font-size: clamp(1.25rem, 4vw, 2.5rem)` so the text scales fluidly with viewport width, never smaller than 1.25rem or larger than 2.5rem.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-lg text-center">
  <h1 class="text-2xl font-extrabold text-slate-800 leading-tight mb-2">
    Fluid Typography with clamp()
  </h1>
  <p class="text-sm text-slate-500">Resize the window to see the heading scale.</p>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-lg text-center">
  <h1 class="font-extrabold text-slate-800 leading-tight mb-2" style="font-size: clamp(1.25rem, 4vw, 2.5rem);">
    Fluid Typography with clamp()
  </h1>
  <p class="text-sm text-slate-500">Resize the window to see the heading scale.</p>
</div>`,
      hints: [
        "`clamp(min, preferred, max)` returns the preferred value, clamped between min and max.",
        "Remove `text-2xl` and add a `style` attribute with `font-size: clamp(1.25rem, 4vw, 2.5rem)`.",
        "The `4vw` means the font is 4% of the viewport width — it scales smoothly.",
      ],
    },
    {
      id: 5,
      title: "min-content Column Width",
      difficulty: "Medium",
      instructions:
        "The sidebar column should shrink to fit its content width rather than taking up half the space. Add `style=\"grid-template-columns: min-content 1fr\"` to the grid wrapper so the left column sizes to its smallest possible content width.",
      initialCode: `<div class="grid grid-cols-2 gap-4 bg-slate-100 rounded-xl p-4 max-w-md">
  <div class="bg-white rounded-xl border border-slate-200 p-3">
    <p class="text-xs font-bold text-slate-700 whitespace-nowrap">🏷 Tags</p>
    <div class="flex flex-col gap-1 mt-2">
      <span class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">CSS</span>
      <span class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Layout</span>
    </div>
  </div>
  <div class="bg-white rounded-xl border border-slate-200 p-3">
    <p class="text-xs font-bold text-slate-700">Main content area that fills the remaining space available in the grid.</p>
  </div>
</div>`,
      solutionCode: `<div class="grid gap-4 bg-slate-100 rounded-xl p-4 max-w-md" style="grid-template-columns: min-content 1fr;">
  <div class="bg-white rounded-xl border border-slate-200 p-3">
    <p class="text-xs font-bold text-slate-700 whitespace-nowrap">🏷 Tags</p>
    <div class="flex flex-col gap-1 mt-2">
      <span class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">CSS</span>
      <span class="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Layout</span>
    </div>
  </div>
  <div class="bg-white rounded-xl border border-slate-200 p-3">
    <p class="text-xs font-bold text-slate-700">Main content area that fills the remaining space available in the grid.</p>
  </div>
</div>`,
      hints: [
        "Remove `grid-cols-2` — it forces equal columns.",
        "Add `style=\"grid-template-columns: min-content 1fr;\"` to the grid wrapper.",
        "`min-content` shrinks the column to the narrowest non-overflowing width of its content.",
      ],
    },
    {
      id: 6,
      title: "margin-inline for Horizontal Centering",
      difficulty: "Medium",
      instructions:
        "The card uses `mx-auto` for centering. Replace it with an inline style `margin-inline: auto` — the logical equivalent that works in any writing mode — while keeping `max-w-xs`.",
      initialCode: `<div class="bg-slate-100 rounded-xl p-4">
  <div class="bg-white rounded-xl border border-slate-200 p-4 max-w-xs mx-auto text-center">
    <p class="text-sm font-bold text-slate-800">Logically Centred</p>
    <p class="text-xs text-slate-400 mt-1">Using margin-inline: auto</p>
  </div>
</div>`,
      solutionCode: `<div class="bg-slate-100 rounded-xl p-4">
  <div class="bg-white rounded-xl border border-slate-200 p-4 max-w-xs text-center" style="margin-inline: auto;">
    <p class="text-sm font-bold text-slate-800">Logically Centred</p>
    <p class="text-xs text-slate-400 mt-1">Using margin-inline: auto</p>
  </div>
</div>`,
      hints: [
        "`margin-inline` sets the start and end margins in the current writing direction.",
        "In left-to-right text, `margin-inline: auto` behaves exactly like `margin-left: auto; margin-right: auto`.",
        "Remove `mx-auto` and add `style=\"margin-inline: auto;\"`.",
      ],
    },
    {
      id: 7,
      title: "padding-block for Vertical Rhythm",
      difficulty: "Medium",
      instructions:
        "The section header uses `py-6` for top/bottom padding. Replace it with an inline style `padding-block: 1.5rem` — the logical property equivalent — and remove `py-6` from the class list.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-sm">
  <div class="px-6 py-6 bg-linear-to-r from-fuchsia-500 to-purple-600 text-white">
    <h2 class="text-lg font-bold">Section Header</h2>
    <p class="text-sm opacity-75 mt-1">Logical block padding</p>
  </div>
  <div class="p-4 text-sm text-slate-600">Content area below the header.</div>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-sm">
  <div class="px-6 bg-linear-to-r from-fuchsia-500 to-purple-600 text-white" style="padding-block: 1.5rem;">
    <h2 class="text-lg font-bold">Section Header</h2>
    <p class="text-sm opacity-75 mt-1">Logical block padding</p>
  </div>
  <div class="p-4 text-sm text-slate-600">Content area below the header.</div>
</div>`,
      hints: [
        "`padding-block` sets padding on the block-start and block-end sides (top and bottom in horizontal writing).",
        "Remove `py-6` from the class list.",
        "Add `style=\"padding-block: 1.5rem;\"` — `1.5rem` equals Tailwind's `6` spacing unit.",
      ],
    },
    {
      id: 8,
      title: "max-content Grid Column",
      difficulty: "Hard",
      instructions:
        "The action column in the grid should only be as wide as its content needs to be. Replace the fixed `w-24` class on the action cell with a grid-level `style=\"grid-template-columns: 1fr max-content\"` on the row wrapper, and remove any explicit width from the button cell.",
      initialCode: `<div class="space-y-2 max-w-md">
  <div class="grid grid-cols-2 gap-3 bg-white rounded-xl border border-slate-200 p-3 items-center">
    <p class="text-sm font-medium text-slate-700">Deploy to Production</p>
    <div class="w-24 flex justify-end">
      <button class="bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap">Run Now</button>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-3 bg-white rounded-xl border border-slate-200 p-3 items-center">
    <p class="text-sm font-medium text-slate-700">Sync Database</p>
    <div class="w-24 flex justify-end">
      <button class="bg-sky-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap">Sync</button>
    </div>
  </div>
</div>`,
      solutionCode: `<div class="space-y-2 max-w-md">
  <div class="grid gap-3 bg-white rounded-xl border border-slate-200 p-3 items-center" style="grid-template-columns: 1fr max-content;">
    <p class="text-sm font-medium text-slate-700">Deploy to Production</p>
    <div class="flex justify-end">
      <button class="bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap">Run Now</button>
    </div>
  </div>
  <div class="grid gap-3 bg-white rounded-xl border border-slate-200 p-3 items-center" style="grid-template-columns: 1fr max-content;">
    <p class="text-sm font-medium text-slate-700">Sync Database</p>
    <div class="flex justify-end">
      <button class="bg-sky-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap">Sync</button>
    </div>
  </div>
</div>`,
      hints: [
        "Remove `grid-cols-2` and replace with `style=\"grid-template-columns: 1fr max-content;\"`.",
        "`max-content` sizes the column to the widest content it contains.",
        "Remove `w-24` from the action cell wrapper — the grid controls the width now.",
      ],
    },
    {
      id: 9,
      title: "Fluid Spacing with clamp() on Gap",
      difficulty: "Hard",
      instructions:
        "The card grid gap is fixed at `gap-4`. Replace the `gap-4` class with an inline `style=\"gap: clamp(0.75rem, 2vw, 1.5rem)\"` so the spacing scales fluidly between tight on small screens and comfortable on large ones.",
      initialCode: `<div class="grid grid-cols-3 gap-4 bg-slate-100 rounded-xl p-4">
  <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-lg">🎨</p><p class="text-xs font-medium text-slate-700 mt-1">Design</p></div>
  <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-lg">⚙️</p><p class="text-xs font-medium text-slate-700 mt-1">Build</p></div>
  <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-lg">🚀</p><p class="text-xs font-medium text-slate-700 mt-1">Deploy</p></div>
  <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-lg">📊</p><p class="text-xs font-medium text-slate-700 mt-1">Analyse</p></div>
  <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-lg">🔒</p><p class="text-xs font-medium text-slate-700 mt-1">Secure</p></div>
  <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-lg">💬</p><p class="text-xs font-medium text-slate-700 mt-1">Support</p></div>
</div>`,
      solutionCode: `<div class="grid grid-cols-3 bg-slate-100 rounded-xl p-4" style="gap: clamp(0.75rem, 2vw, 1.5rem);">
  <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-lg">🎨</p><p class="text-xs font-medium text-slate-700 mt-1">Design</p></div>
  <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-lg">⚙️</p><p class="text-xs font-medium text-slate-700 mt-1">Build</p></div>
  <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-lg">🚀</p><p class="text-xs font-medium text-slate-700 mt-1">Deploy</p></div>
  <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-lg">📊</p><p class="text-xs font-medium text-slate-700 mt-1">Analyse</p></div>
  <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-lg">🔒</p><p class="text-xs font-medium text-slate-700 mt-1">Secure</p></div>
  <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-lg">💬</p><p class="text-xs font-medium text-slate-700 mt-1">Support</p></div>
</div>`,
      hints: [
        "Remove `gap-4` from the class list.",
        "Add `style=\"gap: clamp(0.75rem, 2vw, 1.5rem);\"` — `clamp` works on any length value.",
        "The gap will be at least `0.75rem`, fluid at `2vw`, and at most `1.5rem`.",
      ],
    },
    {
      id: 10,
      title: "writing-mode — Vertical Label",
      difficulty: "Hard",
      instructions:
        "The section label on the left should be rotated vertically to run top-to-bottom. Add `style=\"writing-mode: vertical-rl; text-orientation: mixed;\"` to the label element and add `rotate-180` so the text reads bottom-to-top for readability.",
      initialCode: `<div class="flex gap-0 bg-white rounded-xl border border-slate-200 overflow-hidden max-w-sm h-36">
  <div class="bg-fuchsia-500 flex items-center justify-center px-3">
    <span class="text-white text-xs font-bold tracking-widest uppercase">Featured</span>
  </div>
  <div class="flex-1 p-4 flex flex-col justify-center">
    <p class="text-sm font-bold text-slate-800">Advanced CSS Patterns</p>
    <p class="text-xs text-slate-400 mt-1">Writing mode, logical properties and more.</p>
  </div>
</div>`,
      solutionCode: `<div class="flex gap-0 bg-white rounded-xl border border-slate-200 overflow-hidden max-w-sm h-36">
  <div class="bg-fuchsia-500 flex items-center justify-center px-3">
    <span class="text-white text-xs font-bold tracking-widest uppercase rotate-180" style="writing-mode: vertical-rl; text-orientation: mixed;">Featured</span>
  </div>
  <div class="flex-1 p-4 flex flex-col justify-center">
    <p class="text-sm font-bold text-slate-800">Advanced CSS Patterns</p>
    <p class="text-xs text-slate-400 mt-1">Writing mode, logical properties and more.</p>
  </div>
</div>`,
      hints: [
        "`writing-mode: vertical-rl` makes text flow top-to-bottom, right-to-left column stacking.",
        "`rotate-180` flips the label so text reads bottom-to-top (more natural for left-side labels).",
        "Add both `style` and `rotate-180` to the `<span>` element.",
      ],
    },
  ],
};
