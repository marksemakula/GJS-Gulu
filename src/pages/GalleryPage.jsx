import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LuArrowLeft,
  LuX,
  LuChevronLeft,
  LuChevronRight,
  LuCamera,
  LuExpand,
  LuImages,
} from 'react-icons/lu';

const galleryImages = [
  { src: '/GJS%20Pics/GOMBE%20HIGH%20SCHOOL.jpg',          caption: 'Gombe High School'         },
  { src: '/GJS%20Pics/GOMBE%20JUNIOR%20SCHOOL%20BOARDING.JPG', caption: 'GJS Boarding Campus'    },
  { src: '/GJS%20Pics/GOMBE%20JUNIOR%20SCHOOL%20DAY.jpg',  caption: 'GJS Day Life'              },
  { src: '/GJS%20Pics/IMG_0069.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_1378.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_1678.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_1685.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_1690.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_1697.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_1707.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_1708.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_1737.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_1747.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_1764.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_1768.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_2804.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_5387.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_7534.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_7541.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_7542.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_7544.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_8873.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_8893.JPG',  caption: 'School Moments' },
  { src: '/GJS%20Pics/IMG_8912.JPG',  caption: 'School Moments' },
];

const BURGUNDY = '#800E13';
const YELLOW   = '#FFD700';
const CREAM    = '#FFF9F5';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [imgDirection, setImgDirection]   = useState(0); // -1 left, 1 right

  const isOpen = lightboxIndex !== null;

  const openLightbox = (index) => {
    setImgDirection(0);
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setImgDirection(-1);
    setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const next = useCallback(() => {
    setImgDirection(1);
    setLightboxIndex(i => (i + 1) % galleryImages.length);
  }, []);

  /* Keyboard navigation */
  useEffect(() => {
    if (!isOpen) return;
    const handle = (e) => {
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [isOpen, closeLightbox, prev, next]);

  /* Lock body scroll when lightbox is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM }}>

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-semibold transition-all group"
              style={{ color: BURGUNDY }}
            >
              <LuArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1 duration-200" />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>

            <Link to="/" className="flex items-center gap-2 select-none">
              <img
                src="/Gombe Junior School logo.png"
                alt="GJS Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold" style={{ color: BURGUNDY }}>
                GJS <span style={{ color: YELLOW }}>Gulu</span>
              </span>
            </Link>

            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: BURGUNDY }}>
              <LuImages className="w-5 h-5" style={{ color: YELLOW }} />
              <span className="hidden sm:inline">Gallery</span>
            </div>

          </div>
        </div>
      </header>

      {/* ── Hero banner ────────────────────────────────────── */}
      <section
        className="relative py-20 overflow-hidden text-white"
        style={{ backgroundColor: BURGUNDY }}
      >
        {/* Faint background photo */}
        <div className="absolute inset-0">
          <img
            src="/GJS%20Pics/IMG_1707.JPG"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Decorative blobs */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: YELLOW }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-10"
          style={{ backgroundColor: YELLOW }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-5 text-sm font-semibold tracking-wide uppercase"
              style={{ backgroundColor: `${YELLOW}25`, color: YELLOW }}
            >
              <LuCamera className="w-4 h-4" />
              {galleryImages.length} Photos
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Photo Gallery
            </h1>
            <p className="text-base md:text-lg opacity-75 max-w-xl mx-auto" style={{ color: YELLOW }}>
              Captured moments &amp; cherished memories at Gombe Junior School, Gulu Campus
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Breadcrumb ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#800E13] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-400">Student's Life</span>
          <span>/</span>
          <span className="font-medium" style={{ color: BURGUNDY }}>Images</span>
        </nav>
      </div>

      {/* ── Masonry Gallery ────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden cursor-pointer shadow-md"
              variants={itemVariants}
              whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
              onClick={() => openLightbox(index)}
            >
              {/* Photo */}
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-auto block bg-gray-100"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="flex items-end justify-between">
                  <span className="text-white text-xs font-medium leading-snug drop-shadow">
                    {img.caption}
                  </span>
                  <div
                    className="flex-shrink-0 ml-2 p-1.5 rounded-full"
                    style={{ backgroundColor: `${YELLOW}cc` }}
                  >
                    <LuExpand className="w-3.5 h-3.5 text-black" />
                  </div>
                </div>
              </div>

              {/* Yellow ring on hover */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none ring-0 group-hover:ring-2 transition-all duration-200"
                style={{ '--tw-ring-color': YELLOW }}
              />
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* ── Lightbox ───────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full text-white bg-white/10 hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <LuX className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-white/70 text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full select-none">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-3 md:left-6 z-10 p-3 rounded-full text-white bg-white/10 hover:bg-white/25 transition-colors"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous photo"
            >
              <LuChevronLeft className="w-6 h-6" />
            </button>

            {/* Main image */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={lightboxIndex}
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].caption}
                className="max-h-[80vh] max-w-[80vw] object-contain rounded-xl shadow-2xl select-none"
                initial={{ opacity: 0, x: imgDirection * 40, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -imgDirection * 40, scale: 0.97 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </AnimatePresence>

            {/* Next */}
            <button
              className="absolute right-3 md:right-6 z-10 p-3 rounded-full text-white bg-white/10 hover:bg-white/25 transition-colors"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next photo"
            >
              <LuChevronRight className="w-6 h-6" />
            </button>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/80 text-sm font-medium bg-black/50 px-5 py-2 rounded-full whitespace-nowrap">
              {galleryImages[lightboxIndex].caption}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
