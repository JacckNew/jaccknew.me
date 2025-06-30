"use client";

import { useEffect } from "react";

export default function GiscusGuestbook() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "JacckNew/jaccknew.me");
    script.setAttribute("data-repo-id", "R_kgDOOnCUog");
    script.setAttribute("data-category", "Guestbook");
    script.setAttribute("data-category-id", "DIC_kwDOOnCUos4Cr28z");
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", "guestbook");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;
    
    const container = document.getElementById("giscus-guestbook");
    if (container) {
      // 清理已存在的脚本
      container.innerHTML = "";
      container.appendChild(script);
    }

    return () => {
      const existingScript = document.querySelector('script[src="https://giscus.app/client.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return <div id="giscus-guestbook" className="mt-8" />;
}
