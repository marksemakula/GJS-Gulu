import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuArrowLeft, LuAward, LuClock, LuMail } from 'react-icons/lu';

const brandColors = {
  primary: '#FFD700',
  secondary: '#800E13',
  cream: '#FFF9F5',
  gold: '#C9A227',
  ink: '#1F2937',
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const UNEBResults = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans" style={{ backgroundColor: brandColors.cream }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F0E4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E7D4B9] bg-white text-sm font-medium text-[#59311B] hover:bg-[#FFF3D8] transition"
          >
            <LuArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <img
              src="/Gombe Junior School logo.png"
              alt="GJS Logo"
              className="h-10 w-10 object-contain hidden sm:block"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B1742F] text-right">Academics</p>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#800E13]">UNEB Results</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative text-white py-16 overflow-hidden" style={{ backgroundColor: brandColors.secondary }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-yellow-400" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-yellow-400" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LuAward className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              UNEB Results Archives
            </h2>
            <p className="text-lg sm:text-xl font-medium mb-4 text-yellow-300">
              Primary Leaving Examinations (PLE)
            </p>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed">
              Gombe Junior School Gulu is steadily building its academic record. Results will be published here as our learners progress through to P.7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          {...fadeUp}
          className="bg-white rounded-none border border-gray-200 shadow-md p-10 text-center"
        >
          <div
            className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${brandColors.secondary}10` }}
          >
            <LuClock className="w-8 h-8" style={{ color: brandColors.secondary }} />
          </div>
          <h3 className="text-2xl font-bold mb-3" style={{ color: brandColors.ink }}>
            Results Coming Soon
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Gombe Junior School Gulu opened in 2025 and currently teaches learners from P.1 to P.6. Since our pioneer cohort has not yet sat the Primary Leaving Examinations (PLE), there are no UNEB results to publish just yet. Once our first candidates complete P.7, official results will be posted here.
          </p>
        </motion.div>

        {/* Note */}
        <div className="mt-8 bg-yellow-50/60 border border-yellow-200 rounded-none p-6">
          <p className="text-sm text-gray-700 leading-relaxed flex items-start gap-3">
            <LuMail className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: brandColors.gold }} />
            <span>
              <strong className="text-gray-800">Note:</strong> For any questions about our academic programme or progress, please contact the school at{' '}
              <a href="mailto:gombejuniorschool@gmail.com" className="font-semibold underline" style={{ color: brandColors.secondary }}>
                gombejuniorschool@gmail.com
              </a>.
            </span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default UNEBResults;
