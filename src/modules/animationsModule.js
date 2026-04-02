/**
 * CSS Transitions & Animations Module
 * 10 challenges covering transition properties, duration, easing,
 * keyframe animations, transform, and combining effects.
 * Shape: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */


export const animationsModule = {
  id: "css-animations",
  title: "CSS Transitions & Animations",
  description:
    "Bring UIs to life with smooth transitions and keyframe animations. Learn duration, easing, transforms, and how to build polished interactive effects.",
  difficulty: "Intermediate",
  icon: "✨",
  color: "indigo",
  questions: [
    {
      id: 1,
      title: "Add a Hover Colour Transition",
      difficulty: "Easy",
      instructions:
        "The button changes colour instantly on hover. Add `transition-colors` and `duration-200` so the background colour change is smoothly animated.",
      initialCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
    Hover Me
  </button>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
    Hover Me
  </button>
</div>`,
      hints: [
        "`transition-colors` tells the browser to animate color-related properties.",
        "`duration-200` sets the transition to 200 milliseconds.",
        "Add both `transition-colors` and `duration-200` to the button.",
      ],
    },
    {
      id: 2,
      title: "Scale Up on Hover",
      difficulty: "Easy",
      instructions:
        "The card should grow slightly when hovered. Add `hover:scale-105` and `transition-transform duration-200` to create a smooth scale effect.",
      initialCode: `<div class="flex items-center justify-center h-56 bg-slate-100 rounded-xl">
  <div class="bg-white rounded-xl border border-slate-200 p-6 w-48 text-center shadow-sm">
    <div class="text-4xl mb-3">🚀</div>
    <p class="font-semibold text-slate-800 text-sm">Launch Product</p>
    <p class="text-xs text-slate-400 mt-1">Hover to see the effect</p>
  </div>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-56 bg-slate-100 rounded-xl">
  <div class="bg-white rounded-xl border border-slate-200 p-6 w-48 text-center shadow-sm hover:scale-105 transition-transform duration-200">
    <div class="text-4xl mb-3">🚀</div>
    <p class="font-semibold text-slate-800 text-sm">Launch Product</p>
    <p class="text-xs text-slate-400 mt-1">Hover to see the effect</p>
  </div>
</div>`,
      hints: [
        "`hover:scale-105` scales the element to 105% on hover.",
        "`transition-transform` animates the transform property.",
        "Add `hover:scale-105 transition-transform duration-200` to the card div.",
      ],
    },
    {
      id: 3,
      title: "Smooth Opacity Fade",
      difficulty: "Easy",
      instructions:
        "The overlay text is invisible by default (`opacity-0`) and should fade in on hover. Add `group` to the container and `group-hover:opacity-100 transition-opacity duration-300` to the overlay.",
      initialCode: `<div class="flex items-center justify-center h-56 bg-slate-100 rounded-xl">
  <div class="relative w-48 h-32 bg-linear-to-br from-violet-500 to-purple-600 rounded-xl overflow-hidden">
    <div class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0">
      <p class="text-white font-bold text-sm">View Project</p>
    </div>
  </div>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-56 bg-slate-100 rounded-xl">
  <div class="group relative w-48 h-32 bg-linear-to-br from-violet-500 to-purple-600 rounded-xl overflow-hidden">
    <div class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p class="text-white font-bold text-sm">View Project</p>
    </div>
  </div>
</div>`,
      hints: [
        "Add `group` to the parent element so child elements can respond to its hover state.",
        "`group-hover:opacity-100` makes the overlay visible when the parent is hovered.",
        "`transition-opacity duration-300` animates the opacity change over 300ms.",
      ],
    },
    {
      id: 4,
      title: "Transition Multiple Properties",
      difficulty: "Easy",
      instructions:
        "The button changes both its background colour and shadow on hover, but the changes are instant. Use `transition-all duration-200 ease-in-out` to animate all properties at once.",
      initialCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl">
  <button class="bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-300 text-white font-semibold px-8 py-3 rounded-xl">
    Click Me
  </button>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl">
  <button class="bg-indigo-500 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-300 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 ease-in-out">
    Click Me
  </button>
</div>`,
      hints: [
        "`transition-all` transitions every animatable CSS property.",
        "`ease-in-out` gives the animation a natural acceleration and deceleration.",
        "Add `transition-all duration-200 ease-in-out` to the button.",
      ],
    },
    {
      id: 5,
      title: "Rotate Icon on Hover",
      difficulty: "Medium",
      instructions:
        "The chevron icon should rotate 180° when the accordion header is hovered. Add `group` to the button, and `group-hover:rotate-180 transition-transform duration-300` to the SVG.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 max-w-sm">
  <button class="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700">
    What is Tailwind CSS?
    <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <button class="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700">
    Is it free to use?
    <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 max-w-sm">
  <button class="group w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700">
    What is Tailwind CSS?
    <svg class="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <button class="group w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700">
    Is it free to use?
    <svg class="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
</div>`,
      hints: [
        "Add `group` to each `<button>` element.",
        "`group-hover:rotate-180` rotates the SVG 180° when the parent button is hovered.",
        "`transition-transform duration-300` makes the rotation animate smoothly.",
      ],
    },
    {
      id: 6,
      title: "Slide In from Left with translate-x",
      difficulty: "Medium",
      instructions:
        "The notification banner is hidden off-screen to the left (`-translate-x-full`). On hover of the trigger button, it should slide in. Add `group` to the wrapper and `group-hover:translate-x-0 transition-transform duration-300` to the banner.",
      initialCode: `<div class="relative h-24 bg-slate-100 rounded-xl overflow-hidden flex items-center px-6">
  <button class="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg z-10">
    Hover to show banner
  </button>
  <div class="absolute left-0 top-0 h-full bg-emerald-500 text-white flex items-center px-6 text-sm font-semibold -translate-x-full">
    ✅ Changes saved successfully!
  </div>
</div>`,
      solutionCode: `<div class="group relative h-24 bg-slate-100 rounded-xl overflow-hidden flex items-center px-6">
  <button class="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg z-10">
    Hover to show banner
  </button>
  <div class="absolute left-0 top-0 h-full bg-emerald-500 text-white flex items-center px-6 text-sm font-semibold -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
    ✅ Changes saved successfully!
  </div>
</div>`,
      hints: [
        "Add `group` to the outer container div.",
        "`group-hover:translate-x-0` cancels the `-translate-x-full` offset on hover.",
        "`transition-transform duration-300` animates the slide movement.",
      ],
    },
    {
      id: 7,
      title: "Pulse Animation on Badge",
      difficulty: "Medium",
      instructions:
        "The 'Live' badge should have a continuous pulse animation to signal it is active. Add Tailwind's built-in `animate-pulse` class to the badge.",
      initialCode: `<div class="flex items-center justify-center h-40 bg-slate-900 rounded-xl">
  <div class="flex items-center gap-3">
    <div class="w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>
    <span class="text-white font-semibold text-sm">Live Stream</span>
    <span class="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">LIVE</span>
  </div>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-40 bg-slate-900 rounded-xl">
  <div class="flex items-center gap-3">
    <div class="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
    <span class="text-white font-semibold text-sm">Live Stream</span>
    <span class="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">LIVE</span>
  </div>
</div>`,
      hints: [
        "`animate-pulse` applies a fade in/out animation continuously.",
        "It is typically used on skeleton loaders and live indicators.",
        "Add `animate-pulse` to both the green dot and the LIVE badge.",
      ],
    },
    {
      id: 8,
      title: "Spin Loading Indicator",
      difficulty: "Medium",
      instructions:
        "The loading spinner circle is static. Add `animate-spin` to make it rotate continuously like a real loading indicator.",
      initialCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl gap-3">
  <div class="w-6 h-6 rounded-full border-4 border-slate-200 border-t-blue-500"></div>
  <span class="text-sm text-slate-600 font-medium">Loading…</span>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl gap-3">
  <div class="w-6 h-6 rounded-full border-4 border-slate-200 border-t-blue-500 animate-spin"></div>
  <span class="text-sm text-slate-600 font-medium">Loading…</span>
</div>`,
      hints: [
        "`animate-spin` applies a continuous 360° rotation animation.",
        "The spinner works because only the top border is colored (`border-t-blue-500`).",
        "Add `animate-spin` to the circle div.",
      ],
    },
    {
      id: 9,
      title: "Bounce Scroll Indicator",
      difficulty: "Hard",
      instructions:
        "The scroll-down arrow should bounce up and down to draw attention. Add `animate-bounce` to the arrow icon wrapper.",
      initialCode: `<div class="flex flex-col items-center justify-end h-48 bg-linear-to-b from-blue-600 to-indigo-700 rounded-xl pb-6 gap-2">
  <p class="text-white text-sm font-medium opacity-75">Scroll down</p>
  <div class="text-white">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </div>
</div>`,
      solutionCode: `<div class="flex flex-col items-center justify-end h-48 bg-linear-to-b from-blue-600 to-indigo-700 rounded-xl pb-6 gap-2">
  <p class="text-white text-sm font-medium opacity-75">Scroll down</p>
  <div class="text-white animate-bounce">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </div>
</div>`,
      hints: [
        "`animate-bounce` applies an up-and-down motion animation.",
        "Apply it to the wrapper div that contains the SVG arrow.",
        "Add `animate-bounce` to the `<div class=\"text-white\">` element.",
      ],
    },
    {
      id: 10,
      title: "Skeleton Loading Screen",
      difficulty: "Hard",
      instructions:
        "Build a skeleton loader for a profile card. The avatar circle, name bar, and two text lines should all pulse with `animate-pulse` and use a gray background (`bg-slate-200`) to simulate loading content.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-xs space-y-4">
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 rounded-full bg-slate-200"></div>
    <div class="space-y-2 flex-1">
      <div class="h-3 bg-slate-200 rounded-full w-3/4"></div>
      <div class="h-2 bg-slate-200 rounded-full w-1/2"></div>
    </div>
  </div>
  <div class="space-y-2">
    <div class="h-2 bg-slate-200 rounded-full"></div>
    <div class="h-2 bg-slate-200 rounded-full w-5/6"></div>
    <div class="h-2 bg-slate-200 rounded-full w-4/6"></div>
  </div>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-xs space-y-4 animate-pulse">
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 rounded-full bg-slate-200"></div>
    <div class="space-y-2 flex-1">
      <div class="h-3 bg-slate-200 rounded-full w-3/4"></div>
      <div class="h-2 bg-slate-200 rounded-full w-1/2"></div>
    </div>
  </div>
  <div class="space-y-2">
    <div class="h-2 bg-slate-200 rounded-full"></div>
    <div class="h-2 bg-slate-200 rounded-full w-5/6"></div>
    <div class="h-2 bg-slate-200 rounded-full w-4/6"></div>
  </div>
</div>`,
      hints: [
        "You can place `animate-pulse` on the parent container to pulse all children at once.",
        "All the placeholder blocks already have `bg-slate-200` set.",
        "Add `animate-pulse` to the outer card div.",
      ],
    },
  ],
};



