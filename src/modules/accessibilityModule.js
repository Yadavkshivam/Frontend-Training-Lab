/**
 * Web Accessibility (a11y) Patterns Module
 * 10 advanced challenges covering ARIA roles, semantic HTML, keyboard navigation,
 * focus management, skip links, and screen-reader-only content.
 */

export const accessibilityModule = {
  id: "accessibility",
  title: "Web Accessibility (a11y)",
  description:
    "Build inclusive UIs using ARIA attributes, semantic HTML, keyboard navigation patterns, and screen-reader-friendly techniques.",
  difficulty: "Advanced",
  icon: "♿",
  color: "lime",
  questions: [
    {
      id: 1,
      title: "Add ARIA Labels to Icon Buttons",
      difficulty: "Easy",
      instructions:
        "Icon-only buttons are invisible to screen readers. Add `aria-label` attributes to each button describing its action: 'Edit profile', 'Delete account', and 'Share'.",
      initialCode: `<div class="flex items-center justify-center gap-4 h-40 bg-slate-100 rounded-xl">
  <button class="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors">
    ✏️
  </button>
  <button class="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors">
    🗑️
  </button>
  <button class="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors">
    📤
  </button>
</div>`,
      solutionCode: `<div class="flex items-center justify-center gap-4 h-40 bg-slate-100 rounded-xl">
  <button aria-label="Edit profile" class="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors">
    ✏️
  </button>
  <button aria-label="Delete account" class="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors">
    🗑️
  </button>
  <button aria-label="Share" class="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors">
    📤
  </button>
</div>`,
      hints: [
        "`aria-label` provides an accessible name for elements that have no visible text.",
        "Screen readers announce the `aria-label` value when the element is focused.",
        "Add `aria-label=\"Edit profile\"` to the first button, and similarly for the others.",
      ],
    },
    {
      id: 2,
      title: "Screen-Reader Only Helper Class",
      difficulty: "Easy",
      instructions:
        "Create a `.sr-only` class that visually hides the span but keeps it accessible to screen readers. Use the standard technique: `position: absolute`, `width: 1px`, `height: 1px`, `overflow: hidden`, `clip: rect(0,0,0,0)`, `white-space: nowrap`.",
      initialCode: `<style>
  .sr-only {
    /* Add screen-reader-only styles here */
  }
</style>
<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl gap-4">
  <button class="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">
    <span aria-hidden="true">💾</span>
    <span class="sr-only">Save changes</span>
    Save
  </button>
  <button class="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-semibold">
    <span aria-hidden="true">🗑️</span>
    <span class="sr-only">Delete this item permanently</span>
    Delete
  </button>
</div>`,
      solutionCode: `<style>
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
<div class="flex items-center justify-center h-40 bg-slate-100 rounded-xl gap-4">
  <button class="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">
    <span aria-hidden="true">💾</span>
    <span class="sr-only">Save changes</span>
    Save
  </button>
  <button class="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-semibold">
    <span aria-hidden="true">🗑️</span>
    <span class="sr-only">Delete this item permanently</span>
    Delete
  </button>
</div>`,
      hints: [
        "The `.sr-only` pattern keeps content in the DOM (so screen readers see it) but makes it visually invisible.",
        "`clip: rect(0,0,0,0)` combined with `overflow: hidden` hides the 1×1px box.",
        "`white-space: nowrap` prevents the text from wrapping into multiple lines.",
      ],
    },
    {
      id: 3,
      title: "Accessible Form with Labels",
      difficulty: "Easy",
      instructions:
        "Associate each `<label>` with its `<input>` by matching the `for` attribute on the label to the `id` on the input. Add `for=\"email\"` and `id=\"email\"` to the first pair, and `for=\"name\"` with `id=\"name\"` to the second.",
      initialCode: `<div class="p-5 bg-slate-100 rounded-xl max-w-xs space-y-4">
  <div>
    <label class="block text-sm font-semibold text-slate-700 mb-1">
      Full Name
    </label>
    <input type="text" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="John Doe" />
  </div>
  <div>
    <label class="block text-sm font-semibold text-slate-700 mb-1">
      Email
    </label>
    <input type="email" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="john@example.com" />
  </div>
</div>`,
      solutionCode: `<div class="p-5 bg-slate-100 rounded-xl max-w-xs space-y-4">
  <div>
    <label for="name" class="block text-sm font-semibold text-slate-700 mb-1">
      Full Name
    </label>
    <input id="name" type="text" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="John Doe" />
  </div>
  <div>
    <label for="email" class="block text-sm font-semibold text-slate-700 mb-1">
      Email
    </label>
    <input id="email" type="email" class="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm" placeholder="john@example.com" />
  </div>
</div>`,
      hints: [
        "The `for` attribute on a `<label>` must match the `id` attribute on its `<input>`.",
        "This creates a programmatic association that screen readers announce when the input is focused.",
        "Clicking the label also focuses the associated input — a usability benefit.",
      ],
    },
    {
      id: 4,
      title: "Role and aria-label on a Custom Dialog",
      difficulty: "Medium",
      instructions:
        "Mark the modal div with `role=\"dialog\"`, `aria-modal=\"true\"`, and `aria-labelledby=\"dialog-title\"`. Add `id=\"dialog-title\"` to the heading so the dialog has an accessible name.",
      initialCode: `<div class="flex items-center justify-center h-64 bg-black/30 rounded-xl">
  <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4">
    <h2 class="text-lg font-bold text-slate-800 mb-2">Confirm Deletion</h2>
    <p class="text-sm text-slate-500 mb-5">This action cannot be undone. Are you sure you want to delete this item?</p>
    <div class="flex gap-3">
      <button class="flex-1 bg-red-500 text-white text-sm font-semibold py-2 rounded-xl">Delete</button>
      <button class="flex-1 bg-slate-100 text-slate-700 text-sm font-semibold py-2 rounded-xl">Cancel</button>
    </div>
  </div>
</div>`,
      solutionCode: `<div class="flex items-center justify-center h-64 bg-black/30 rounded-xl">
  <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" class="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4">
    <h2 id="dialog-title" class="text-lg font-bold text-slate-800 mb-2">Confirm Deletion</h2>
    <p class="text-sm text-slate-500 mb-5">This action cannot be undone. Are you sure you want to delete this item?</p>
    <div class="flex gap-3">
      <button class="flex-1 bg-red-500 text-white text-sm font-semibold py-2 rounded-xl">Delete</button>
      <button class="flex-1 bg-slate-100 text-slate-700 text-sm font-semibold py-2 rounded-xl">Cancel</button>
    </div>
  </div>
</div>`,
      hints: [
        "`role=\"dialog\"` announces the element as a dialog to assistive technologies.",
        "`aria-modal=\"true\"` tells screen readers the content outside the dialog is inert.",
        "`aria-labelledby` references the `id` of the element that names the dialog.",
      ],
    },
    {
      id: 5,
      title: "Live Region for Status Messages",
      difficulty: "Medium",
      instructions:
        "Wrap the status message paragraph in a `<div>` with `aria-live=\"polite\"` and `aria-atomic=\"true\"` so screen readers announce changes to the status text when it updates.",
      initialCode: `<div class="flex flex-col items-center justify-center h-48 bg-slate-100 rounded-xl gap-4">
  <button class="bg-indigo-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl">
    Save Settings
  </button>
  <!-- Wrap this in an aria-live region -->
  <p class="text-sm text-emerald-600 font-medium bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
    ✅ Settings saved successfully!
  </p>
</div>`,
      solutionCode: `<div class="flex flex-col items-center justify-center h-48 bg-slate-100 rounded-xl gap-4">
  <button class="bg-indigo-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl">
    Save Settings
  </button>
  <div aria-live="polite" aria-atomic="true">
    <p class="text-sm text-emerald-600 font-medium bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
      ✅ Settings saved successfully!
    </p>
  </div>
</div>`,
      hints: [
        "`aria-live=\"polite\"` announces content changes after the user finishes their current action.",
        "`aria-atomic=\"true\"` means the entire region is read as one unit when it changes.",
        "Wrap the dynamic status text container with `aria-live` to enable announcements.",
      ],
    },
    {
      id: 6,
      title: "Skip Navigation Link",
      difficulty: "Medium",
      instructions:
        "Add a skip navigation link as the very first element. It should be visually hidden by default but visible on `:focus`. Set `href=\"#main\"` and add `id=\"main\"` to the main content div.",
      initialCode: `<style>
  .skip-link {
    position: absolute;
    top: -100%;
    left: 0;
    background: #6366f1;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 100;
    text-decoration: none;
    /* Show on focus */
  }
</style>
<div class="bg-white rounded-xl overflow-hidden border border-slate-200 max-w-sm">
  <!-- Add skip link here -->
  <nav class="bg-indigo-600 px-4 py-3 flex gap-4">
    <a href="#" class="text-white text-sm font-medium">Home</a>
    <a href="#" class="text-white text-sm font-medium">About</a>
  </nav>
  <main class="p-4">
    <p class="text-sm text-slate-600">Main content goes here. Tab to this area.</p>
  </main>
</div>`,
      solutionCode: `<style>
  .skip-link {
    position: absolute;
    top: -100%;
    left: 0;
    background: #6366f1;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 100;
    text-decoration: none;
  }
  .skip-link:focus {
    top: 0;
  }
</style>
<div class="bg-white rounded-xl overflow-hidden border border-slate-200 max-w-sm">
  <a href="#main" class="skip-link">Skip to main content</a>
  <nav class="bg-indigo-600 px-4 py-3 flex gap-4">
    <a href="#" class="text-white text-sm font-medium">Home</a>
    <a href="#" class="text-white text-sm font-medium">About</a>
  </nav>
  <main id="main" class="p-4">
    <p class="text-sm text-slate-600">Main content goes here. Tab to this area.</p>
  </main>
</div>`,
      hints: [
        "The skip link is positioned off-screen (`top: -100%`) until it receives focus.",
        "On `:focus`, set `top: 0` to bring it into view.",
        "The link's `href` must match the `id` of the target element (`#main` → `id=\"main\"`).",
      ],
    },
    {
      id: 7,
      title: "Expandable Section with aria-expanded",
      difficulty: "Medium",
      instructions:
        "Add `aria-expanded=\"true\"` to the open accordion button and `aria-expanded=\"false\"` to the closed one. Add `aria-controls` pointing to the `id` of the panel each button controls.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 max-w-sm overflow-hidden divide-y divide-slate-100">
  <div>
    <button class="w-full text-left px-4 py-3 font-medium text-sm text-slate-700 flex justify-between items-center">
      What is accessibility?
      <span class="text-slate-400">▲</span>
    </button>
    <div id="panel-1" class="px-4 pb-3 text-sm text-slate-500">
      Accessibility means designing products usable by everyone, including people with disabilities.
    </div>
  </div>
  <div>
    <button class="w-full text-left px-4 py-3 font-medium text-sm text-slate-700 flex justify-between items-center">
      Why does it matter?
      <span class="text-slate-400">▼</span>
    </button>
    <div id="panel-2" class="hidden px-4 pb-3 text-sm text-slate-500">
      It ensures equal access to information and improves usability for all users.
    </div>
  </div>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 max-w-sm overflow-hidden divide-y divide-slate-100">
  <div>
    <button aria-expanded="true" aria-controls="panel-1" class="w-full text-left px-4 py-3 font-medium text-sm text-slate-700 flex justify-between items-center">
      What is accessibility?
      <span class="text-slate-400">▲</span>
    </button>
    <div id="panel-1" class="px-4 pb-3 text-sm text-slate-500">
      Accessibility means designing products usable by everyone, including people with disabilities.
    </div>
  </div>
  <div>
    <button aria-expanded="false" aria-controls="panel-2" class="w-full text-left px-4 py-3 font-medium text-sm text-slate-700 flex justify-between items-center">
      Why does it matter?
      <span class="text-slate-400">▼</span>
    </button>
    <div id="panel-2" class="hidden px-4 pb-3 text-sm text-slate-500">
      It ensures equal access to information and improves usability for all users.
    </div>
  </div>
</div>`,
      hints: [
        "`aria-expanded=\"true\"` tells screen readers the section is currently open.",
        "`aria-expanded=\"false\"` signals the section is collapsed.",
        "`aria-controls` takes the `id` of the element the button controls.",
      ],
    },
    {
      id: 8,
      title: "Progress Bar Accessibility",
      difficulty: "Hard",
      instructions:
        "Add `role=\"progressbar\"`, `aria-valuenow=\"65\"`, `aria-valuemin=\"0\"`, `aria-valuemax=\"100\"`, and `aria-label=\"Upload progress\"` to the progress bar container so screen readers can convey the upload percentage.",
      initialCode: `<div class="flex flex-col items-center justify-center h-40 bg-slate-100 rounded-xl gap-4 px-8">
  <div class="w-full flex justify-between text-sm mb-1">
    <span class="font-medium text-slate-700">Uploading file…</span>
    <span class="text-slate-500">65%</span>
  </div>
  <div class="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
    <div class="h-full bg-indigo-500 rounded-full" style="width: 65%"></div>
  </div>
</div>`,
      solutionCode: `<div class="flex flex-col items-center justify-center h-40 bg-slate-100 rounded-xl gap-4 px-8">
  <div class="w-full flex justify-between text-sm mb-1">
    <span class="font-medium text-slate-700">Uploading file…</span>
    <span class="text-slate-500">65%</span>
  </div>
  <div
    role="progressbar"
    aria-valuenow="65"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Upload progress"
    class="w-full h-3 bg-slate-200 rounded-full overflow-hidden"
  >
    <div class="h-full bg-indigo-500 rounded-full" style="width: 65%"></div>
  </div>
</div>`,
      hints: [
        "`role=\"progressbar\"` identifies the element as a progress indicator.",
        "`aria-valuenow` is the current value; `aria-valuemin` and `aria-valuemax` define the range.",
        "`aria-label` gives the progress bar a human-readable name for screen readers.",
      ],
    },
    {
      id: 9,
      title: "Image Alt Text",
      difficulty: "Hard",
      instructions:
        "Add meaningful `alt` text to the product image (`\"Wireless noise-cancelling headphones in midnight black\"`) and mark the decorative divider image as presentational with `alt=\"\"`.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 p-4 max-w-xs">
  <img
    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop"
    class="w-full h-36 object-cover rounded-lg mb-3"
  />
  <h3 class="font-semibold text-slate-800 text-sm">Pro Headphones X1</h3>
  <p class="text-xs text-slate-400 mt-0.5">$299 · Free shipping</p>
  <img
    src="https://via.placeholder.com/1x1"
    class="w-full h-px my-3 opacity-0"
  />
  <button class="w-full bg-indigo-600 text-white text-sm font-semibold py-2 rounded-lg">Add to Cart</button>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 p-4 max-w-xs">
  <img
    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop"
    alt="Wireless noise-cancelling headphones in midnight black"
    class="w-full h-36 object-cover rounded-lg mb-3"
  />
  <h3 class="font-semibold text-slate-800 text-sm">Pro Headphones X1</h3>
  <p class="text-xs text-slate-400 mt-0.5">$299 · Free shipping</p>
  <img
    src="https://via.placeholder.com/1x1"
    alt=""
    class="w-full h-px my-3 opacity-0"
  />
  <button class="w-full bg-indigo-600 text-white text-sm font-semibold py-2 rounded-lg">Add to Cart</button>
</div>`,
      hints: [
        "Every `<img>` must have an `alt` attribute — screen readers skip images with `alt=\"\"`.",
        "Descriptive alt text should convey the meaning/context of the image.",
        "Decorative images that convey no meaning should use `alt=\"\"` (empty string), NOT omit the attribute.",
      ],
    },
    {
      id: 10,
      title: "Tab Panel with ARIA Roles",
      difficulty: "Hard",
      instructions:
        "Add proper ARIA roles to the tab widget: `role=\"tablist\"` on the nav, `role=\"tab\"` on each button with `aria-selected` (`\"true\"` for active tab, `\"false\"` for inactive), and `role=\"tabpanel\"` with `aria-labelledby` on each panel.",
      initialCode: `<div class="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-sm">
  <nav class="flex border-b border-slate-200">
    <button class="px-4 py-2.5 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-600">Overview</button>
    <button class="px-4 py-2.5 text-sm font-medium text-slate-500">Reviews</button>
    <button class="px-4 py-2.5 text-sm font-medium text-slate-500">FAQ</button>
  </nav>
  <div class="p-4 text-sm text-slate-600">
    Product overview content here.
  </div>
</div>`,
      solutionCode: `<div class="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-sm">
  <nav role="tablist" class="flex border-b border-slate-200">
    <button id="tab-overview" role="tab" aria-selected="true" aria-controls="panel-overview" class="px-4 py-2.5 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-600">Overview</button>
    <button id="tab-reviews" role="tab" aria-selected="false" aria-controls="panel-reviews" class="px-4 py-2.5 text-sm font-medium text-slate-500">Reviews</button>
    <button id="tab-faq" role="tab" aria-selected="false" aria-controls="panel-faq" class="px-4 py-2.5 text-sm font-medium text-slate-500">FAQ</button>
  </nav>
  <div id="panel-overview" role="tabpanel" aria-labelledby="tab-overview" class="p-4 text-sm text-slate-600">
    Product overview content here.
  </div>
</div>`,
      hints: [
        "`role=\"tablist\"` marks the container of tab buttons.",
        "`role=\"tab\"` on each button paired with `aria-selected` communicates which tab is active.",
        "`role=\"tabpanel\"` on the content area linked via `aria-labelledby` to the active tab's `id`.",
      ],
    },
  ],
};
