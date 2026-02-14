// import { codeToHtml } from "shiki";
// import CopyButton from "./CopyButton";

// interface Props {
//   code: string;
//   lang: string;
//   theme?: string;
// }

// export default async function CodeBlock({
//   code,
//   lang,
//   theme = "github-dark",
// }: Props) {
//   const html = await codeToHtml(code, {
//     lang,
//     theme,
//   });

//   return (
//     <div className="relative group rounded-lg overflow-hidden border border-white/10">
//       <CopyButton code={code} />
//       <div
//         className="shiki-container [&>pre]:bg-transparent [&>pre]:p-4 [&>pre]:overflow-x-auto"
//         dangerouslySetInnerHTML={{ __html: html }}
//       />
//     </div>
//   );
// }

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
