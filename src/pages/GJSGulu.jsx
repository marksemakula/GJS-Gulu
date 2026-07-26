import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MarqueeLib from 'react-fast-marquee';
const Marquee = MarqueeLib.default || MarqueeLib;
import { motion } from 'framer-motion';
import { LuMapPin, LuPhone, LuMail, LuMenu, LuX, LuChevronDown, LuArrowRight } from 'react-icons/lu';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const gjsPics = [
  // Academics - Classes
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Academics/Classes/20260629_115155.png',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Academics/Classes/20260629_115602.png',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Academics/Classes/20260629_115727.png',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Academics/Classes/20260629_120102.png',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Academics/Classes/20260629_121413.png',
  // School Activities - Aerobics
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_162350.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_162423.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_162704.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_163346.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_163408.jpg',
  // School Activities - Elections
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260618_144040.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260618_145717.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260618_150458.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260618_161806.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_135314.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_135650.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_140049.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_140106.jpg',
  // School Activities - Club Activities
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260529_163027.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260601_163812.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260615_162645.jpg',
  // Student Life - Religious Hour
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Student%20life/RELIGIOUS%20HOUR/20260602_162541.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Student%20life/RELIGIOUS%20HOUR/20260602_162703.jpg',
  '/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Student%20life/RELIGIOUS%20HOUR/20260602_162811.jpg',
  // Campus & ICT-enabled learning
  '/GJS-Gulu/GJS%20Gulu%20class.jpeg',
  '/GJS-Gulu/WhatsApp%20Image%202026-07-13%20at%2014.04.26d.jpeg',
  '/GJS-Gulu/WhatsApp%20Image%202026-07-13%20at%2014.04.30.jpeg',
  '/GJS-Gulu/WhatsApp%20Image%202026-07-18%20at%2020.22.50.jpeg',
  '/GJS-Gulu/WhatsApp%20Image%202026-07-18%20at%2020.22.51.jpeg',
  '/GJS-Gulu/WhatsApp%20Image%202026-07-18%20at%2020.22.51e.jpeg',
];

// Brand palette — burgundy-led, gold used sparingly as an accent
const brand = {
  burgundy: '#800E13',
  burgundyDark: '#5C0A0E',
  gold: '#C9A227',      // muted, corporate gold for accents
  goldBright: '#FFD700', // reserved for very small highlights
  ink: '#1F2937',
  muted: '#6B7280',
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const GJSGulu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [heroImageIndex, setHeroImageIndex] = useState(() => Math.floor(Math.random() * gjsPics.length));
  const [heroVisible, setHeroVisible] = useState(true);

  const navItems = [
    { label: 'Home', href: '#home' },
    {
      label: 'About Us',
      dropdown: [
        { label: 'School Profile', route: '/about/school-profile' },
        { label: 'Mission & Vision', route: '/about/school-profile#mission' },
        { label: 'Core Values', route: '/about/school-profile#core-values' },
        { label: 'School Management Committee', route: '/about/management-committee' },
        { label: "Principal's Message", href: '#principals-message', route: '/principal-message' },
        { label: 'Administration and Management Team', route: '/about/management-team' },
      ],
    },
    {
      label: 'Academics',
      dropdown: [
        { label: 'Academic Program', route: '/academics/program' },
        { label: 'Curriculum - Subjects', href: '#curriculum' },
        { label: 'Staff', route: '/about/management-team' },
        { label: 'UNEB Results Archive', route: '/academics/uneb-results' },
      ],
    },
    {
      label: 'Admissions',
      dropdown: [
        { label: 'Apply Now', href: '#apply', route: '/admissions/apply' },
        { label: 'Fees & Requirements', href: '#fees', route: '/admissions/fees' },
        { label: 'FAQs', href: '#faqs' },
        { label: 'Documents', href: '#documents', route: '/admissions/documents' },
      ],
    },
    {
      label: "Student's Life",
      dropdown: [
        { label: 'Updates', href: '#articles' },
        { label: 'Images', href: '#gallery', route: '/gallery' },
        { label: 'Co-curricular', href: '#clubs' },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroVisible(false);
      setTimeout(() => {
        setHeroImageIndex(prev => {
          let next;
          do { next = Math.floor(Math.random() * gjsPics.length); } while (next === prev);
          return next;
        });
        setHeroVisible(true);
      }, 700);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Change favicon when component mounts
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/sisu-theme/assets/images/logo-light.png';
    document.getElementsByTagName('head')[0].appendChild(link);

    // Restore original favicon when component unmounts
    return () => {
      link.href = '/favicon.ico';
    };
  }, []);

  const programs = [
    {
      title: 'ICT & e-Learning Program',
      description: 'Digital-first learning that builds strong tech literacy from the early years.',
      features: ['Digital Literacy', 'Coding Fundamentals', 'Blended Learning'],
    },
    {
      title: 'National Curriculum',
      description: 'Uganda National Curriculum integrated with international standards for P1-P6.',
      features: ['Primary (P1-P6)', 'Life Skills', 'Competency-Based'],
    },
    {
      title: 'Co-Curricular Activities',
      description: 'A vibrant programme of activities that develops teamwork, discipline, and well-rounded learners.',
      features: ['Athletics', 'Clubs & Societies', 'Music, Dance & Drama'],
    },
  ];

  const carouselLogos = [
    { src: '/MoES1.png', alt: 'MoES' },
    { src: '/GES.png', alt: 'GES' },
    { src: '/Flag_of_Buganda.svg', alt: 'Flag of Buganda' },
    { src: '/Gombe High logo.png', alt: 'Gombe High' },
    { src: '/IPP.png', alt: 'IPP' },
    { src: '/Jimmy Ssekasi Business Institute Logo.png', alt: 'Gombe Institute of Business, Science & Technology' },
    { src: '/scooby-logo.png', alt: 'Scooby' },
  ];

  return (
    <div className="min-h-screen bg-white relative" style={{ viewTransitionName: 'institution-gjs-gulu' }}>
      {/* Subtle background accents — static, very low opacity */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[30%] -left-24 w-72 h-72 rounded-full opacity-[0.04]" style={{ backgroundColor: brand.burgundy }} />
        <div className="absolute bottom-[15%] -right-24 w-80 h-80 rounded-full opacity-[0.05]" style={{ backgroundColor: brand.gold }} />
      </div>

      {/* Top utility bar */}
      <div className="relative z-50 text-white text-sm" style={{ backgroundColor: brand.burgundyDark }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="hidden sm:flex items-center gap-2">
              <LuPhone className="w-3.5 h-3.5" style={{ color: brand.gold }} />
              0708 800 008 / 0760 063 577
            </span>
            <span className="flex items-center gap-2">
              <LuMail className="w-3.5 h-3.5" style={{ color: brand.gold }} />
              gombejuniorschool@gmail.com
            </span>
          </div>
          <span className="hidden md:flex items-center gap-2">
            <LuMapPin className="w-3.5 h-3.5" style={{ color: brand.gold }} />
            Gulu Town, Uganda
          </span>
        </div>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3 min-w-0">
              <img
                src="/Gombe Junior School logo.png"
                alt="Gombe Junior School"
                className="h-12 w-auto flex-shrink-0"
              />
              <div className="leading-tight min-w-0">
                <p className="text-lg font-bold truncate" style={{ color: brand.burgundy }}>
                  Gombe Junior School
                </p>
                <p className="text-xs font-medium tracking-wide uppercase" style={{ color: brand.gold }}>
                  Gulu Campus &middot; Gulu City
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800E13] transition-colors">
                      {item.label}
                      <LuChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && (
                      /* pt-2 creates a seamless hover bridge between button and panel */
                      <div className="absolute top-full left-0 pt-2 min-w-[230px] z-[100]">
                        <motion.div
                          className="bg-white rounded-lg shadow-lg py-2 border border-gray-200"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          {item.dropdown.map((sub) =>
                            sub.route ? (
                              <Link
                                key={sub.route}
                                to={sub.route}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#800E13] transition-colors"
                              >
                                {sub.label}
                              </Link>
                            ) : (
                              <a
                                key={sub.href}
                                href={sub.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#800E13] transition-colors"
                              >
                                {sub.label}
                              </a>
                            )
                          )}
                        </motion.div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800E13] transition-colors group"
                  >
                    {item.label}
                    <span
                      className="absolute bottom-0 left-3 w-0 h-0.5 group-hover:w-[calc(100%-24px)] transition-all duration-300"
                      style={{ backgroundColor: brand.gold }}
                    ></span>
                  </a>
                )
              )}
              <Link
                to="/admissions/apply"
                className="ml-3 px-5 py-2.5 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: brand.burgundy }}
              >
                Apply Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="py-1">
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                      className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#800E13] font-medium rounded-lg transition-colors"
                    >
                      {item.label}
                      <LuChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileDropdown === item.label && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((sub) =>
                          sub.route ? (
                            <Link
                              key={sub.route}
                              to={sub.route}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-2 px-4 text-sm text-gray-600 hover:text-[#800E13] rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ) : (
                            <a
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-2 px-4 text-sm text-gray-600 hover:text-[#800E13] rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              {sub.label}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#800E13] font-medium rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                )
              )}
              <Link
                to="/admissions/apply"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-2 mx-4 px-5 py-3 rounded-md text-center text-sm font-semibold text-white"
                style={{ backgroundColor: brand.burgundy }}
              >
                Apply Now
              </Link>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden text-white" style={{ backgroundColor: '#141414' }}>
        <div className="absolute inset-0">
          <img
            src={gjsPics[heroImageIndex]}
            alt="Gombe Junior School - Gulu"
            className="w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: heroVisible ? 0.55 : 0 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest uppercase"
                style={{ borderColor: `${brand.gold}80`, color: brand.gold }}
              >
                Mixed Day &middot; Primary Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Gombe Junior School
                <span className="block mt-2 text-2xl md:text-3xl font-semibold" style={{ color: brand.gold }}>
                  Gulu Campus
                </span>
              </h1>
              <p className="text-lg text-gray-200 mb-10 max-w-xl">
                Nurturing confident, well-rounded learners through academic excellence,
                strong values, and a supportive day-school environment in Gulu City.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/admissions/apply"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: brand.burgundy }}
                >
                  Apply for Admission
                  <LuArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about/school-profile"
                  className="inline-flex items-center px-7 py-3.5 rounded-md font-semibold border border-white/40 text-white hover:bg-white/10 transition-colors"
                >
                  School Profile
                </Link>
              </div>
            </motion.div>

            {/* Right side - Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:flex justify-end"
            >
              <img
                src="/Gombe Junior School logo.png"
                alt="Gombe Junior School"
                loading="lazy"
                className="w-72 h-72 object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
        {/* Gold accent line */}
        <div className="relative h-1" style={{ background: `linear-gradient(90deg, ${brand.gold}, ${brand.burgundy})` }} />
      </section>

      {/* Logo Carousel */}
      <div className="py-10 bg-gray-50 border-b border-gray-100">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">
          Affiliations &amp; Partners
        </p>
        <Marquee gradient gradientColor="#F9FAFB" gradientWidth={96} speed={50} pauseOnHover>
          {[0, 1, 2, 3].flatMap((setIdx) =>
            carouselLogos.map((logo, i) => (
              <div
                key={`${setIdx}-${i}`}
                style={{ width: '120px', height: '80px', margin: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={80}
                  className="max-h-14 max-w-full object-contain transition-all duration-300"
                />
              </div>
            ))
          )}
        </Marquee>
      </div>

      {/* Campus Media Section */}
      <section className="py-20 lg:py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: brand.gold }}>
              Our Campus
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: brand.ink }}>
              Explore Life at Gulu Campus
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Column */}
            <motion.div
              {...fadeUp}
              className="relative overflow-hidden rounded-lg border border-gray-200 shadow-md group"
            >
              <Link to="/gallery" className="block w-full h-full">
                <img
                  src="/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_142549.jpg"
                  alt="Gombe Junior School Gulu"
                  className="w-full h-full object-cover aspect-video transform group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white font-semibold text-lg">Campus Life</h3>
                  <p className="text-gray-300 text-sm">View the photo gallery</p>
                </div>
              </Link>
            </motion.div>

            {/* Video Column */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-lg border border-gray-200 shadow-md"
            >
              <video
                src="/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Home%20page/Gombe%20Junior%20School%20-%20Gulu%20Virtual%20tour.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
                <h3 className="text-white font-semibold text-lg">Virtual Tour</h3>
                <p className="text-gray-300 text-sm">A walk through our campus</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 lg:py-24 bg-gray-50 relative z-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: brand.gold }}>
              Our Programs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: brand.ink }}>
              We Offer World-Class Education Programs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-8"
                style={{ borderTop: `3px solid ${index % 2 === 0 ? brand.burgundy : brand.gold}` }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: brand.burgundy }}>
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <ul className="space-y-3">
                  {program.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-gray-700">
                      <span
                        className="w-5 h-5 rounded-full mr-3 flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${brand.burgundy}12` }}
                      >
                        <span className="text-xs font-bold" style={{ color: brand.burgundy }}>&#10003;</span>
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-20 lg:py-24 text-white relative z-10" style={{ backgroundColor: brand.burgundy }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
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

      {/* Footer */}
      <footer className="text-white relative z-10" style={{ backgroundColor: brand.burgundyDark }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About Section */}
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

            {/* Contact Information */}
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
                  <span>Gulu Campus, Gulu City</span>
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
                  { label: 'News', href: '#news' },
                  { label: 'Events', href: '#events' },
                  { label: 'Alumni', href: '#alumni' },
                  { label: 'Facilities', href: '#facilities' },
                  { label: 'Contact Us', href: '#contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: brand.gold }}>
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-5 items-center">
                <a href="https://www.facebook.com/share/14pffgQyCPv/2" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#C9A227] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-110" aria-label="Facebook">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="https://x.com/GombeJuniorSch" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#C9A227] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-110" aria-label="X (Twitter)">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/gombejuniorschool?igsh=aDF3ZzBwcnkwYzg0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#C9A227] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-110" aria-label="Instagram">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@gombejuniorschool5546?si=nx4FVnOLfe0PBXVs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#C9A227] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-110" aria-label="YouTube">
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@gombejuniorschool?_r=1&_t=ZS-97XNheFCTyx" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#C9A227] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-110" aria-label="TikTok">
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a href="https://wa.me/256760063577" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#C9A227] transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-110" aria-label="WhatsApp">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/256760063577"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: '#25D366' }}
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: '#25D366' }}
        />
      </a>
    </div>
  );
};

export default GJSGulu;
