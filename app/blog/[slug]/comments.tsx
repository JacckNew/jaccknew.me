// comments.tsx
"use client";
import { useEffect } from 'react';

export default function Comments() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'JacckNew/jaccknew.me');
    script.setAttribute('data-repo-id', 'R_kgDOOnCUog');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOOnCUos4CjVhM');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const giscusContainer = document.getElementById('giscus');
    if (giscusContainer) giscusContainer.appendChild(script);

    // 清理函数，防止重复加载
    return () => {
      const existingScript = document.querySelector('script[src="https://giscus.app/client.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
  
  return <div id="giscus" className="mt-8" />;
}