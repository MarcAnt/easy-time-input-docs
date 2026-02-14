// hooks/use-hash.ts
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export const useHash = () => {
  const [hash, setHash] = useState("");
  const params = useParams();

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [params]);

  return hash;
};
