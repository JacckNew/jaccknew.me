// Guestbook page component

"use client";

import { useState, useEffect } from "react";

export default function GuestbookPage() {
  const [entries, setEntries] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "JacckNew/portfolio-starter-kit");
    script.setAttribute("data-repo-id", "R_kgDOOnCUog");
    script.setAttribute("data-category", "Guestbook");
    script.setAttribute("data-category-id", "DIC_kwDOOnCUos4Cr28z");
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", "guestbook");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
    const container = document.getElementById("giscus");
    if (container) container.appendChild(script);
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Guestbook</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mb-6">
        Leave a message! Whether you're a friend, classmate, or curious visitor — I'd love to hear from you.
      </p>

      <div id="giscus" className="mt-12" />
    </section>
  );
}
