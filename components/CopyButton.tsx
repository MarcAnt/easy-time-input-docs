// components/CopyButton.tsx
"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

export default function CopyButton({ code }: { code: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="absolute right-3 top-3 p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white"
      aria-label="Copy code"
      type="button"
      title="Copy code"
    >
      {isCopied ? <Check size={16} /> : <Clipboard size={16} />}
    </button>
  );
}
