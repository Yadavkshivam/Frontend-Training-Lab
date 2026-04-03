/**
 * Advanced CSS Selectors Module
 * 10 advanced challenges covering attribute selectors, combinators,
 * :has(), :where(), specificity-zero selectors, and complex selector patterns.
 */

export const advancedSelectorsModule = {
  id: "advanced-selectors",
  title: "Advanced CSS Selectors",
  description:
    "Master complex CSS selectors — attribute selectors, combinators, :has(), :where(), and specificity tricks — to write precise, maintainable stylesheets.",
  difficulty: "Advanced",
  icon: "🎯",
  color: "red",
  questions: [
    {
      id: 1,
      title: "Attribute Selector — Exact Match",
      difficulty: "Easy",
      instructions:
        "Use an attribute selector `[type=\"submit\"]` to style submit buttons with a green background (`#10b981`) and white text, without adding a class.",
      initialCode: `<style>
  button {
    padding: 0.5rem 1.25rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
    background: #e2e8f0;
    color: #475569;
  }
  /* Target [type="submit"] here */
</style>
<div class="flex items-center justify-center gap-3 h-40 bg-slate-100 rounded-xl">
  <button type="button">Cancel</button>
  <button type="submit">Submit Form</button>
  <button type="reset">Reset</button>
</div>`,
      solutionCode: `<style>
  button {
    padding: 0.5rem 1.25rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
    background: #e2e8f0;
    color: #475569;
  }
  [type="submit"] {
    background: #10b981;
    color: white;
  }
</style>
<div class="flex items-center justify-center gap-3 h-40 bg-slate-100 rounded-xl">
  <button type="button">Cancel</button>
  <button type="submit">Submit Form</button>
  <button type="reset">Reset</button>
</div>`,
      hints: [
        "`[attr=\"value\"]` matches elements where the attribute equals exactly that value.",
        "No class is needed — the `type` attribute itself acts as the selector target.",
        "Write `[type=\"submit\"] { background: #10b981; color: white; }`.",
      ],
    },
    {
      id: 2,
      title: "Attribute Selector — Starts With",
      difficulty: "Easy",
      instructions:
        "Use `[href^=\"https\"]` to style external (HTTPS) links with a `🔒` prefix using `::before { content: '🔒 '; }` so users can visually identify secure links.",
      initialCode: `<style>
  a { color: #6366f1; font-size: 0.875rem; text-decoration: none; display: block; margin-bottom: 0.4rem; }
  a:hover { text-decoration: underline; }
  /* Style links starting with https using ^= selector */
</style>
<div class="p-5 bg-slate-100 rounded-xl max-w-xs">
  <a href="https://example.com">example.com (secure)</a>
  <a href="http://oldsite.com">oldsite.com (insecure)</a>
  <a href="https://docs.example.com">docs.example.com (secure)</a>
  <a href="/about">About Us (internal)</a>
</div>`,
      solutionCode: `<style>
  a { color: #6366f1; font-size: 0.875rem; text-decoration: none; display: block; margin-bottom: 0.4rem; }
  a:hover { text-decoration: underline; }
  [href^="https"]::before {
    content: '🔒 ';
  }
</style>
<div class="p-5 bg-slate-100 rounded-xl max-w-xs">
  <a href="https://example.com">example.com (secure)</a>
  <a href="http://oldsite.com">oldsite.com (insecure)</a>
  <a href="https://docs.example.com">docs.example.com (secure)</a>
  <a href="/about">About Us (internal)</a>
</div>`,
      hints: [
        "`[href^=\"https\"]` matches links whose `href` value starts with `\"https\"`.",
        "Chain `::before` to the attribute selector: `[href^=\"https\"]::before`.",
        "Set `content: '🔒 '` to prepend the lock icon before the link text.",
      ],
    },
    {
      id: 3,
      title: "Attribute Selector — Contains",
      difficulty: "Easy",
      instructions:
        "Use `[class*=\"error\"]` to apply a red left border (`border-left: 4px solid #ef4444`) and light red background (`#fef2f2`) to any element whose class contains the word `error`.",
      initialCode: `<style>
  .alert {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    background: #f8fafc;
  }
  /* Target elements with "error" anywhere in their class */
</style>
<div class="p-4 bg-slate-100 rounded-xl max-w-sm space-y-2">
  <div class="alert">ℹ️ Info: Your session will expire soon.</div>
  <div class="alert error-message">❌ Error: Invalid email address.</div>
  <div class="alert form-error">❌ Error: Password too short.</div>
  <div class="alert">✅ Success: Profile saved.</div>
</div>`,
      solutionCode: `<style>
  .alert {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    background: #f8fafc;
  }
  [class*="error"] {
    border-left: 4px solid #ef4444;
    background: #fef2f2;
  }
</style>
<div class="p-4 bg-slate-100 rounded-xl max-w-sm space-y-2">
  <div class="alert">ℹ️ Info: Your session will expire soon.</div>
  <div class="alert error-message">❌ Error: Invalid email address.</div>
  <div class="alert form-error">❌ Error: Password too short.</div>
  <div class="alert">✅ Success: Profile saved.</div>
</div>`,
      hints: [
        "`[class*=\"error\"]` matches elements whose `class` attribute contains the substring `\"error\"`.",
        "This matches `error-message`, `form-error`, and any class containing that string.",
        "Add `border-left: 4px solid #ef4444` and `background: #fef2f2` to the rule.",
      ],
    },
    {
      id: 4,
      title: "General Sibling Combinator (~)",
      difficulty: "Medium",
      instructions:
        "Use the general sibling combinator `~` to show the `.hint` paragraph when an input is `:focus`. Hide the hint by default with `display: none` and show it with `display: block` when `input:focus ~ .hint`.",
      initialCode: `<style>
  .field { position: relative; }
  input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1.5px solid #cbd5e1;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    outline: none;
  }
  input:focus { border-color: #6366f1; }
  .hint {
    display: none; /* show when preceding input is focused */
    font-size: 0.75rem;
    color: #6366f1;
    margin-top: 0.3rem;
  }
</style>
<div class="flex items-center justify-center h-44 bg-slate-100 rounded-xl px-8">
  <div class="field w-full">
    <label class="block text-sm font-semibold text-slate-700 mb-1">Password</label>
    <input type="password" placeholder="Enter password" />
    <p class="hint">💡 Must be at least 8 characters with one uppercase letter.</p>
  </div>
</div>`,
      solutionCode: `<style>
  .field { position: relative; }
  input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1.5px solid #cbd5e1;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    outline: none;
  }
  input:focus { border-color: #6366f1; }
  .hint {
    display: none;
    font-size: 0.75rem;
    color: #6366f1;
    margin-top: 0.3rem;
  }
  input:focus ~ .hint {
    display: block;
  }
</style>
<div class="flex items-center justify-center h-44 bg-slate-100 rounded-xl px-8">
  <div class="field w-full">
    <label class="block text-sm font-semibold text-slate-700 mb-1">Password</label>
    <input type="password" placeholder="Enter password" />
    <p class="hint">💡 Must be at least 8 characters with one uppercase letter.</p>
  </div>
</div>`,
      hints: [
        "The `~` combinator selects all matching siblings that come AFTER the first element.",
        "`input:focus ~ .hint` matches `.hint` elements that are siblings after a focused input.",
        "The `.hint` must be at the same level (sibling) as the `input`, not nested inside it.",
      ],
    },
    {
      id: 5,
      title: "Child Combinator (>)",
      difficulty: "Medium",
      instructions:
        "Use the child combinator `>` to style only DIRECT children `.item` of `.container` with a border, without affecting the nested `.item` inside `.nested-group`.",
      initialCode: `<style>
  .container { padding: 1rem; background: white; border-radius: 0.75rem; max-width: 280px; }
  /* Only style direct .item children of .container */
  .item {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    color: #334155;
  }
  .nested-group { margin-top: 0.5rem; padding: 0.5rem; background: #f8fafc; border-radius: 0.5rem; }
</style>
<div class="flex items-center justify-center h-52 bg-slate-100 rounded-xl">
  <div class="container">
    <div class="item">Direct Item A</div>
    <div class="item">Direct Item B</div>
    <div class="nested-group">
      <div class="item">Nested Item (no border)</div>
    </div>
    <div class="item">Direct Item C</div>
  </div>
</div>`,
      solutionCode: `<style>
  .container { padding: 1rem; background: white; border-radius: 0.75rem; max-width: 280px; }
  .container > .item {
    border: 1.5px solid #e2e8f0;
    border-radius: 0.375rem;
    margin-bottom: 0.4rem;
  }
  .item {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    color: #334155;
  }
  .nested-group { margin-top: 0.5rem; padding: 0.5rem; background: #f8fafc; border-radius: 0.5rem; }
</style>
<div class="flex items-center justify-center h-52 bg-slate-100 rounded-xl">
  <div class="container">
    <div class="item">Direct Item A</div>
    <div class="item">Direct Item B</div>
    <div class="nested-group">
      <div class="item">Nested Item (no border)</div>
    </div>
    <div class="item">Direct Item C</div>
  </div>
</div>`,
      hints: [
        "`>` is the child combinator — it only matches direct children, not deeper descendants.",
        "`.container > .item` targets `.item` elements that are immediate children of `.container`.",
        "The `.item` inside `.nested-group` is NOT a direct child of `.container`, so it won't match.",
      ],
    },
    {
      id: 6,
      title: "Style Parent with :has()",
      difficulty: "Medium",
      instructions:
        "Use `:has()` to highlight a `.card` that contains an `img` with a red border and light pink background. Cards without an image should remain unstyled.",
      initialCode: `<style>
  .card {
    background: white;
    border: 1.5px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 0.75rem;
    width: 140px;
  }
  /* Use :has(img) to style cards that contain an image */
  .card img { width: 100%; height: 64px; object-fit: cover; border-radius: 0.5rem; }
  .card p { font-size: 0.8rem; font-weight: 600; color: #334155; margin-top: 0.5rem; }
</style>
<div class="flex items-center justify-center gap-4 h-52 bg-slate-100 rounded-xl">
  <div class="card">
    <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=120&fit=crop" alt="Code" />
    <p>Has Image</p>
  </div>
  <div class="card">
    <p>Text Only</p>
    <p style="font-size:0.7rem;color:#94a3b8;margin-top:0.25rem">No image here</p>
  </div>
</div>`,
      solutionCode: `<style>
  .card {
    background: white;
    border: 1.5px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 0.75rem;
    width: 140px;
  }
  .card:has(img) {
    border-color: #ef4444;
    background: #fff5f5;
  }
  .card img { width: 100%; height: 64px; object-fit: cover; border-radius: 0.5rem; }
  .card p { font-size: 0.8rem; font-weight: 600; color: #334155; margin-top: 0.5rem; }
</style>
<div class="flex items-center justify-center gap-4 h-52 bg-slate-100 rounded-xl">
  <div class="card">
    <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=120&fit=crop" alt="Code" />
    <p>Has Image</p>
  </div>
  <div class="card">
    <p>Text Only</p>
    <p style="font-size:0.7rem;color:#94a3b8;margin-top:0.25rem">No image here</p>
  </div>
</div>`,
      hints: [
        "`:has()` is a relational pseudo-class — it selects an element based on what it contains.",
        "`.card:has(img)` selects `.card` elements that have at least one `<img>` descendant.",
        "Apply `border-color: #ef4444` and `background: #fff5f5` to the matched cards.",
      ],
    },
    {
      id: 7,
      title: "Zero-Specificity with :where()",
      difficulty: "Hard",
      instructions:
        "Use `:where()` to set a default link color for `.content a` links with zero specificity, so a later simple `a { color: #10b981; }` rule can easily override it without needing `!important`.",
      initialCode: `<style>
  /* Use :where() so this default can be overridden by a lower specificity rule */
  .content a {
    color: #6366f1; /* Change this selector to use :where() */
    text-decoration: underline;
    font-size: 0.875rem;
  }
  /* This rule should be able to override the above — but currently loses due to specificity */
  a {
    color: #10b981;
  }
</style>
<div class="content p-5 bg-slate-100 rounded-xl max-w-xs space-y-2">
  <p>Visit <a href="#">our docs</a> for more information.</p>
  <p>Read <a href="#">the tutorial</a> to get started.</p>
  <p class="text-xs text-slate-400 mt-2">Links should be green (overridden by simple 'a' rule)</p>
</div>`,
      solutionCode: `<style>
  :where(.content) a {
    color: #6366f1;
    text-decoration: underline;
    font-size: 0.875rem;
  }
  a {
    color: #10b981;
  }
</style>
<div class="content p-5 bg-slate-100 rounded-xl max-w-xs space-y-2">
  <p>Visit <a href="#">our docs</a> for more information.</p>
  <p>Read <a href="#">the tutorial</a> to get started.</p>
  <p class="text-xs text-slate-400 mt-2">Links should be green (overridden by simple 'a' rule)</p>
</div>`,
      hints: [
        "`:where()` always has zero specificity (0,0,0), unlike `:is()` which inherits specificity.",
        "`:where(.content) a` has the same specificity as just `a` (0,0,1), so a later `a {}` rule wins.",
        "Wrap `.content` inside `:where()`: `​:where(.content) a { ... }`",
      ],
    },
    {
      id: 8,
      title: "Attribute Selector — Ends With",
      difficulty: "Hard",
      instructions:
        "Use `[href$=\".pdf\"]` to add a 📄 icon after PDF download links using `::after { content: ' 📄'; }` so users know the link opens a PDF file.",
      initialCode: `<style>
  a { color: #6366f1; font-size: 0.875rem; display: block; margin-bottom: 0.4rem; }
  /* Style PDF links using $= attribute selector */
</style>
<div class="p-5 bg-slate-100 rounded-xl max-w-xs">
  <p class="text-sm font-semibold text-slate-700 mb-3">Downloads</p>
  <a href="/report-2024.pdf">Annual Report 2024</a>
  <a href="/guide.html">Getting Started Guide</a>
  <a href="/invoice-march.pdf">March Invoice</a>
  <a href="/terms.txt">Terms of Service</a>
</div>`,
      solutionCode: `<style>
  a { color: #6366f1; font-size: 0.875rem; display: block; margin-bottom: 0.4rem; }
  [href$=".pdf"]::after {
    content: ' 📄';
  }
</style>
<div class="p-5 bg-slate-100 rounded-xl max-w-xs">
  <p class="text-sm font-semibold text-slate-700 mb-3">Downloads</p>
  <a href="/report-2024.pdf">Annual Report 2024</a>
  <a href="/guide.html">Getting Started Guide</a>
  <a href="/invoice-march.pdf">March Invoice</a>
  <a href="/terms.txt">Terms of Service</a>
</div>`,
      hints: [
        "`[href$=\".pdf\"]` matches links whose `href` attribute ends with `.pdf`.",
        "Chain `::after` to add generated content after the matched elements.",
        "Set `content: ' 📄'` (with a leading space) to add the icon.",
      ],
    },
    {
      id: 9,
      title: "nth-child with Formula",
      difficulty: "Hard",
      instructions:
        "Use `li:nth-child(3n)` to highlight every 3rd list item with a `#eff6ff` background. Use `li:nth-child(3n+1)` to give every 1st-in-a-group a bold `font-weight`.",
      initialCode: `<style>
  ul { list-style: none; padding: 0; }
  li {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    color: #334155;
    border-bottom: 1px solid #f1f5f9;
  }
  /* Add nth-child(3n) and nth-child(3n+1) rules */
</style>
<div class="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-xs">
  <ul>
    <li>Item 1</li><li>Item 2</li><li>Item 3</li>
    <li>Item 4</li><li>Item 5</li><li>Item 6</li>
    <li>Item 7</li><li>Item 8</li><li>Item 9</li>
  </ul>
</div>`,
      solutionCode: `<style>
  ul { list-style: none; padding: 0; }
  li {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    color: #334155;
    border-bottom: 1px solid #f1f5f9;
  }
  li:nth-child(3n) {
    background: #eff6ff;
  }
  li:nth-child(3n+1) {
    font-weight: 700;
  }
</style>
<div class="bg-white rounded-xl border border-slate-200 overflow-hidden max-w-xs">
  <ul>
    <li>Item 1</li><li>Item 2</li><li>Item 3</li>
    <li>Item 4</li><li>Item 5</li><li>Item 6</li>
    <li>Item 7</li><li>Item 8</li><li>Item 9</li>
  </ul>
</div>`,
      hints: [
        "`nth-child(3n)` matches every element where position is a multiple of 3 (3, 6, 9…).",
        "`nth-child(3n+1)` matches positions 1, 4, 7… (every 3rd starting from 1).",
        "The formula is `An+B` where `A` is the cycle size and `B` is the offset.",
      ],
    },
    {
      id: 10,
      title: "Complex Multi-Condition Selector",
      difficulty: "Hard",
      instructions:
        "Write a single selector that targets `<input>` elements that are: inside `.form-group`, of type `text` or `email`, AND are `:invalid`. Apply a red border (`#ef4444`) and light pink background to them.",
      initialCode: `<style>
  .form-group input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1.5px solid #cbd5e1;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    outline: none;
  }
  /* Add the complex selector targeting invalid text/email inputs */
</style>
<div class="p-5 bg-slate-100 rounded-xl max-w-xs space-y-3">
  <div class="form-group">
    <label class="block text-xs font-semibold text-slate-600 mb-1">Email (invalid)</label>
    <input type="email" value="not-an-email" required />
  </div>
  <div class="form-group">
    <label class="block text-xs font-semibold text-slate-600 mb-1">Name (valid)</label>
    <input type="text" value="John Doe" required />
  </div>
  <div class="form-group">
    <label class="block text-xs font-semibold text-slate-600 mb-1">URL (invalid)</label>
    <input type="url" value="not-a-url" required />
  </div>
</div>`,
      solutionCode: `<style>
  .form-group input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1.5px solid #cbd5e1;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    outline: none;
  }
  .form-group :is([type="text"], [type="email"]):invalid {
    border-color: #ef4444;
    background: #fef2f2;
  }
</style>
<div class="p-5 bg-slate-100 rounded-xl max-w-xs space-y-3">
  <div class="form-group">
    <label class="block text-xs font-semibold text-slate-600 mb-1">Email (invalid)</label>
    <input type="email" value="not-an-email" required />
  </div>
  <div class="form-group">
    <label class="block text-xs font-semibold text-slate-600 mb-1">Name (valid)</label>
    <input type="text" value="John Doe" required />
  </div>
  <div class="form-group">
    <label class="block text-xs font-semibold text-slate-600 mb-1">URL (invalid)</label>
    <input type="url" value="not-a-url" required />
  </div>
</div>`,
      hints: [
        "Use `:is([type=\"text\"], [type=\"email\"])` to target both types in one selector.",
        "Chain `:invalid` after to narrow to only invalid inputs.",
        "Scope it inside `.form-group` to avoid affecting inputs elsewhere.",
      ],
    },
  ],
};
