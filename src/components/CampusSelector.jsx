import React, { useEffect, useState } from 'react';

const CAMPUS_URLS = {
  gulu: 'https://gulu.gombejuniorschool.ac.ug/',
  kikajjo: 'https://kikajjo.gombejuniorschool.ac.ug/',
};

/** Only prompt visitors arriving on the shared school domain
 *  (add ?campus-selector to any URL to preview the popup) */
const shouldShow = () => {
  if (typeof window === 'undefined') return false;
  if (window.location.search.includes('campus-selector')) return true;
  return window.location.hostname.replace(/^www\./, '') === 'gombejuniorschool.ac.ug';
};

const CampusSelector = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (shouldShow()) {
      setOpen(true);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!open) return null;

  const choose = (campus) => {
    const target = new URL(CAMPUS_URLS[campus]);
    if (window.location.hostname === target.hostname) {
      // Already on this campus's site (e.g. previewing) — just close
      document.body.style.overflow = '';
      setOpen(false);
    } else {
      window.location.href = target.href;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/50 backdrop-blur-md p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="campus-selector-title"
    >
      <div className="w-full max-w-md bg-white shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">
        <div className="bg-[#800E13] px-6 py-6 flex flex-col items-center gap-3">
          <img
            src="/Gombe Junior School logo.png"
            alt="Gombe Junior School"
            className="h-20 w-20 object-contain"
          />
          <h2 id="campus-selector-title" className="text-white text-lg font-bold text-center leading-snug">
            Gombe Junior School
          </h2>
          <p className="text-[#FFD700] text-sm font-medium">Please take your pick and checkout the Campus of your choice</p>
        </div>

        <div className="p-6 flex flex-col gap-3">
          <button
            onClick={() => choose('gulu')}
            className="w-full border-2 border-[#800E13] px-5 py-4 text-left font-semibold text-[#800E13] hover:bg-[#800E13] hover:text-white active:scale-[0.98] transition-all duration-200"
          >
            Gombe Junior School
            <span className="block text-sm font-normal opacity-80">Gulu Campus</span>
          </button>
          <button
            onClick={() => choose('kikajjo')}
            className="w-full border-2 border-[#800E13] px-5 py-4 text-left font-semibold text-[#800E13] hover:bg-[#800E13] hover:text-white active:scale-[0.98] transition-all duration-200"
          >
            Gombe Junior School
            <span className="block text-sm font-normal opacity-80">Kikajjo Campus</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampusSelector;
