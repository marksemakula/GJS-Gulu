import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LuArrowLeft, LuAward, LuUsers, LuBriefcase,
  LuMapPin, LuPhone, LuMail, LuArrowRight,
} from 'react-icons/lu';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp,
} from 'react-icons/fa';
import GJSHeader from '../components/layout/GJSHeader';

const brand = {
  burgundy: '#800E13',
  burgundyDark: '#5C0A0E',
  gold: '#C9A227',
  goldBright: '#FFD700',
};

const managementTeam = [
  {
    name: 'Mr. Calnono Patrick',
    role: 'Principal',
    image: '/GJS-Gulu/CALNONO%20PATRICK%20-%20PRINCIPAL.png',
    bio: "Mr. Calnono Patrick serves as the Principal of Gombe Junior School — Gulu, providing overall academic and administrative leadership. With a steadfast commitment to academic excellence and holistic education, he steers the campus's strategic direction and ensures high-quality education for every learner.",
    badge: 'Principal',
    objectPosition: 'center 20%',
  },
  {
    name: 'Mr. Sebyala Jenkins',
    role: 'Assistant Bursar',
    image: '/GJS-Gulu/SEBYALA%20JENKINS%20-%20ASSISTANT%20BURSAR.png',
    bio: 'Mr. Sebyala Jenkins serves as the Assistant Bursar of Gombe Junior School — Gulu. He manages the day-to-day financial operations of the campus, supporting parents with fees matters and ensuring transparent and efficient handling of school finances.',
    badge: 'Assistant Bursar',
    objectPosition: 'center 20%',
  },
  {
    name: 'Mr. Okello Tabu Joseph',
    role: 'ICT Manager',
    image: '/GJS-Gulu/OKELLO%20TABU%20JOSEPH%20-%20ICT%20MANAGER.png',
    bio: 'Mr. Okello Tabu Joseph leads the ICT department at Gombe Junior School — Gulu. He drives the integration of technology into teaching and learning, equipping our learners with digital skills and global awareness through hands-on computer lessons and research.',
    badge: 'ICT Manager',
    objectPosition: 'center 20%',
  },
  {
    name: 'Mr. Olweny David Dee',
    role: 'Marketing Manager',
    image: '/GJS-Gulu/OLWENY%20DAVID%20DEE%20-%20MARKETING%20MANAGER.png',
    bio: "Mr. Olweny David Dee heads marketing and outreach for Gombe Junior School — Gulu. He champions the school's brand presence in the Northern region, ensuring the Gulu Campus remains a top-choice institution for families seeking quality holistic education.",
    badge: 'Marketing Manager',
    objectPosition: 'center 20%',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
};

/* ─── Profile Card ─────────────────────────────────────────────── */
const ProfileCard = ({ member, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group w-full"
  >
    {/* Image — tall fixed height, anchored to top so full face always shows */}
    <div
      className="relative overflow-hidden bg-gray-50 border-b-4"
      style={{ borderColor: brand.goldBright, height: '560px' }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition: member.objectPosition || 'center 20%' }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      {/* Role badge */}
      <div className="absolute bottom-4 left-4">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-bold shadow-md"
          style={{ backgroundColor: brand.goldBright, color: brand.burgundy }}
        >
          {member.badge}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
      <div>
        <h3 className="text-lg font-bold mb-0.5" style={{ color: brand.burgundy }}>{member.name}</h3>
        <p
          className="text-xs uppercase tracking-wider font-semibold mb-3"
          style={{ color: '#B1742F' }}
        >
          {member.role}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
        <span className="font-semibold text-gray-500">Gombe Junior School — Gulu</span>
        <LuAward className="w-4 h-4 text-yellow-500" />
      </div>
    </div>
  </motion.div>
);

/* ─── Page ─────────────────────────────────────────────────────── */
const ManagementTeam = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F5]">
      <GJSHeader />

      {/* Hero Section */}
      <section
        className="relative text-white py-20 overflow-hidden"
        style={{ backgroundColor: brand.burgundy }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-yellow-400" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-yellow-400" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-yellow-300" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 text-sm font-bold tracking-widest uppercase"
              style={{ backgroundColor: `${brand.goldBright}28`, color: brand.goldBright }}
            >
              <LuBriefcase className="w-4 h-4" />
              Administration &amp; Management
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
              Our Management Team
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/85 leading-relaxed">
              Meet the dedicated professionals who lead Gombe Junior School — Gulu with passion,
              expertise, and an unwavering commitment to nurturing the next generation of Ugandan leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E7D4B9] bg-white text-sm font-medium hover:bg-[#FFF3D8] transition shadow-sm"
          style={{ color: brand.burgundy }}
        >
          <LuArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Profiles Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Uniform grid — all staff tiles the same size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-0">
          {managementTeam.map((member, i) => (
            <ProfileCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Commitment Banner */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-[#F0E4D8] bg-white"
        >
          <div
            className="h-2 w-full"
            style={{ background: `linear-gradient(90deg, ${brand.burgundy}, ${brand.goldBright})` }}
          />
          <div className="p-10 text-center">
            <LuUsers className="w-10 h-10 mx-auto mb-4" style={{ color: brand.burgundy }} />
            <h2 className="font-bold text-2xl mb-3" style={{ color: brand.burgundy }}>
              Leading with Purpose
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-sm sm:text-base">
              Our administration and management team works tirelessly to create an inspiring,
              safe, and high-achieving school community. Together, they champion academic
              excellence, holistic development, and the rich values that define Gombe Junior School — Gulu.
            </p>
          </div>
        </motion.section>
      </main>

      {/* ── CTA / Contact Section (same as home page) ───────────── */}
      <section className="py-20 lg:py-24 text-white relative z-10" style={{ backgroundColor: brand.burgundy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: brand.gold }}>
              Admissions Open
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Give Your Child a Strong Start with Quality Education at Our Gulu Campus.
            </h2>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-10 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <LuMapPin className="w-4 h-4" style={{ color: brand.gold }} />
                <span>Gulu Town, Uganda</span>
              </div>
              <div className="flex items-center gap-2">
                <LuPhone className="w-4 h-4" style={{ color: brand.gold }} />
                <span>0708 800 008 / 0760 063 577</span>
              </div>
              <div className="flex items-center gap-2">
                <LuMail className="w-4 h-4" style={{ color: brand.gold }} />
                <span>gombejuniorschool@gmail.com</span>
              </div>
            </div>
            <Link
              to="/admissions/apply"
              className="inline-flex items-center gap-2 px-9 py-3.5 rounded-md font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: brand.gold, color: brand.burgundyDark }}
            >
              Apply Now
              <LuArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Footer (same as home page) ──────────────────────────── */}
      <footer className="text-white relative z-10" style={{ backgroundColor: brand.burgundyDark }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/Gombe Junior School logo.png"
                  alt="Gombe Junior School"
                  className="h-14 w-auto"
                />
                <h3 className="text-lg font-bold leading-tight" style={{ color: brand.gold }}>
                  GJS Gulu Campus
                </h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                A centre for holistic education.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: brand.gold }}>
                Contact Us
              </h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <LuMail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: brand.gold }} />
                  <span>gombejuniorschool@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <LuPhone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: brand.gold }} />
                  <span>0708 800 008 / 0760 063 577</span>
                </div>
                <div className="flex items-start gap-3">
                  <LuMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: brand.gold }} />
                  <span>Gulu Campus, Gulu Town — P.O. Box 361197, Gulu</span>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: brand.gold }}>
                Useful Links
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'School Profile', href: '/about/school-profile' },
                  { label: 'Admissions', href: '/admissions/apply' },
                  { label: 'Photo Gallery', href: '/gallery' },
                  { label: 'UNEB Results', href: '/academics/uneb-results' },
                  { label: 'Management Committee', href: '/about/management-committee' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: brand.gold }}>
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.facebook.com/share/14pffgQyCPv/2" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors" aria-label="Facebook">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="https://x.com/GombeJuniorSch" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors" aria-label="X (Twitter)">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/gombejuniorschool?igsh=aDF3ZzBwcnkwYzg0" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors" aria-label="Instagram">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@gombejuniorschool5546?si=nx4FVnOLfe0PBXVs" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors" aria-label="YouTube">
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@gombejuniorschool?_r=1&_t=ZS-97XNheFCTyx" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors" aria-label="TikTok">
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a href="https://wa.me/256760063577" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors" aria-label="WhatsApp">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Gombe Junior School (GJS). All rights reserved. A member of <a href="https://ges.ac.ug" target="_blank" rel="noopener" className="hover:underline">Gombe Education Service</a>.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">Powered by</span>
              <img
                src="/Inzozi-grayscale.png"
                alt="Inzozi Logo"
                className="h-8 w-auto brightness-0 invert opacity-70"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/256760063577"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: '#25D366' }}
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: '#25D366' }}
        />
      </a>
    </div>
  );
};

export default ManagementTeam;
