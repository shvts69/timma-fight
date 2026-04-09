"use client";

import { useLang } from "./LangContext";
import type { Lang } from "../translations";

const langs: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "uk", label: "UA" },
  { code: "az", label: "AZ" },
];

export default function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex gap-1">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-2 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${
            lang === l.code
              ? "text-red-500 bg-red-950/50"
              : "text-gray-500 hover:text-white"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
