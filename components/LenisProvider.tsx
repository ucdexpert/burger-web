"use client";

import { useLenis } from "@/hooks";

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  useLenis();
  return <>{children}</>;
};
