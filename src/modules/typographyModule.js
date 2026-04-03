/**
 * CSS Typography Module
 * 10 challenges covering font sizing, line-height, letter-spacing,
 * text alignment, truncation, multi-line clamp, and readable prose widths.
 * Shape: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */
export const typographyModule = {
  id: "css-typography",
  title: "CSS Typography",
  description:
    "Master text styling for readable, beautiful UIs. Practice font sizes, line-height, letter-spacing, truncation, and building polished typographic hierarchies.",
  difficulty: "Beginner",
  icon: "🔤",
  color: "orange",
  questions: [
    {
      id: 1,
      title: "Build a Type Scale Hierarchy",
      difficulty: "Easy",
      instructions:
        "The page title, subtitle, and body text all use the same size. Apply a proper scale: `text-4xl font-bold` for the h1, `text-xl font-semibold text-slate-600` for the h2, and `text-base text-slate-500` for the paragraph.",
      initialCode: `<div class="p-8 bg-white rounded-xl border border-slate-200 max-w-md">
  <h1 class="text-slate-900">Build Better Frontends</h1>
  <h2 class="text-slate-700 mt-2">Learn by doing, not just reading</h2>
  <p class="text-slate-500 mt-3">Practice real challenges and level up your CSS and Tailwind skills one task at a time.</p>
</div>`,
      solutionCode: `<div class="p-8 bg-white rounded-xl border border-slate-200 max-w-md">
  <h1 class="text-4xl font-bold text-slate-900">Build Better Frontends</h1>
  <h2 class="text-xl font-semibold text-slate-600 mt-2">Learn by doing, not just reading</h2>
  <p class="text-base text-slate-500 mt-3">Practice real challenges and level up your CSS and Tailwind skills one task at a time.</p>
</div>`,
      hints: [
        "A clear hierarchy uses different sizes AND weights to create visual priority.",
        "h1 → `text-4xl font-bold`, h2 → `text-xl font-semibold`, p → `text-base`.",
        "Also update the text colour classes to match the solution.",
      ],
    },
    {
      id: 2,
      title: "Fix Line Height for Readability",
      difficulty: "Easy",
      instructions:
        "The long paragraph has tight line spacing which makes it hard to read. Add `leading-relaxed` to the paragraph to increase the line height to a comfortable reading level.",
      initialCode: `<div class="p-8 bg-white rounded-xl border border-slate-200 max-w-lg">
  <h2 class="text-xl font-bold text-slate-800 mb-3">Why Line Height Matters</h2>
  <p class="text-sm text-slate-600 leading-none">
    Line height — also called leading — is the vertical space between lines of text. When it is too tight, the eye struggles to track from the end of one line to the start of the next. A line-height of around 1.5 to 1.7 is generally recommended for body text. This translates to Tailwind's leading-relaxed or leading-loose utility classes, which make long paragraphs significantly more comfortable to read on screen.
  </p>
</div>`,
      solutionCode: `<div class="p-8 bg-white rounded-xl border border-slate-200 max-w-lg">
  <h2 class="text-xl font-bold text-slate-800 mb-3">Why Line Height Matters</h2>
  <p class="text-sm text-slate-600 leading-relaxed">
    Line height — also called leading — is the vertical space between lines of text. When it is too tight, the eye struggles to track from the end of one line to the start of the next. A line-height of around 1.5 to 1.7 is generally recommended for body text. This translates to Tailwind's leading-relaxed or leading-loose utility classes, which make long paragraphs significantly more comfortable to read on screen.
  </p>
</div>`,
      hints: [
        "`leading-none` sets line-height to 1 — too tight for body text.",
        "`leading-relaxed` sets line-height to 1.625 — comfortable for reading.",
        "Change `leading-none` to `leading-relaxed` on the paragraph.",
      ],
    },
    {
      id: 3,
      title: "Letter Spacing for Headings & Labels",
      difficulty: "Easy",
      instructions:
        "The category label above the heading should be spaced out with `tracking-widest uppercase` for a badge-like look. The main heading should be slightly tight with `tracking-tight`.",
      initialCode: `<div class="p-8 bg-white rounded-xl border border-slate-200 max-w-sm">
  <p class="text-xs font-semibold text-blue-500 mb-2">Tutorial</p>
  <h2 class="text-3xl font-bold text-slate-900">Mastering Tailwind CSS</h2>
  <p class="text-sm text-slate-500 mt-2">A hands-on guide to utility-first styling.</p>
</div>`,
      solutionCode: `<div class="p-8 bg-white rounded-xl border border-slate-200 max-w-sm">
  <p class="text-xs font-semibold text-blue-500 mb-2 tracking-widest uppercase">Tutorial</p>
  <h2 class="text-3xl font-bold text-slate-900 tracking-tight">Mastering Tailwind CSS</h2>
  <p class="text-sm text-slate-500 mt-2">A hands-on guide to utility-first styling.</p>
</div>`,
      hints: [
        "`tracking-widest` adds generous letter spacing — great for uppercase labels.",
        "`uppercase` transforms the text to all caps.",
        "`tracking-tight` slightly reduces spacing — works well for large display headings.",
      ],
    },
    {
      id: 4,
      title: "Truncate Overflowing Text",
      difficulty: "Easy",
      instructions:
        "The card title overflows its container on long names. Add `truncate` to the heading so it cuts off with an ellipsis instead of wrapping or overflowing.",
      initialCode: `<div class="w-48 bg-white rounded-xl border border-slate-200 p-4">
  <h3 class="font-semibold text-slate-800 text-sm">An Extremely Long Project Name That Overflows The Card Width</h3>
  <p class="text-xs text-slate-400 mt-1">Last updated 2 days ago</p>
</div>`,
      solutionCode: `<div class="w-48 bg-white rounded-xl border border-slate-200 p-4">
  <h3 class="font-semibold text-slate-800 text-sm truncate">An Extremely Long Project Name That Overflows The Card Width</h3>
  <p class="text-xs text-slate-400 mt-1">Last updated 2 days ago</p>
</div>`,
      hints: [
        "`truncate` is shorthand for `overflow-hidden text-ellipsis whitespace-nowrap`.",
        "It prevents text wrapping and shows `…` when the text is cut.",
        "Add `truncate` to the `<h3>` element.",
      ],
    },
    {
      id: 5,
      title: "Clamp to Two Lines",
      difficulty: "Medium",
      instructions:
        "The card description wraps to many lines. Use `line-clamp-2` to limit it to exactly 2 lines with an ellipsis, keeping all cards the same height.",
      initialCode: `<div class="grid grid-cols-2 gap-4 p-4 bg-slate-100 rounded-xl">
  <div class="bg-white rounded-xl border border-slate-200 p-4">
    <h3 class="font-semibold text-slate-800 text-sm mb-1">Short</h3>
    <p class="text-xs text-slate-500">Brief description.</p>
  </div>
  <div class="bg-white rounded-xl border border-slate-200 p-4">
    <h3 class="font-semibold text-slate-800 text-sm mb-1">Long Card</h3>
    <p class="text-xs text-slate-500">This is a much longer description that will wrap onto multiple lines and make this card taller than its neighbour, breaking the grid alignment and looking inconsistent.</p>
  </div>
</div>`,
      solutionCode: `<div class="grid grid-cols-2 gap-4 p-4 bg-slate-100 rounded-xl">
  <div class="bg-white rounded-xl border border-slate-200 p-4">
    <h3 class="font-semibold text-slate-800 text-sm mb-1">Short</h3>
    <p class="text-xs text-slate-500 line-clamp-2">Brief description.</p>
  </div>
  <div class="bg-white rounded-xl border border-slate-200 p-4">
    <h3 class="font-semibold text-slate-800 text-sm mb-1">Long Card</h3>
    <p class="text-xs text-slate-500 line-clamp-2">This is a much longer description that will wrap onto multiple lines and make this card taller than its neighbour, breaking the grid alignment and looking inconsistent.</p>
  </div>
</div>`,
      hints: [
        "`line-clamp-2` limits text to 2 lines using CSS `-webkit-line-clamp`.",
        "It automatically adds an ellipsis at the cut point.",
        "Add `line-clamp-2` to both `<p>` elements.",
      ],
    },
    {
      id: 6,
      title: "Constrain Prose Width for Readability",
      difficulty: "Medium",
      instructions:
        "The article body spans the full width making lines too long to read comfortably (max ~75 characters ideal). Constrain it with `max-w-prose` and center it with `mx-auto`.",
      initialCode: `<div class="p-8 bg-white rounded-xl border border-slate-200">
  <h1 class="text-2xl font-bold text-slate-900 mb-4">The Art of Readable Typography</h1>
  <p class="text-base text-slate-600 leading-relaxed mb-3">Typography is one of the most powerful tools a designer has. A well-set page feels effortless to read; a poorly-set page tires the eye. Line length plays a critical role — research suggests an ideal measure of 45–75 characters per line for body text.</p>
  <p class="text-base text-slate-600 leading-relaxed">When lines are too wide, the eye has to travel a long distance and can lose its place. When they are too narrow, the text feels choppy and forced. max-w-prose constrains the content to approximately 65 characters per line, a sweet spot for comfortable reading.</p>
</div>`,
      solutionCode: `<div class="p-8 bg-white rounded-xl border border-slate-200">
  <div class="max-w-prose mx-auto">
    <h1 class="text-2xl font-bold text-slate-900 mb-4">The Art of Readable Typography</h1>
    <p class="text-base text-slate-600 leading-relaxed mb-3">Typography is one of the most powerful tools a designer has. A well-set page feels effortless to read; a poorly-set page tires the eye. Line length plays a critical role — research suggests an ideal measure of 45–75 characters per line for body text.</p>
    <p class="text-base text-slate-600 leading-relaxed">When lines are too wide, the eye has to travel a long distance and can lose its place. When they are too narrow, the text feels choppy and forced. max-w-prose constrains the content to approximately 65 characters per line, a sweet spot for comfortable reading.</p>
  </div>
</div>`,
      hints: [
        "`max-w-prose` sets `max-width: 65ch` — approximately 65 characters wide.",
        "`mx-auto` centres the constrained block horizontally.",
        "Wrap all the text content in a new `<div class=\"max-w-prose mx-auto\">`.",
      ],
    },
    {
      id: 7,
      title: "Responsive Font Size",
      difficulty: "Medium",
      instructions:
        "The hero heading should be compact on mobile (`text-2xl`) and scale up through `md:text-4xl` to `lg:text-6xl`. Update the h1 with responsive text size classes.",
      initialCode: `<section class="bg-slate-900 text-white p-10 rounded-xl text-center">
  <h1 class="text-6xl font-extrabold tracking-tight">Hello, World</h1>
  <p class="text-slate-400 mt-3 text-lg">A platform for modern frontend learners.</p>
</section>`,
      solutionCode: `<section class="bg-slate-900 text-white p-10 rounded-xl text-center">
  <h1 class="text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-tight">Hello, World</h1>
  <p class="text-slate-400 mt-3 text-lg">A platform for modern frontend learners.</p>
</section>`,
      hints: [
        "Mobile first: start with the smallest size — `text-2xl`.",
        "Add `md:text-4xl` for medium screens and `lg:text-6xl` for large.",
        "All three classes go on the `<h1>` element.",
      ],
    },
    {
      id: 8,
      title: "Gradient Text Effect",
      difficulty: "Medium",
      instructions:
        "Make the heading text display with a blue-to-violet gradient. Add `bg-linear-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent` to the `<span>` wrapping the gradient word.",
      initialCode: `<div class="p-10 bg-slate-900 rounded-xl text-center">
  <h1 class="text-4xl font-extrabold text-white tracking-tight">
    Build <span>Beautiful</span> UIs
  </h1>
  <p class="text-slate-400 mt-3 text-sm">Tailwind CSS makes gradient text easy.</p>
</div>`,
      solutionCode: `<div class="p-10 bg-slate-900 rounded-xl text-center">
  <h1 class="text-4xl font-extrabold text-white tracking-tight">
    Build <span class="bg-linear-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">Beautiful</span> UIs
  </h1>
  <p class="text-slate-400 mt-3 text-sm">Tailwind CSS makes gradient text easy.</p>
</div>`,
      hints: [
        "`bg-clip-text` clips the background to the text shape.",
        "`text-transparent` makes the text colour transparent so the background shows through.",
        "Add `bg-linear-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent` to the `<span>`.",
      ],
    },
    {
      id: 9,
      title: "Styled Blockquote",
      difficulty: "Hard",
      instructions:
        "The testimonial quote is unstyled. Add a left accent border (`border-l-4 border-blue-500`), italic text (`italic`), and a larger quote size (`text-lg`) to make it visually distinct. Also give the author line `text-sm font-semibold text-slate-700`.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-md">
  <blockquote class="pl-4 text-slate-600">
    "Tailwind changed how I think about CSS. I no longer open a separate stylesheet — everything lives right in the HTML and it just works."
  </blockquote>
  <p class="mt-4 text-slate-400 pl-4">— Sarah K., Senior Frontend Engineer</p>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 p-6 max-w-md">
  <blockquote class="border-l-4 border-blue-500 pl-4 italic text-lg text-slate-600 leading-relaxed">
    "Tailwind changed how I think about CSS. I no longer open a separate stylesheet — everything lives right in the HTML and it just works."
  </blockquote>
  <p class="mt-4 text-sm font-semibold text-slate-700 pl-4">— Sarah K., Senior Frontend Engineer</p>
</div>`,
      hints: [
        "Add `border-l-4 border-blue-500` to the blockquote for the accent bar.",
        "`italic` and `text-lg` set the quote style and size.",
        "Update the `<p>` author line to `text-sm font-semibold text-slate-700`.",
      ],
    },
    {
      id: 10,
      title: "Full Article Typography System",
      difficulty: "Hard",
      instructions:
        "Apply a complete typographic system to the article: constrain with `max-w-prose mx-auto`, h1 `text-3xl font-bold tracking-tight`, h2 `text-xl font-semibold mt-8 mb-3`, paragraphs `text-base leading-relaxed text-slate-600 mb-4`, and the meta line `text-xs text-slate-400 uppercase tracking-widest mb-6`.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 p-8">
  <div>
    <p>Tutorial · March 2026</p>
    <h1>CSS Custom Properties Explained</h1>
    <h2>What are CSS Variables?</h2>
    <p>CSS custom properties (also called CSS variables) are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using -- notation and accessed using the var() function.</p>
    <h2>Why Use Them?</h2>
    <p>Custom properties enable dynamic theming, reduce repetition, and make global style changes trivial — update one value and the entire design system updates with it.</p>
  </div>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 p-8">
  <div class="max-w-prose mx-auto">
    <p class="text-xs text-slate-400 uppercase tracking-widest mb-6">Tutorial · March 2026</p>
    <h1 class="text-3xl font-bold tracking-tight text-slate-900">CSS Custom Properties Explained</h1>
    <h2 class="text-xl font-semibold text-slate-800 mt-8 mb-3">What are CSS Variables?</h2>
    <p class="text-base leading-relaxed text-slate-600 mb-4">CSS custom properties (also called CSS variables) are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using -- notation and accessed using the var() function.</p>
    <h2 class="text-xl font-semibold text-slate-800 mt-8 mb-3">Why Use Them?</h2>
    <p class="text-base leading-relaxed text-slate-600 mb-4">Custom properties enable dynamic theming, reduce repetition, and make global style changes trivial — update one value and the entire design system updates with it.</p>
  </div>
</div>`,
      hints: [
        "Start by wrapping all content in `<div class=\"max-w-prose mx-auto\">`.",
        "Apply the meta style to the `<p>` tag first: `text-xs text-slate-400 uppercase tracking-widest mb-6`.",
        "Then work through h1, each h2, and each paragraph systematically.",
      ],
    },
  ],
};
