/**
 * CSS Filters & Backdrop Effects Module
 * 10 challenges covering filter, backdrop-filter, blur, brightness, contrast,
 * grayscale, drop-shadow, and combining effects for polished visuals.
 * Shape: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */

export const filtersModule = {
  id: "css-filters",
  title: "CSS Filters & Backdrop Effects",
  description:
    "Apply blur, brightness, grayscale, drop-shadow, and backdrop-filter to create polished glassmorphism cards, image effects, and frosted UI elements.",
  difficulty: "Advanced",
  icon: "🌫️",
  color: "cyan",
  questions: [
    {
      id: 1,
      title: "Grayscale Image on Hover",
      difficulty: "Easy",
      instructions:
        "The avatar image is always colourful. Add `grayscale hover:grayscale-0 transition-all duration-300` so it starts grey and becomes colourful only on hover.",
      initialCode: `<div class="flex items-center justify-center h-48 bg-slate-100 rounded-xl">
  <img
    src="https://i.pravatar.cc/96?img=12"
    alt="Avatar"
    class="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-lg"
  />
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-48 bg-slate-100 rounded-xl">
  <img
    src="https://i.pravatar.cc/96?img=12"
    alt="Avatar"
    class="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-lg grayscale hover:grayscale-0 transition-all duration-300"
  />
</div>`,
      hints: [
        "`grayscale` applies a 100% greyscale filter via `filter: grayscale(1)`.",
        "`hover:grayscale-0` removes the filter on hover, restoring full colour.",
        "`transition-all duration-300` animates the change smoothly.",
      ],
    },
    {
      id: 2,
      title: "Blur Background Panel",
      difficulty: "Easy",
      instructions:
        "The label sits on top of a gradient background but has no blur. Add `backdrop-blur-sm` to the label overlay so the background behind it is softly blurred, creating a frosted glass look.",
      initialCode: `<div class="relative flex items-end justify-start h-48 rounded-xl overflow-hidden bg-linear-to-br from-cyan-400 to-blue-600">
  <div class="absolute bottom-0 left-0 right-0 bg-black/40 px-4 py-3">
    <p class="text-white text-sm font-bold">Ocean View</p>
    <p class="text-white/70 text-xs">Maldives, 2026</p>
  </div>
</div>`,
      solutionCode: `<div class="relative flex items-end justify-start h-48 rounded-xl overflow-hidden bg-linear-to-br from-cyan-400 to-blue-600">
  <div class="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm px-4 py-3">
    <p class="text-white text-sm font-bold">Ocean View</p>
    <p class="text-white/70 text-xs">Maldives, 2026</p>
  </div>
</div>`,
      hints: [
        "`backdrop-blur-sm` applies `backdrop-filter: blur(4px)` to the element.",
        "It blurs everything *behind* the element, not the element itself.",
        "Add `backdrop-blur-sm` to the overlay `<div>`.",
      ],
    },
    {
      id: 3,
      title: "Glassmorphism Card",
      difficulty: "Easy",
      instructions:
        "Build a glassmorphism card. Add `backdrop-blur-md bg-white/20 border border-white/30` to the card div so it looks like frosted glass floating over the gradient background.",
      initialCode: `<div class="flex items-center justify-center h-64 rounded-xl bg-linear-to-br from-violet-500 via-fuchsia-500 to-pink-500 p-6">
  <div class="rounded-2xl p-6 text-white w-56 text-center">
    <div class="text-4xl mb-3">🌊</div>
    <p class="font-bold text-lg">Glass Card</p>
    <p class="text-sm opacity-75 mt-1">Glassmorphism effect</p>
  </div>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-64 rounded-xl bg-linear-to-br from-violet-500 via-fuchsia-500 to-pink-500 p-6">
  <div class="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6 text-white w-56 text-center">
    <div class="text-4xl mb-3">🌊</div>
    <p class="font-bold text-lg">Glass Card</p>
    <p class="text-sm opacity-75 mt-1">Glassmorphism effect</p>
  </div>
</div>`,
      hints: [
        "`backdrop-blur-md` blurs the background behind the element.",
        "`bg-white/20` gives a semi-transparent white background (20% opacity).",
        "`border border-white/30` adds a subtle translucent border for glass depth.",
      ],
    },
    {
      id: 4,
      title: "Brightness Dimmed Overlay",
      difficulty: "Easy",
      instructions:
        "The background image wrapper needs to be dimmed when its inner card is hovered. Add `group` to the outer div and `group-hover:brightness-75 transition-all duration-300` to the gradient background so it dims on card hover.",
      initialCode: `<div class="flex items-center justify-center h-56 rounded-xl overflow-hidden bg-linear-to-br from-amber-400 to-orange-500 p-6">
  <div class="bg-white/90 rounded-xl p-5 text-center w-48 shadow-lg">
    <p class="text-sm font-bold text-slate-800">Hover the card</p>
    <p class="text-xs text-slate-500 mt-1">Background should dim</p>
  </div>
</div>`,
      solutionCode: `<div class="group flex items-center justify-center h-56 rounded-xl overflow-hidden bg-linear-to-br from-amber-400 to-orange-500 p-6">
  <div class="bg-white/90 rounded-xl p-5 text-center w-48 shadow-lg group-hover:brightness-75 transition-all duration-300">
    <p class="text-sm font-bold text-slate-800">Hover the card</p>
    <p class="text-xs text-slate-500 mt-1">Background should dim</p>
  </div>
</div>`,
      hints: [
        "Add `group` to the outer wrapper div.",
        "`group-hover:brightness-75` applies `filter: brightness(0.75)` when the parent is hovered.",
        "`transition-all duration-300` animates the brightness change.",
      ],
    },
    {
      id: 5,
      title: "Drop Shadow Filter on SVG Icon",
      difficulty: "Medium",
      instructions:
        "The SVG star icon has no shadow. Add `drop-shadow-lg` so a shadow appears beneath and around the icon shape itself (unlike `shadow-lg` which only applies to the bounding box).",
      initialCode: `<div class="flex items-center justify-center h-40 bg-slate-800 rounded-xl">
  <svg class="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-40 bg-slate-800 rounded-xl">
  <svg class="w-16 h-16 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
</div>`,
      hints: [
        "`drop-shadow-lg` uses CSS `filter: drop-shadow(...)` which respects transparent areas.",
        "This is ideal for SVGs and PNGs because it follows the actual shape, not the box.",
        "Add `drop-shadow-lg` directly to the `<svg>` element.",
      ],
    },
    {
      id: 6,
      title: "Saturate on Hover",
      difficulty: "Medium",
      instructions:
        "The product card image looks washed out. Add `saturate-50 hover:saturate-100 transition-all duration-300` to the image so it starts desaturated and becomes fully vibrant on hover.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-xs shadow-sm">
  <div class="h-36 bg-linear-to-br from-teal-300 to-cyan-500 flex items-center justify-center">
    <span class="text-5xl">👟</span>
  </div>
  <div class="p-4">
    <p class="text-sm font-bold text-slate-800">Air Runner Pro</p>
    <p class="text-xs text-slate-400 mt-0.5">Lightweight · Durable</p>
  </div>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-xs shadow-sm">
  <div class="h-36 bg-linear-to-br from-teal-300 to-cyan-500 flex items-center justify-center saturate-50 hover:saturate-100 transition-all duration-300">
    <span class="text-5xl">👟</span>
  </div>
  <div class="p-4">
    <p class="text-sm font-bold text-slate-800">Air Runner Pro</p>
    <p class="text-xs text-slate-400 mt-0.5">Lightweight · Durable</p>
  </div>
</div>`,
      hints: [
        "`saturate-50` applies `filter: saturate(0.5)`, reducing colour intensity by half.",
        "`hover:saturate-100` restores full saturation on hover.",
        "Add both classes to the image/preview element.",
      ],
    },
    {
      id: 7,
      title: "Frosted Navbar",
      difficulty: "Medium",
      instructions:
        "Build a sticky frosted-glass navbar. Add `backdrop-blur-lg bg-white/70 border-b border-white/40` to the `<nav>` element to create a translucent navbar that blurs content scrolled behind it.",
      initialCode: `<div class="relative h-48 bg-linear-to-br from-sky-400 to-indigo-500 rounded-xl overflow-hidden">
  <nav class="sticky top-0 px-6 py-3 flex items-center justify-between">
    <span class="font-bold text-white text-sm">MyApp</span>
    <div class="flex gap-4 text-xs font-medium text-white/80">
      <a href="#">Home</a>
      <a href="#">Docs</a>
      <a href="#">Pricing</a>
    </div>
  </nav>
  <div class="p-6 pt-2 text-white text-sm opacity-60">
    Page content scrolls behind the frosted navbar…
  </div>
</div>`,
      solutionCode: `<div class="relative h-48 bg-linear-to-br from-sky-400 to-indigo-500 rounded-xl overflow-hidden">
  <nav class="sticky top-0 px-6 py-3 flex items-center justify-between backdrop-blur-lg bg-white/70 border-b border-white/40">
    <span class="font-bold text-slate-800 text-sm">MyApp</span>
    <div class="flex gap-4 text-xs font-medium text-slate-600">
      <a href="#">Home</a>
      <a href="#">Docs</a>
      <a href="#">Pricing</a>
    </div>
  </nav>
  <div class="p-6 pt-2 text-white text-sm opacity-60">
    Page content scrolls behind the frosted navbar…
  </div>
</div>`,
      hints: [
        "`backdrop-blur-lg` blurs everything behind the navbar.",
        "`bg-white/70` gives a 70% opaque white background — enough to see the blur effect.",
        "`border-b border-white/40` adds a subtle separator line.",
      ],
    },
    {
      id: 8,
      title: "Hue Rotate on Hover",
      difficulty: "Hard",
      instructions:
        "The gradient card should shift its hue by 90° when hovered. Add `hover:hue-rotate-90 transition-all duration-500` to the card div so its colours rotate around the colour wheel on hover.",
      initialCode: `<div class="flex items-center justify-center h-56 bg-slate-100 rounded-xl">
  <div class="w-52 h-36 rounded-2xl bg-linear-to-br from-pink-500 via-red-400 to-orange-400 flex items-center justify-center shadow-lg cursor-pointer">
    <p class="text-white font-bold text-sm">Hover me</p>
  </div>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-56 bg-slate-100 rounded-xl">
  <div class="w-52 h-36 rounded-2xl bg-linear-to-br from-pink-500 via-red-400 to-orange-400 flex items-center justify-center shadow-lg cursor-pointer hover:hue-rotate-90 transition-all duration-500">
    <p class="text-white font-bold text-sm">Hover me</p>
  </div>
</div>`,
      hints: [
        "`hue-rotate-90` applies `filter: hue-rotate(90deg)` — cycling all colours 90° around the wheel.",
        "`transition-all duration-500` makes the colour shift animate smoothly.",
        "Add `hover:hue-rotate-90 transition-all duration-500` to the gradient div.",
      ],
    },
    {
      id: 9,
      title: "Invert Dark Mode Preview",
      difficulty: "Hard",
      instructions:
        "The preview box shows a light-mode card. Add `invert` to a second copy of the card wrapper to simulate a quick dark-mode preview using the CSS `filter: invert(1)` trick.",
      initialCode: `<div class="flex flex-col gap-4 p-4 bg-slate-200 rounded-xl max-w-xs">
  <p class="text-xs font-bold text-slate-500 uppercase tracking-wide">Light Preview</p>
  <div class="bg-white rounded-xl border border-slate-200 p-4">
    <p class="text-sm font-bold text-slate-800">Component Card</p>
    <p class="text-xs text-slate-400 mt-1">This is preview content.</p>
  </div>
  <p class="text-xs font-bold text-slate-500 uppercase tracking-wide">Dark Preview (inverted)</p>
  <div class="bg-white rounded-xl border border-slate-200 p-4">
    <p class="text-sm font-bold text-slate-800">Component Card</p>
    <p class="text-xs text-slate-400 mt-1">This is preview content.</p>
  </div>
</div>`,
      solutionCode: `<div class="flex flex-col gap-4 p-4 bg-slate-200 rounded-xl max-w-xs">
  <p class="text-xs font-bold text-slate-500 uppercase tracking-wide">Light Preview</p>
  <div class="bg-white rounded-xl border border-slate-200 p-4">
    <p class="text-sm font-bold text-slate-800">Component Card</p>
    <p class="text-xs text-slate-400 mt-1">This is preview content.</p>
  </div>
  <p class="text-xs font-bold text-slate-500 uppercase tracking-wide">Dark Preview (inverted)</p>
  <div class="invert bg-white rounded-xl border border-slate-200 p-4">
    <p class="text-sm font-bold text-slate-800">Component Card</p>
    <p class="text-xs text-slate-400 mt-1">This is preview content.</p>
  </div>
</div>`,
      hints: [
        "`invert` applies `filter: invert(1)`, inverting all colours including backgrounds and text.",
        "Add `invert` to the second card's wrapper div only.",
        "This is a quick trick to preview dark mode appearance without a real dark theme.",
      ],
    },
    {
      id: 10,
      title: "Layered Filter Effects",
      difficulty: "Hard",
      instructions:
        "Combine multiple filter utilities to create an artistic effect on the image placeholder. Add `contrast-125 saturate-150 brightness-90 hover:grayscale hover:contrast-100 hover:saturate-100 transition-all duration-500` to the gradient div — it should look vivid by default and muted on hover.",
      initialCode: `<div class="flex items-center justify-center h-56 bg-slate-100 rounded-xl">
  <div class="w-52 h-40 rounded-2xl bg-linear-to-br from-emerald-400 via-cyan-400 to-blue-500 flex items-center justify-center shadow-lg cursor-pointer">
    <span class="text-white font-bold text-sm drop-shadow">Gallery Image</span>
  </div>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-56 bg-slate-100 rounded-xl">
  <div class="w-52 h-40 rounded-2xl bg-linear-to-br from-emerald-400 via-cyan-400 to-blue-500 flex items-center justify-center shadow-lg cursor-pointer contrast-125 saturate-150 brightness-90 hover:grayscale hover:contrast-100 hover:saturate-100 transition-all duration-500">
    <span class="text-white font-bold text-sm drop-shadow">Gallery Image</span>
  </div>
</div>`,
      hints: [
        "Multiple Tailwind filter utilities stack into a single `filter` declaration.",
        "Default state: `contrast-125 saturate-150 brightness-90` — vivid and slightly dark.",
        "Hover state: `hover:grayscale hover:contrast-100 hover:saturate-100` — fully desaturated and neutral.",
      ],
    },
  ],
};
