/**
 * BEM Methodology Module
 * Questions use the same shape as challenges.js so they render inside
 * the identical ChallengeView editor / preview / AI-validation flow.
 * Fields: id, title, difficulty, instructions, initialCode, solutionCode, hints[]
 */
export const bemModule = {
  id: "bem-methodology",
  title: "BEM Methodology",
  description:
    "Master Block__Element--Modifier naming. Write scalable, self-documenting CSS class names that communicate structure and state at a glance.",
  difficulty: "Intermediate",
  icon: "🧱",
  color: "purple",
  questions: [
    {
      id: 1,
      title: "Convert a Card to BEM",
      difficulty: "Easy",
      instructions:
        "The card uses non-BEM names like 'cardTitle', 'cardHeading'. Convert it so **card** is the Block, inner elements use the double-underscore syntax (card__heading etc.), and the featured button variant uses a double-hyphen Modifier (card__button--featured).",
      initialCode: `<div class="cardTitle bg-white rounded-xl border border-slate-200 p-6 max-w-xs">
  <h3 class="cardHeading text-lg font-bold text-slate-800 mb-2">Premium Plan</h3>
  <p class="cardBody text-sm text-slate-500 mb-4">Everything you need to grow.</p>
  <button class="cardButton featured px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">
    Get Started
  </button>
</div>`,
      solutionCode: `<div class="card bg-white rounded-xl border border-slate-200 p-6 max-w-xs">
  <h3 class="card__heading text-lg font-bold text-slate-800 mb-2">Premium Plan</h3>
  <p class="card__body text-sm text-slate-500 mb-4">Everything you need to grow.</p>
  <button class="card__button card__button--featured px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">
    Get Started
  </button>
</div>`,
      hints: [
        "Block = the standalone component ('card'). Everything inside is an Element.",
        "Elements: card__heading, card__body, card__button (block + __ + element-name).",
        "Modifiers add a variant on top of the base class: card__button--featured (always alongside card__button).",
      ],
    },
    {
      id: 2,
      title: "Scope Nav Active State with BEM",
      difficulty: "Easy",
      instructions:
        "The nav uses a floating 'active' class with no Block context. Apply BEM: **nav** is the Block, **nav__link** is the Element, and the active state becomes **nav__link--active** (used alongside the base class).",
      initialCode: `<nav class="navigation bg-white border-b border-slate-200 px-6 py-3 flex gap-6">
  <a class="link text-sm font-medium text-slate-500 hover:text-blue-600" href="/">Home</a>
  <a class="link active text-sm font-medium text-blue-600 border-b-2 border-blue-600" href="/about">About</a>
  <a class="link text-sm font-medium text-slate-500 hover:text-blue-600" href="/contact">Contact</a>
</nav>`,
      solutionCode: `<nav class="nav bg-white border-b border-slate-200 px-6 py-3 flex gap-6">
  <a class="nav__link text-sm font-medium text-slate-500 hover:text-blue-600" href="/">Home</a>
  <a class="nav__link nav__link--active text-sm font-medium text-blue-600 border-b-2 border-blue-600" href="/about">About</a>
  <a class="nav__link text-sm font-medium text-slate-500 hover:text-blue-600" href="/contact">Contact</a>
</nav>`,
      hints: [
        "The Block is the nav element itself — rename 'navigation' to 'nav'.",
        "Each anchor is an Element of the nav: nav__link.",
        "The active state is a Modifier on the element: nav__link--active (keep nav__link too!).",
      ],
    },
    {
      id: 3,
      title: "Add Block Modifiers to Buttons",
      difficulty: "Easy",
      instructions:
        "Standalone variant classes ('redButton', 'largeButton') have no parent Block. Refactor so **button** is the Block and both variants become proper BEM Modifiers: **button--danger** and **button--large**, always paired with the base 'button' class.",
      initialCode: `<div class="flex flex-col gap-3 p-6">
  <button class="redButton px-4 py-2 bg-red-600 text-white rounded-lg font-medium">Delete</button>
  <button class="largeButton px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold text-lg">Submit Form</button>
  <button class="redButton largeButton px-6 py-3 bg-red-600 text-white rounded-xl font-semibold text-lg">Confirm Delete</button>
</div>`,
      solutionCode: `<div class="flex flex-col gap-3 p-6">
  <button class="button button--danger px-4 py-2 bg-red-600 text-white rounded-lg font-medium">Delete</button>
  <button class="button button--large px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold text-lg">Submit Form</button>
  <button class="button button--danger button--large px-6 py-3 bg-red-600 text-white rounded-xl font-semibold text-lg">Confirm Delete</button>
</div>`,
      hints: [
        "BEM Modifiers always sit alongside the base Block class, never replace it.",
        "redButton → button button--danger.",
        "Both Modifiers can coexist: button button--danger button--large.",
      ],
    },
    {
      id: 4,
      title: "Apply BEM to a Form with Error State",
      difficulty: "Easy",
      instructions:
        "The form uses camelCase and freestanding state classes. Apply BEM: **form** is the Block, 'formGroup'/'formLabel'/'formInput' become Elements, and 'hasError'/'invalid' become BEM Modifiers on their respective Elements.",
      initialCode: `<form class="loginForm max-w-sm p-6 bg-white rounded-xl border border-slate-200">
  <div class="formGroup hasError mb-4">
    <label class="formLabel block text-sm font-medium text-slate-700 mb-1">Email</label>
    <input class="formInput invalid w-full px-3 py-2 border border-red-400 rounded-lg text-sm" type="email" />
    <span class="errorText text-xs text-red-600 mt-1">Invalid email address</span>
  </div>
</form>`,
      solutionCode: `<form class="form max-w-sm p-6 bg-white rounded-xl border border-slate-200">
  <div class="form__group form__group--error mb-4">
    <label class="form__label block text-sm font-medium text-slate-700 mb-1">Email</label>
    <input class="form__input form__input--invalid w-full px-3 py-2 border border-red-400 rounded-lg text-sm" type="email" />
    <span class="form__error-text text-xs text-red-600 mt-1">Invalid email address</span>
  </div>
</form>`,
      hints: [
        "Block = form. loginForm → form.",
        "formGroup → form__group; state: hasError → form__group--error.",
        "formInput → form__input; invalid → form__input--invalid. Error text → form__error-text.",
      ],
    },
    {
      id: 5,
      title: "Flatten Nested BEM Elements",
      difficulty: "Medium",
      instructions:
        "The profile card incorrectly chains underscores ('profile__header__avatar'). BEM forbids nested element names. Flatten ALL elements to direct children of the Block: **profile__avatar**, **profile__info**, **profile__name**, **profile__role**.",
      initialCode: `<div class="profile bg-white rounded-xl border border-slate-200 p-5 max-w-xs">
  <div class="profile__header flex items-center gap-4">
    <img class="profile__header__avatar w-14 h-14 rounded-full object-cover" src="https://i.pravatar.cc/56" alt="" />
    <div class="profile__header__info">
      <h2 class="profile__header__info__name font-bold text-slate-800">Alice Johnson</h2>
      <span class="profile__header__info__role text-sm text-slate-500">Senior Designer</span>
    </div>
  </div>
</div>`,
      solutionCode: `<div class="profile bg-white rounded-xl border border-slate-200 p-5 max-w-xs">
  <div class="profile__header flex items-center gap-4">
    <img class="profile__avatar w-14 h-14 rounded-full object-cover" src="https://i.pravatar.cc/56" alt="" />
    <div class="profile__info">
      <h2 class="profile__name font-bold text-slate-800">Alice Johnson</h2>
      <span class="profile__role text-sm text-slate-500">Senior Designer</span>
    </div>
  </div>
</div>`,
      hints: [
        "BEM: block__element — always just ONE double underscore, no matter the DOM depth.",
        "profile__header__avatar is wrong → profile__avatar (flat child of the 'profile' Block).",
        "profile__header__info__name → profile__name.",
      ],
    },
    {
      id: 6,
      title: "Refactor a Pricing Card to BEM",
      difficulty: "Medium",
      instructions:
        "The pricing card mixes freestanding modifiers ('popular', 'highlighted') with non-scoped names. Convert fully to BEM: Block is **pricing-card**, variants are Block/Element Modifiers (**pricing-card--popular**, **pricing-card__badge--highlighted**).",
      initialCode: `<div class="pricing-card popular bg-white rounded-2xl border-2 border-indigo-400 p-6 max-w-xs">
  <div class="pricing-header flex items-center justify-between mb-4">
    <h3 class="planName text-lg font-bold text-slate-800">Pro Plan</h3>
    <span class="badge highlighted px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
      Most Popular
    </span>
  </div>
  <div class="pricing-body flex items-baseline gap-1 mb-6">
    <span class="bigPrice text-4xl font-bold text-slate-800">$49</span>
    <span class="period text-slate-400 text-sm">/month</span>
  </div>
</div>`,
      solutionCode: `<div class="pricing-card pricing-card--popular bg-white rounded-2xl border-2 border-indigo-400 p-6 max-w-xs">
  <div class="pricing-card__header flex items-center justify-between mb-4">
    <h3 class="pricing-card__plan-name text-lg font-bold text-slate-800">Pro Plan</h3>
    <span class="pricing-card__badge pricing-card__badge--highlighted px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
      Most Popular
    </span>
  </div>
  <div class="pricing-card__body flex items-baseline gap-1 mb-6">
    <span class="pricing-card__price text-4xl font-bold text-slate-800">$49</span>
    <span class="pricing-card__period text-slate-400 text-sm">/month</span>
  </div>
</div>`,
      hints: [
        "Block Modifier: popular → pricing-card pricing-card--popular.",
        "All inner elements: pricing-card__header, pricing-card__plan-name, pricing-card__badge, pricing-card__body, pricing-card__price, pricing-card__period.",
        "Element Modifier: highlighted → pricing-card__badge--highlighted (alongside pricing-card__badge).",
      ],
    },
    {
      id: 7,
      title: "Restructure an Alert with BEM",
      difficulty: "Medium",
      instructions:
        "The alert mixes a detached modifier ('success-alert') with camelCase element names. Apply BEM: **alert** is the Block, type variants are Block Modifiers (**alert--success**), and children are Elements (**alert__icon**, **alert__message**, **alert__close-btn**).",
      initialCode: `<div class="alert success-alert flex items-center gap-3 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-lg">
  <span class="alertIcon text-emerald-600 font-bold text-lg">✓</span>
  <p class="alert-msg flex-1 text-sm font-medium text-emerald-800">Changes saved successfully!</p>
  <button class="closeBtn dismiss-btn text-emerald-500 hover:text-emerald-700 text-lg leading-none">✕</button>
</div>`,
      solutionCode: `<div class="alert alert--success flex items-center gap-3 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-lg">
  <span class="alert__icon text-emerald-600 font-bold text-lg">✓</span>
  <p class="alert__message flex-1 text-sm font-medium text-emerald-800">Changes saved successfully!</p>
  <button class="alert__close-btn text-emerald-500 hover:text-emerald-700 text-lg leading-none">✕</button>
</div>`,
      hints: [
        "Block Modifier: success-alert → alert alert--success.",
        "alertIcon → alert__icon, alert-msg → alert__message.",
        "The close button has two redundant classes — replace both with one BEM Element: alert__close-btn.",
      ],
    },
    {
      id: 8,
      title: "Convert PascalCase Tabs to BEM",
      difficulty: "Medium",
      instructions:
        "The tabs use PascalCase React-style class names and 'isActive'/'isDisabled' state patterns. Convert to BEM: **tabs** Block, **tabs__list** / **tabs__tab** / **tabs__panel** Elements, and **tabs__tab--active** / **tabs__tab--disabled** Modifiers.",
      initialCode: `<div class="TabsContainer border border-slate-200 rounded-xl overflow-hidden">
  <div class="TabsList flex border-b border-slate-200 bg-slate-50">
    <button class="Tab isActive px-5 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600 bg-white">Overview</button>
    <button class="Tab px-5 py-3 text-sm font-medium text-slate-500 hover:text-slate-700">Details</button>
    <button class="Tab isDisabled px-5 py-3 text-sm font-medium text-slate-300 cursor-not-allowed">Reviews</button>
  </div>
  <div class="TabPanel p-5 text-sm text-slate-600">
    Panel content here
  </div>
</div>`,
      solutionCode: `<div class="tabs border border-slate-200 rounded-xl overflow-hidden">
  <div class="tabs__list flex border-b border-slate-200 bg-slate-50">
    <button class="tabs__tab tabs__tab--active px-5 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600 bg-white">Overview</button>
    <button class="tabs__tab px-5 py-3 text-sm font-medium text-slate-500 hover:text-slate-700">Details</button>
    <button class="tabs__tab tabs__tab--disabled px-5 py-3 text-sm font-medium text-slate-300 cursor-not-allowed">Reviews</button>
  </div>
  <div class="tabs__panel p-5 text-sm text-slate-600">
    Panel content here
  </div>
</div>`,
      hints: [
        "CSS BEM uses kebab-case only — TabsContainer → tabs, Tab → tabs__tab.",
        "isActive → tabs__tab--active, isDisabled → tabs__tab--disabled (keep tabs__tab alongside).",
        "TabPanel → tabs__panel, TabsList → tabs__list.",
      ],
    },
    {
      id: 9,
      title: "Apply BEM to a Hero Section",
      difficulty: "Medium",
      instructions:
        "The hero uses generic names ('inner-wrapper', 'left-content', 'bigTitle'). Apply BEM with **hero** as the Block and map every child to a flat Element: **hero__inner**, **hero__content**, **hero__title**, **hero__subtitle**, **hero__cta**, **hero__media**, **hero__image**.",
      initialCode: `<section class="hero-section bg-slate-900 text-white py-20 px-6">
  <div class="inner-wrapper max-w-5xl mx-auto flex items-center gap-12">
    <div class="left-content flex-1">
      <h1 class="bigTitle text-5xl font-bold leading-tight mb-4">Build Better Products</h1>
      <p class="subtext text-slate-400 text-lg mb-6">Ship faster with our platform.</p>
      <a class="cta-link px-6 py-3 bg-blue-500 rounded-xl font-semibold text-sm" href="#">Get Started →</a>
    </div>
    <div class="right-image flex-1">
      <img src="https://placehold.co/400x300/1e293b/94a3b8" alt="Hero" class="heroImg rounded-2xl w-full" />
    </div>
  </div>
</section>`,
      solutionCode: `<section class="hero bg-slate-900 text-white py-20 px-6">
  <div class="hero__inner max-w-5xl mx-auto flex items-center gap-12">
    <div class="hero__content flex-1">
      <h1 class="hero__title text-5xl font-bold leading-tight mb-4">Build Better Products</h1>
      <p class="hero__subtitle text-slate-400 text-lg mb-6">Ship faster with our platform.</p>
      <a class="hero__cta px-6 py-3 bg-blue-500 rounded-xl font-semibold text-sm" href="#">Get Started →</a>
    </div>
    <div class="hero__media flex-1">
      <img src="https://placehold.co/400x300/1e293b/94a3b8" alt="Hero" class="hero__image rounded-2xl w-full" />
    </div>
  </div>
</section>`,
      hints: [
        "The Block name is the prefix for ALL Elements inside it regardless of DOM nesting.",
        "hero-section → hero (shorter, cleaner Block name).",
        "inner-wrapper → hero__inner, left-content → hero__content, bigTitle → hero__title, heroImg → hero__image.",
      ],
    },
    {
      id: 10,
      title: "Add BEM State Modifiers to a Sidebar",
      difficulty: "Medium",
      instructions:
        "The sidebar uses freestanding state classes 'open' and 'current' that aren't scoped to any Block. Convert to BEM: **sidebar** Block with **sidebar--expanded** Modifier, **sidebar__menu** / **sidebar__item** / **sidebar__link** Elements, and **sidebar__item--active** Modifier.",
      initialCode: `<aside class="sidebar open bg-white border-r border-slate-200 w-64 min-h-screen p-4">
  <ul class="sidebar-menu space-y-1">
    <li class="menu-item current">
      <a class="item-link flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium" href="/dashboard">
        Dashboard
      </a>
    </li>
    <li class="menu-item">
      <a class="item-link flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium" href="/settings">
        Settings
      </a>
    </li>
  </ul>
</aside>`,
      solutionCode: `<aside class="sidebar sidebar--expanded bg-white border-r border-slate-200 w-64 min-h-screen p-4">
  <ul class="sidebar__menu space-y-1">
    <li class="sidebar__item sidebar__item--active">
      <a class="sidebar__link flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium" href="/dashboard">
        Dashboard
      </a>
    </li>
    <li class="sidebar__item">
      <a class="sidebar__link flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium" href="/settings">
        Settings
      </a>
    </li>
  </ul>
</aside>`,
      hints: [
        "Block Modifier: sidebar open → sidebar sidebar--expanded.",
        "sidebar-menu → sidebar__menu, menu-item → sidebar__item, item-link → sidebar__link.",
        "State Modifier: current → sidebar__item--active (always alongside sidebar__item).",
      ],
    },
  ],
};