"use client";

import { useHash } from "@/hooks/use-hash";
import CodeWrapper from "./CodeWrapper";
import PropsWrapper from "./PropsWrapper";
import DocsWrapper from "./DocsWrapper";
import Changelog from "./Changelog";

const Wrapper = () => {
  const hash = useHash();
  const containsProp = hash.includes("example-") || hash === "";

  if (hash === "#docs") {
    return <DocsWrapper />;
  }

  if (hash === "#changelog") {
    return <Changelog />;
  }

  return <>{containsProp ? <CodeWrapper /> : <PropsWrapper />}</>;
};

export default Wrapper;
