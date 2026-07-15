'use client';

import React from 'react';

export function ClientButtons({ appLink }: { appLink: string }) {
  const openApp = () => {
    const start = Date.now();
    
    // Determine if iOS or Android for fallback URL
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    const isAndroid = /android/i.test(navigator.userAgent);
    
    let fallbackUrl = "https://homiholdings.com"; 
    if (isIOS) fallbackUrl = "https://apps.apple.com/app/idYOUR_APP_ID";
    if (isAndroid) fallbackUrl = "https://play.google.com/store/apps/details?id=com.jamshiiie.homiholdings";

    // Try opening app
    window.location.href = appLink;

    // Fallback logic
    setTimeout(() => {
      const end = Date.now();
      if (end - start < 2500) {
        if (window.confirm("Homi app is not installed. Do you want to download it now?")) {
          window.location.href = fallbackUrl;
        }
      }
    }, 2000);
  };

  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <button 
        onClick={openApp}
        className="flex-1 rounded-xl bg-[#FFC914] px-6 py-4 text-center text-lg font-bold text-gray-900 transition-colors hover:bg-yellow-500"
      >
        Open in App
      </button>
      <a 
        href="https://play.google.com/store/apps/details?id=com.jamshiiie.homiholdings"
        className="flex-1 rounded-xl border-2 border-gray-900 bg-white px-6 py-4 text-center text-lg font-bold text-gray-900 transition-colors hover:bg-gray-50"
      >
        Download App
      </a>
    </div>
  );
}
