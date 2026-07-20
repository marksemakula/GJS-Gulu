import React from 'react';
import { motion } from 'framer-motion';
import {
  LuCalculator,
  LuBookOpen,
  LuFlaskConical,
  LuGlobe,
  LuMonitor,
  LuMusic,
  LuLanguages,
  LuShield,
  LuPalette,
  LuActivity,
  LuChurch,
  LuSparkles,
} from 'react-icons/lu';
import GJSHeader from '../components/layout/GJSHeader';
import GJSFooter from '../components/layout/GJSFooter';

const brand = {
  burgundy: '#800E13',
  burgundyDark: '#5C0A0E',
  gold: '#C9A227',
  goldBright: '#FFD700',
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const coreSubjects = [
  {
    icon: LuCalculator,
    title: 'Mathematics',
    description:
      'Developing logical thinking, numeracy, and problem-solving skills through structured and practical learning.',
    color: '#FFF5E2',
    accent: brand.burgundy,
  },
  {
    icon: LuBookOpen,
    title: 'English',
    description:
      'Building strong communication, reading, writing, and speaking abilities for confident self-expression.',
    color: '#F0F7FF',
    accent: '#1D4ED8',
  },
  {
    icon: LuFlaskConical,
    title: 'Science',
    description:
      'Encouraging curiosity, innovation, and practical understanding of the world around us.',
    color: '#F0FDF4',
    accent: '#15803D',
  },
  {
    icon: LuGlobe,
    title: 'Social Studies (SST)',
    description:
      'Promoting knowledge of society, culture, geography, history, and responsible citizenship.',
    color: '#FFF5E2',
    accent: brand.gold,
  },
];

const enrichmentSubjects = [
  { icon: LuMonitor,   label: 'ICT' },
  { icon: LuMusic,     label: 'Music' },
  { icon: LuLanguages, label: 'Luo' },
  { icon: LuLanguages, label: 'Kiswahili' },
  { icon: LuLanguages, label: 'French' },
  { icon: LuShield,    label: 'Chess' },
  { icon: LuPalette,   label: 'Art & Craft' },
  { icon: LuActivity,  label: 'Physical Education' },
  { icon: LuChurch,    label: 'Religious Education' },
  { icon: LuSparkles,  label: 'And many more…' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const AcademicPrograms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <GJSHeader />

      {/* ── Hero ── */}
      <section
        className="relative py-24 overflow-hidden text-white"
        style={{ backgroundColor: brand.burgundy }}
      >
        {/* decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <svg viewBox="0 0 800 300" preserveAspectRatio="none" className="w-full h-full">
            <circle cx="650" cy="80"  r="180" fill="white" />
            <circle cx="80"  cy="260" r="140" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="inline-block text-xs font-bold tracking-[0.22em] uppercase mb-5 px-4 py-1.5 rounded-full"
              style={{ backgroundColor: 'rgba(201,162,39,0.22)', color: brand.goldBright }}
            >
              Gombe Junior School — Gulu Campus
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Academic Programs
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#F5D98B' }}>
              A well-balanced, learner-centered curriculum that equips pupils with the knowledge,
              skills, and values needed for academic excellence and lifelong success.
            </p>
          </motion.div>
        </div>

        {/* gold accent bottom line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(90deg, ${brand.gold}, ${brand.burgundy})` }}
        />
      </section>

      <main className="flex-grow">

        {/* ── Intro ── */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              {...fadeUp(0)}
              className="text-lg leading-8 text-gray-700 text-center"
            >
              At Gombe Junior School — Gulu, we offer a well-balanced, learner-centered curriculum that
              equips pupils with the knowledge, skills, and values needed for academic excellence
              and lifelong success. Our programs are designed to nurture{' '}
              <span className="font-semibold" style={{ color: brand.burgundy }}>
                critical thinking, creativity, communication,
              </span>{' '}
              and{' '}
              <span className="font-semibold" style={{ color: brand.burgundy }}>
                problem-solving
              </span>{' '}
              in a supportive learning environment.
            </motion.p>
          </div>
        </section>

        {/* ── Core Subjects ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp(0)} className="text-center mb-14">
              <p
                className="text-xs font-bold tracking-[0.22em] uppercase mb-3"
                style={{ color: brand.gold }}
              >
                Foundation of Learning
              </p>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: brand.burgundy }}>
                Our Four Core Academic Subjects
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
            >
              {coreSubjects.map((subject, i) => {
                const Icon = subject.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                    style={{ borderTop: `4px solid ${subject.accent}` }}
                  >
                    <div className="p-7 flex flex-col gap-4 flex-grow">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm"
                        style={{ backgroundColor: subject.color }}
                      >
                        <Icon className="w-7 h-7" style={{ color: subject.accent }} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{subject.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                        {subject.description}
                      </p>
                    </div>
                    <div
                      className="h-1 w-full"
                      style={{
                        background: `linear-gradient(90deg, ${subject.accent}33, ${subject.accent})`,
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Enrichment Subjects ── */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp(0)} className="text-center mb-14">
              <p
                className="text-xs font-bold tracking-[0.22em] uppercase mb-3"
                style={{ color: brand.gold }}
              >
                Holistic Education
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: brand.burgundy }}>
                Enrichment &amp; Co-Curricular Subjects
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                To provide a holistic education, we also offer a wide range of enrichment subjects
                and co-curricular learning opportunities.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
            >
              {enrichmentSubjects.map((subject, i) => {
                const Icon = subject.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.18 } }}
                    className="flex flex-col items-center gap-3 p-6 bg-[#FFF9F0] rounded-2xl border border-[#F0E4D8] hover:border-[#C9A227] hover:shadow-md transition-all duration-300 text-center group"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#800E13]"
                      style={{ backgroundColor: '#FFF1D8' }}
                    >
                      <Icon
                        className="w-6 h-6 transition-colors duration-300 group-hover:text-white"
                        style={{ color: brand.burgundy }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-[#800E13] transition-colors duration-300 leading-tight">
                      {subject.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section
          className="py-20 text-white relative overflow-hidden"
          style={{ backgroundColor: brand.burgundyDark }}
        >
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
            <svg viewBox="0 0 800 240" preserveAspectRatio="none" className="w-full h-full">
              <circle cx="700" cy="20"  r="200" fill="white" />
              <circle cx="50"  cy="230" r="160" fill="white" />
            </svg>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp(0)}>
              <p
                className="text-xs font-bold tracking-[0.22em] uppercase mb-4"
                style={{ color: brand.goldBright }}
              >
                Our Promise
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Inspiring Every Learner to Discover Their Potential
              </h2>
              <p className="text-lg leading-relaxed mb-10" style={{ color: '#F5D98B' }}>
                Through our comprehensive academic program, we inspire every learner to discover
                their potential, develop confidence, and become responsible, competent, and
                globally minded citizens.
              </p>
              <a
                href="/admissions/apply"
                className="inline-block px-10 py-4 rounded-xl font-bold text-base transition-opacity hover:opacity-90 shadow-md"
                style={{ backgroundColor: brand.gold, color: brand.burgundyDark }}
              >
                Apply for Admission
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <GJSFooter />
    </div>
  );
};

export default AcademicPrograms;
