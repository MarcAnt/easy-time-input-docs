"use client";

import { useHash } from "@/hooks/use-hash";
import CodeWrapper from "./CodeWrapper";
import PropsWrapper from "./PropsWrapper";
import DocsWrapper from "./DocsWrapper";

const Wrapper = () => {
  const hash = useHash();
  const containsProp = hash.includes("example-") || hash === "";

  if (hash === "#docs") {
    return <DocsWrapper />;
  }

  return <>{containsProp ? <CodeWrapper /> : <PropsWrapper />}</>;
};

export default Wrapper;
