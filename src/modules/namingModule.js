/**
 * Naming Conventions Module
 * Questions use the same shape as challenges.js so they render inside
 * the identical ChallengeView editor / preview / AI-validation flow.
 * Fields: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */
export const namingModule = {
  id: "naming-conventions",
  title: "Naming Conventions",
  description:
    "Practice writing meaningful, readable, and consistent CSS class names. Avoid cryptic abbreviations and generic identifiers.",
  difficulty: "Beginner",
  icon: "🏷️",
  color: "blue",
  questions: [
    {
      id: 1,
      title: "Rename Generic Class Names",
      difficulty: "Easy",
      instructions:
        "The outer div uses 'div1' and text elements use 'text1'/'text2' — meaningless names. Rename them to **page-header**, **header-title**, and **header-subtitle** so any developer understands the structure at a glance.",
      initialCode: `<div class="div1 bg-white p-6 rounded-lg shadow">
  <h1 class="text1 text-2xl font-bold text-slate-800">Welcome to Our Site</h1>
  <p class="text2 text-slate-500 mt-1">We build amazing things.</p>
</div>`,
      solutionCode: `<div class="page-header bg-white p-6 rounded-lg shadow">
  <h1 class="header-title text-2xl font-bold text-slate-800">Welcome to our side</h1>
  <p class="header-subtitle text-slate-500 mt-1">We build amazing things.</p>
</div>`,
      hints: [
        "Think about the semantic role of the outer div — it is the page's header area.",
        "The h1 is the main title; the p is a supporting subtitle.",
        "Replace: div1 → page-header, text1 → header-title, text2 → header-subtitle.",
      ],
    },
    {
      id: 2,
      title: "Enforce Consistent Casing",
      difficulty: "Easy",
      instructions:
        "The nav mixes 'navBar' (camelCase), 'nav-link' (kebab), and 'NavItem' (PascalCase). Normalise every custom class to **kebab-case**: nav-bar and nav-link.",
      initialCode: `<nav class="navBar bg-white border-b border-slate-200 px-6 py-3 flex gap-6">
  <a class="navLink text-sm font-medium text-slate-600 hover:text-blue-600" href="/">Home</a>
  <a class="nav-link text-sm font-medium text-slate-600 hover:text-blue-600" href="/about">About</a>
  <a class="NavItem text-sm font-medium text-slate-600 hover:text-blue-600" href="/contact">Contact</a>
</nav>`,
      solutionCode: `<nav class="nav-bar bg-white border-b border-slate-200 px-6 py-3 flex gap-6">
  <a class="nav-link text-sm font-medium text-slate-600 hover:text-blue-600" href="/">Home</a>
  <a class="nav-link text-sm font-medium text-slate-600 hover:text-blue-600" href="/about">About</a>
  <a class="nav-link text-sm font-medium text-slate-600 hover:text-blue-600" href="/contact">Contact</a>
</nav>`,
      hints: [
        "CSS convention is all-lowercase words joined by hyphens (kebab-case).",
        "navBar → nav-bar, NavItem → nav-item (but since all anchors are the same, use nav-link).",
        "All three anchor tags represent the same type — they should all share the same class.",
      ],
    },
    {
      id: 3,
      title: "Replace Visual Names with Semantic Ones",
      difficulty: "Easy",
      instructions:
        "The buttons are named after appearance ('bigRedButton', 'smallBlueBtn'). Rename them to purpose-based names: **btn-danger** for the delete action and **btn-primary** for the save action.",
      initialCode: `<div class="flex gap-3 p-6">
  <button class="bigRedButton px-5 py-2 bg-red-600 text-white rounded-lg font-medium">
    Delete Account
  </button>
  <button class="smallBlueBtn px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium">
    Save Changes
  </button>
</div>`,
      solutionCode: `<div class="flex gap-3 p-6">
  <button class="btn-danger px-5 py-2 bg-red-600 text-white rounded-lg font-medium">
    Delete Account
  </button>
  <button class="btn-primary px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium">
    Save Changes
  </button>
</div>`,
      hints: [
        "Ask: what does this button DO, not what does it look like?",
        "Red buttons for destructive actions are conventionally called 'danger'.",
        "Primary actions (save, confirm) are conventionally called 'primary'.",
      ],
    },
    {
      id: 4,
      title: "Remove Meaningless Number Suffixes",
      difficulty: "Easy",
      instructions:
        "Classes like 'section1', 'heading1', 'para1' use order numbers that add no meaning. Rename them to context-specific names: **services-section**, **services-heading**, and **services-description**.",
      initialCode: `<section class="section1 py-12 px-6 bg-slate-50">
  <h2 class="heading1 text-2xl font-bold text-slate-800 mb-3">Our Services</h2>
  <p class="para1 text-slate-500 leading-relaxed">
    We offer a wide range of professional services.
  </p>
</section>`,
      solutionCode: `<section class="services-section py-12 px-6 bg-slate-50">
  <h2 class="services-heading text-2xl font-bold text-slate-800 mb-3">Our Services</h2>
  <p class="services-description text-slate-500 leading-relaxed">
    We offer a wide range of professional services.
  </p>
</section>`,
      hints: [
        "Numbers like '1' tell you order, not purpose. What is this section actually about?",
        "Use the section topic ('services') as the prefix for all child elements.",
        "section1 → services-section, heading1 → services-heading, para1 → services-description.",
      ],
    },
    {
      id: 5,
      title: "Expand Cryptic Abbreviations",
      difficulty: "Easy",
      instructions:
        "The user card uses abbreviations: 'usr-crd', 'usr-img', 'usr-inf', 'usr-nm', 'usr-eml'. Expand every abbreviation to its full readable form: **user-card**, **user-avatar**, **user-info**, **user-name**, **user-email**.",
      initialCode: `<div class="usr-crd flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
  <img class="usr-img w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/48" alt="User" />
  <div class="usr-inf">
    <span class="usr-nm block font-semibold text-slate-800">John Doe</span>
    <span class="usr-eml block text-sm text-slate-500">john@example.com</span>
  </div>
</div>`,
      solutionCode: `<div class="user-card flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
  <img class="user-avatar w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/48" alt="User" />
  <div class="user-info">
    <span class="user-name block font-semibold text-slate-800">John Doe</span>
    <span class="user-email block text-sm text-slate-500">john@example.com</span>
  </div>
</div>`,
      hints: [
        "Read each class name aloud — if you pause to decode it, expand it.",
        "usr → user, crd → card, img → avatar, inf → info, nm → name, eml → email.",
        "Good names read like plain English with zero mental translation.",
      ],
    },
    {
      id: 6,
      title: "Scope Overused Generic Names",
      difficulty: "Medium",
      instructions:
        "The product card reuses 'container', 'title', 'text', 'btn' everywhere. Rename each to a scoped name: **product-card**, **product-title**, **product-description**, **product-footer**, **product-price**, **product-buy-btn**.",
      initialCode: `<div class="container p-5 bg-white rounded-xl border border-slate-200 shadow-sm max-w-xs">
  <h3 class="title text-lg font-bold text-slate-800 mb-1">Wireless Headphones</h3>
  <p class="text text-sm text-slate-500 mb-4">Premium sound, 30h battery life.</p>
  <div class="container flex items-center justify-between">
    <span class="text text-xl font-bold text-slate-800">$89.99</span>
    <button class="btn px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Buy Now</button>
  </div>
</div>`,
      solutionCode: `<div class="product-card p-5 bg-white rounded-xl border border-slate-200 shadow-sm max-w-xs">
  <h3 class="product-title text-lg font-bold text-slate-800 mb-1">Wireless Headphones</h3>
  <p class="product-description text-sm text-slate-500 mb-4">Premium sound, 30h battery life.</p>
  <div class="product-footer flex items-center justify-between">
    <span class="product-price text-xl font-bold text-slate-800">$89.99</span>
    <button class="product-buy-btn px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Buy Now</button>
  </div>
</div>`,
      hints: [
        "Prefix every child element with the component name ('product-') to create a namespace.",
        "'container' doesn't say what it contains — name it by its role.",
        "The inner div is the card's footer row → product-footer.",
      ],
    },
    {
      id: 7,
      title: "Name a Login Form Semantically",
      difficulty: "Medium",
      instructions:
        "The form uses abbreviations: 'frm', 'grp', 'lbl', 'fld', 'sbmt'. Rename them to clear, purposeful names: **login-form**, **form-group**, **form-label**, **form-input**, and **login-submit-btn**.",
      initialCode: `<form class="frm max-w-sm mx-auto p-6 bg-white rounded-xl border border-slate-200">
  <div class="grp mb-4">
    <label class="lbl block text-sm font-medium text-slate-700 mb-1">Email</label>
    <input class="fld w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" type="email" />
  </div>
  <div class="grp mb-5">
    <label class="lbl block text-sm font-medium text-slate-700 mb-1">Password</label>
    <input class="fld w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" type="password" />
  </div>
  <button class="sbmt w-full py-2 bg-blue-600 text-white rounded-lg font-medium">Login</button>
</form>`,
      solutionCode: `<form class="login-form max-w-sm mx-auto p-6 bg-white rounded-xl border border-slate-200">
  <div class="form-group mb-4">
    <label class="form-label block text-sm font-medium text-slate-700 mb-1">Email</label>
    <input class="form-input w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" type="email" />
  </div>
  <div class="form-group mb-5">
    <label class="form-label block text-sm font-medium text-slate-700 mb-1">Password</label>
    <input class="form-input w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" type="password" />
  </div>
  <button class="login-submit-btn w-full py-2 bg-blue-600 text-white rounded-lg font-medium">Login</button>
</form>`,
      hints: [
        "Start with the form's purpose: 'login-form'.",
        "Each field wrapper is a 'form-group'; label → form-label, input → form-input.",
        "The submit button's action is specific to this form → login-submit-btn.",
      ],
    },
    {
      id: 8,
      title: "Normalise Mixed Casing in a Footer",
      difficulty: "Medium",
      instructions:
        "The footer mixes camelCase ('pageFooter'), SCREAMING_SNAKE ('FOOTER_LINK'), and kebab-case. Normalise **all** custom class names to kebab-case: **page-footer**, **footer-link**, **copyright-text**.",
      initialCode: `<footer class="pageFooter bg-slate-800 text-slate-300 px-6 py-8">
  <div class="footer-links flex gap-6 mb-4">
    <a class="footerLink hover:text-white text-sm" href="#">Privacy Policy</a>
    <a class="FOOTER_LINK hover:text-white text-sm" href="#">Terms of Service</a>
    <a class="footer-link hover:text-white text-sm" href="#">Contact</a>
  </div>
  <p class="copyrightText text-xs text-slate-500">© 2024 Company Inc.</p>
</footer>`,
      solutionCode: `<footer class="page-footer bg-slate-800 text-slate-300 px-6 py-8">
  <div class="footer-links flex gap-6 mb-4">
    <a class="footer-link hover:text-white text-sm" href="#">Privacy Policy</a>
    <a class="footer-link hover:text-white text-sm" href="#">Terms of Service</a>
    <a class="footer-link hover:text-white text-sm" href="#">Contact</a>
  </div>
  <p class="copyright-text text-xs text-slate-500">© 2024 Company Inc.</p>
</footer>`,
      hints: [
        "CSS is case-sensitive — '.footerLink' and '.footer-link' are two different selectors.",
        "Convert: pageFooter → page-footer, copyrightText → copyright-text.",
        "All three anchor tags are the same type — they should all share the class 'footer-link'.",
      ],
    },
    {
      id: 9,
      title: "Strip Visual Descriptors from Modal Names",
      difficulty: "Medium",
      instructions:
        "Modal classes embed visual details ('modal-white-box-centered-large'). Strip ALL visual descriptors and rename to role-only names: **modal-overlay**, **modal-dialog**, **modal-title**, **modal-body**, **modal-cancel-btn**.",
      initialCode: `<div class="modal-open-big-overlay-dark fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div class="modal-white-box-centered-large bg-white rounded-2xl p-8 max-w-md w-full mx-4">
    <h2 class="modal-title-black-bold-24 text-2xl font-bold text-slate-800 mb-3">Confirm Action</h2>
    <p class="modal-body-text-grey-sm text-sm text-slate-500 mb-6">
      This action cannot be undone.
    </p>
    <button class="modal-close-btn-red-small px-4 py-2 bg-red-600 text-white rounded-lg text-sm">
      Cancel
    </button>
  </div>
</div>`,
      solutionCode: `<div class="modal-overlay fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div class="modal-dialog bg-white rounded-2xl p-8 max-w-md w-full mx-4">
    <h2 class="modal-title text-2xl font-bold text-slate-800 mb-3">Confirm Action</h2>
    <p class="modal-body text-sm text-slate-500 mb-6">
      This action cannot be undone.
    </p>
    <button class="modal-cancel-btn px-4 py-2 bg-red-600 text-white rounded-lg text-sm">
      Cancel
    </button>
  </div>
</div>`,
      hints: [
        "A class name should answer 'What is this?' not 'How does it look?'.",
        "Remove ALL size, color, and position words from the name.",
        "modal-open-big-overlay-dark → modal-overlay (styling handled by Tailwind utilities).",
      ],
    },
    {
      id: 10,
      title: "Use Semantic Alert State Names",
      difficulty: "Medium",
      instructions:
        "Alert boxes use color names ('box-green', 'box-red', 'box-yellow') which break when designs change. Replace with semantic state names: base class **alert**, variants **alert-success**, **alert-error**, **alert-warning**. Also rename 'msg' to **alert-message**.",
      initialCode: `<div class="flex flex-col gap-3 p-6 bg-slate-50">
  <div class="box box-green flex items-center gap-3 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-lg">
    <p class="msg text-sm font-medium text-emerald-800">Profile saved successfully.</p>
  </div>
  <div class="box box-red flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
    <p class="msg text-sm font-medium text-red-800">Something went wrong. Try again.</p>
  </div>
  <div class="box box-yellow flex items-center gap-3 px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg">
    <p class="msg text-sm font-medium text-amber-800">Your session is about to expire.</p>
  </div>
</div>`,
      solutionCode: `<div class="flex flex-col gap-3 p-6 bg-slate-50">
  <div class="alert alert-success flex items-center gap-3 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-lg">
    <p class="alert-message text-sm font-medium text-emerald-800">Profile saved successfully.</p>
  </div>
  <div class="alert alert-error flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
    <p class="alert-message text-sm font-medium text-red-800">Something went wrong. Try again.</p>
  </div>
  <div class="alert alert-warning flex items-center gap-3 px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg">
    <p class="alert-message text-sm font-medium text-amber-800">Your session is about to expire.</p>
  </div>
</div>`,
      hints: [
        "Color-based names break when designs change — use semantic state names instead.",
        "All three boxes share the 'alert' base class; the type is a second class: alert-success, alert-error, alert-warning.",
        "'msg' → 'alert-message' to scope it properly to the alert component.",
      ],
    },
  ],
};
