export default function ExpectedPreview({ code }) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"><\/script>
      </head>
      <body>
        ${code}
      </body>
    </html>
  `;

  return (
    <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200">
      {/* Preview Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="text-slate-600 text-sm font-medium">Expected Preview</span>
        </div>

      </div>

      {/* Preview Body */}
      <div className="flex-1 overflow-auto bg-white">
        <iframe
          key={code}
          srcDoc={htmlContent}
          title="ExpectedPreview"
          className="w-full h-full preview-frame"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
}