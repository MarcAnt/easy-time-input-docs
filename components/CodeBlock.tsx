"use client";

import { JSX, useLayoutEffect, useState } from "react";
import { highlight } from "@/helpers/shared";
import CopyButton from "./CopyButton";

export function CodeBlock({ code }: { code: string }) {
  const [nodes, setNodes] = useState<JSX.Element | null>(null);

  useLayoutEffect(() => {
    void highlight(code, "ts").then(setNodes);
  }, [code]);

  return (
    <div className="relative group rounded-lg overflow-hidden border border-white/10">
      <CopyButton code={code} />
      {nodes ?? <p>Loading...</p>}
    </div>
  );
}
