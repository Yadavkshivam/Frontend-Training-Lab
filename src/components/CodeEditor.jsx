import { useRef, useEffect } from "react";

export default function CodeEditor({ code, onChange }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    // Auto-resize textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [code]);

  const handleKeyDown = (e) => {
    // Support Tab key for indentation
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newValue = code.substring(0, start) + "  " + code.substring(end);
      onChange(newValue);
      // Restore cursor position after React re-render
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div className="h-full flex flex-col bg-slate-900 rounded-lg overflow-hidden">
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <span className="text-slate-400 text-sm font-medium ml-2">index.html</span>
        </div>
        <span className="text-slate-500 text-xs">HTML / Inline CSS</span>
      </div>

      {/* Editor Body */}
      <div className="flex-1 overflow-auto">
        <div className="flex min-h-full">
          {/* Line Numbers */}
          <div className="py-4 px-3 text-right select-none bg-slate-800/50 border-r border-slate-700/50">
            {code.split("\n").map((_, i) => (
              <div key={i} className="text-slate-600 text-xs leading-6 font-mono">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            className="code-editor flex-1 bg-transparent text-slate-200 font-mono text-sm leading-6
                       p-4 resize-none outline-none placeholder-slate-600 min-h-full
                       caret-blue-400"
            placeholder="Write your HTML/CSS here..."
          />
        </div>
      </div>
    </div>
  );
}
