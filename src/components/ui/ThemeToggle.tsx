"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const ThemeToggleContent = dynamic(
  () => import("./ThemeToggleContent").then((mod) => mod.ThemeToggleContent),
  {
    ssr: false,
    loading: () => (
      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 w-9 h-9" />
    ),
  }
);

export function ThemeToggle() {
  return (
    <Suspense
      fallback={
        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 w-9 h-9" />
      }
    >
      <ThemeToggleContent />
    </Suspense>
  );
}
