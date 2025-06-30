// comments.tsx
"use client";
import { useEffect } from 'react';

export default function Comments() {
  useEffect(() => {
    // 清理已存在的 giscus 脚本和内容
    const existingScript = document.querySelector('script[src="https://giscus.app/client.js"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    const giscusContainer = document.getElementById('giscus');
    if (giscusContainer) {
      giscusContainer.innerHTML = '';
    }

    // 创建新的脚本
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'JacckNew/jaccknew.me');
    script.setAttribute('data-repo-id', 'R_kgDOOnCUog');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOOnCUos4Cr28z');
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

    // 添加错误处理
    script.onerror = (error) => {
      console.error('Giscus script failed to load:', error);
    };

    script.onload = () => {
      console.log('Giscus script loaded successfully');
    };

    if (giscusContainer) {
      giscusContainer.appendChild(script);
    }

    // 清理函数
    return () => {
      const scriptToRemove = document.querySelector('script[src="https://giscus.app/client.js"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);
  
  return (
    <div className="mt-8">
      <div id="giscus" />
    </div>
  );
}