import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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

/* Sub-categories mirror the School Facilities listing on the About Us page.
   Tag each image with a `category` slug to have it appear under that filter. */
const galleryCategories = [
  { slug: 'all',        label: 'All Photos'         },
  { slug: 'classrooms', label: 'Classrooms'         },
  { slug: 'ict-lab',    label: 'ICT-Enabled Spaces' },
  { slug: 'offices',    label: 'Offices'            },
  { slug: 'campus',     label: 'School Compound'    },
  { slug: 'aerobics',   label: 'Sports & Aerobics'  },
  { slug: 'clubs',      label: 'Club Activities'    },
  { slug: 'elections',  label: 'Elections'          },
  { slug: 'religious',  label: 'Religious Hour'     },
];

const galleryImages = [
  // Academics - Classes
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Academics/Classes/20260629_115155.jpg', caption: 'Classroom Session' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Academics/Classes/20260629_115602.jpg', caption: 'Learning in Action' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Academics/Classes/20260629_115727.jpg', caption: 'Academic Excellence' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Academics/Classes/20260629_120102.jpg', caption: 'Students in Class' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Academics/Classes/20260629_121413.jpg', caption: 'Interactive Learning' },
  // School Activities - Aerobics
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_162350.jpg', caption: 'Aerobics Session' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_162423.jpg', caption: 'Fitness Activities' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_162704.jpg', caption: 'Students Exercising' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_163346.jpg', caption: 'Physical Education' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_163408.jpg', caption: 'Active Students' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_163707.jpg', caption: 'Aerobics Fun' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_164356.jpg', caption: 'Sports & Fitness' },
  // School Activities - Club Activities
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260529_163027.jpg', caption: 'Club Activities' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260529_163049.jpg', caption: 'Student Clubs' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260529_163402.jpg', caption: 'Extracurricular Fun' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260601_163812.jpg', caption: 'Club Engagement' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260601_163833.jpg', caption: 'Student Leadership' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260601_164028.jpg', caption: 'Community Activities' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260601_164240.jpg', caption: 'Team Building' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260615_162645.jpg', caption: 'Creative Sessions' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260615_162946.jpg', caption: 'Skills Development' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260615_163226.jpg', caption: 'Talent Showcase' },
  // School Activities - Elections
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260618_144040.jpg', caption: 'School Elections' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260618_145717.jpg', caption: 'Student Democracy' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260618_150458.jpg', caption: 'Election Day' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260618_161806.jpg', caption: 'Civic Education' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_135314.jpg', caption: 'Leadership Elections' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_135650.jpg', caption: 'Campaign Speeches' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_140049.jpg', caption: 'Voting Process' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_140106.jpg', caption: 'Election Results' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_140346.jpg', caption: 'Student Prefects' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_142549.jpg', caption: 'Leadership Ceremony' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_144727.jpg', caption: 'School Governance' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_150604.jpg', caption: 'Inauguration' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_154626.jpg', caption: 'Celebrations' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_154723.jpg', caption: 'Victory Moments' },
  // Student Life - Religious Hour
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Student%20life/RELIGIOUS%20HOUR/20260602_162541.jpg', caption: 'Religious Hour' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Student%20life/RELIGIOUS%20HOUR/20260602_162703.jpg', caption: 'Spiritual Growth' },
  { src: '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Student%20life/RELIGIOUS%20HOUR/20260602_162811.jpg', caption: 'Faith & Values' },
];

/* Derive the category slug from the image's folder path */
const categoryFromSrc = (src) => {
  if (src.includes('/Academics/Classes/'))    return 'classrooms';
  if (src.includes('/Aerobics/'))             return 'aerobics';
  if (src.includes('/Club%20Activities/'))    return 'clubs';
  if (src.includes('/Elections/'))            return 'elections';
  if (src.includes('/RELIGIOUS%20HOUR/'))     return 'religious';
  return 'campus';
};

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
  const [searchParams, setSearchParams]   = useSearchParams();

  const categoryParam  = searchParams.get('category') || 'all';
  const activeCategory = galleryCategories.some(c => c.slug === categoryParam) ? categoryParam : 'all';
  const activeLabel    = galleryCategories.find(c => c.slug === activeCategory)?.label || 'All Photos';

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => categoryFromSrc(img.src) === activeCategory);

  const selectCategory = (slug) => {
    setLightboxIndex(null);
    setSearchParams(slug === 'all' ? {} : { category: slug });
  };

  const isOpen = lightboxIndex !== null && filteredImages.length > 0;

  const openLightbox = (index) => {
    setImgDirection(0);
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setImgDirection(-1);
    setLightboxIndex(i => (i - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  const next = useCallback(() => {
    setImgDirection(1);
    setLightboxIndex(i => (i + 1) % filteredImages.length);
  }, [filteredImages.length]);

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
            src="/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_144727.jpg"
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
          <span className="font-medium" style={{ color: BURGUNDY }}>{activeLabel}</span>
        </nav>
      </div>

      {/* ── Category filters (mirrors School Facilities sub-categories) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex flex-wrap gap-2">
          {galleryCategories.map((cat) => {
            const isActive = cat.slug === activeCategory;
            return (
              <button
                key={cat.slug}
                onClick={() => selectCategory(cat.slug)}
                className="px-4 py-1.5 text-xs font-semibold rounded-full border transition-colors"
                style={isActive
                  ? { backgroundColor: BURGUNDY, borderColor: BURGUNDY, color: '#fff' }
                  : { backgroundColor: '#fff', borderColor: '#e5e7eb', color: '#4b5563' }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Masonry Gallery ────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <LuCamera className="w-10 h-10 mx-auto mb-4" style={{ color: BURGUNDY }} />
            <h2 className="text-lg font-bold text-gray-800 mb-1">Photos of our {activeLabel} are on the way</h2>
            <p className="text-sm text-gray-500 mb-6">We are curating images for this facility. Please check back shortly.</p>
            <button
              onClick={() => selectCategory('all')}
              className="px-6 py-2.5 text-sm font-semibold text-white rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: BURGUNDY }}
            >
              View All Photos
            </button>
          </div>
        )}

        <motion.div
          key={activeCategory}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredImages.map((img, index) => (
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
              {lightboxIndex + 1} / {filteredImages.length}
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
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].caption}
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
              {filteredImages[lightboxIndex].caption}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
