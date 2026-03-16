import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuMapPin, LuPhone, LuMail, LuUsers, LuAward, LuBookOpen, LuGlobe, LuExternalLink, LuTarget, LuMenu, LuX, LuChevronDown } from 'react-icons/lu';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const GJSKikajjo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

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
  const brandColors = {
    primary: '#FFD700', // Yellow
    secondary: '#800E13', // Burgundy
  };

  const stats = [
    { icon: LuUsers, label: 'Students', value: '400+' },
    { icon: LuAward, label: 'Pass Rate', value: '99%' },
    { icon: LuBookOpen, label: 'Curricula', value: '2' },
    { icon: LuGlobe, label: 'Countries', value: '12+' },
  ];

  const programs = [
    {
      title: 'IB Program',
      description: 'International Baccalaureate foundation tailored for primary learners',
      features: ['Primary Years', 'Inquiry Learning', 'Global Skills'],
    },
    {
      title: 'ICT & e-Learning Program',
      description: 'Digital-first learning that builds strong tech literacy from the early years',
      features: ['Digital Literacy', 'Coding Fundamentals', 'Blended Learning'],
    },
    {
      title: 'National Curriculum',
      description: 'Uganda National Curriculum integrated with international standards for P1-P7',
      features: ['Primary (P1-P7)', 'Life Skills', 'Competency-Based'],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden" style={{ viewTransitionName: 'institution-gjs-kikajjo' }}>
      {/* Add CSS for floating animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(10deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .float { animation: float 6s ease-in-out infinite; }
        .float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .float-reverse { animation: floatReverse 7s ease-in-out infinite; }
        .spin { animation: spin 20s linear infinite; }
        .spin-slow { animation: spinSlow 30s linear infinite; }
      `}</style>

      {/* Global Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Stars */}
        <motion.div 
          className="absolute top-10 left-[10%] w-12 h-12 text-yellow-400 opacity-30"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </motion.div>

        {/* Colorful Circles */}
        <motion.div 
          className="absolute top-32 right-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 opacity-20"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute top-[40%] left-[5%] w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-cyan-300 opacity-20"
          animate={{ 
            y: [0, -25, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Triangle */}
        <motion.div 
          className="absolute bottom-[30%] right-[10%] w-16 h-16 opacity-20"
          animate={{ 
            rotate: [0, 360],
            y: [0, -15, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <svg viewBox="0 0 24 24" fill="#FFD700">
            <path d="M12 2L2 22h20L12 2z"/>
          </svg>
        </motion.div>

        {/* Heart Shape */}
        <motion.div 
          className="absolute top-[60%] left-[80%] w-12 h-12 text-red-300 opacity-25"
          animate={{ 
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </motion.div>

        {/* Cloud Shape */}
        <motion.div 
          className="absolute top-20 right-[25%] w-24 h-16 opacity-15"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          <svg viewBox="0 0 24 24" fill="#87CEEB">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17C6.65 5.09 5.26 5.97 4.23 7.13 2.84 8.6 2 10.54 2 12.62c0 2.89 1.86 5.35 4.46 6.27.3.11.62.11.93.11h11.21c.31 0 .63-.04.93-.11C22.14 17.97 24 15.51 24 12.62c0-2.08-.84-4.02-2.23-5.49-.97-1.16-2.36-2.04-3.7-2.96-.17-.12-.36-.23-.55-.34C18.15 4.43 16.78 4 15.3 4c-3.64 0-6.67 2.59-7.35 6.04h11.4z"/>
          </svg>
        </motion.div>

        {/* Pencil Icon */}
        <motion.div 
          className="absolute top-[45%] right-[5%] w-14 h-14 text-orange-400 opacity-25"
          animate={{ 
            rotate: [0, 15, 0, -15, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </motion.div>

        {/* ABC Blocks */}
        <motion.div 
          className="absolute bottom-[20%] left-[15%] w-16 h-16 text-green-400 opacity-20"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <rect x="4" y="4" width="7" height="7" rx="1"/>
            <rect x="13" y="4" width="7" height="7" rx="1"/>
            <rect x="4" y="13" width="7" height="7" rx="1"/>
            <rect x="13" y="13" width="7" height="7" rx="1"/>
          </svg>
        </motion.div>

        {/* Music Note */}
        <motion.div 
          className="absolute top-[70%] right-[30%] w-10 h-10 text-purple-400 opacity-25"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </motion.div>

        {/* Ball */}
        <motion.div 
          className="absolute top-[25%] left-[70%] w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-orange-400 opacity-25"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Butterfly */}
        <motion.div 
          className="absolute bottom-[40%] left-[25%] w-12 h-12 text-pink-400 opacity-30"
          animate={{ 
            x: [0, 20, 0, -20, 0],
            y: [0, -15, 0, -10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c-1.1 0-2 .9-2 2v2.17c-1.17.41-2 1.52-2 2.83v8c0 1.66 1.34 3 3 3h2c1.66 0 3-1.34 3-3V9c0-1.31-.83-2.42-2-2.83V4c0-1.1-.9-2-2-2zm-7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.35 0 .69-.06 1-.17v-5.66c-.31-.11-.65-.17-1-.17zm14 0c-.35 0-.69.06-1 .17v5.66c.31.11.65.17 1 .17 1.66 0 3-1.34 3-3s-1.34-3-3-3z"/>
          </svg>
        </motion.div>

        {/* Book */}
        <motion.div 
          className="absolute top-[55%] left-[90%] w-12 h-12 text-blue-500 opacity-20"
          animate={{ 
            rotate: [0, -10, 0, 10, 0],
            y: [0, -12, 0]
          }}
          transition={{ duration: 9, repeat: Infinity }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
          </svg>
        </motion.div>
      </div>
      {/* Custom Header/Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md overflow-visible">
        {/* Floating Decorative Elements */}
        <div className="absolute top-0 left-10 w-8 h-8 bg-yellow-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-2 right-20 w-6 h-6 bg-red-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-4 left-1/3 w-10 h-10 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '5s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-visible">
          <div className="flex items-center justify-between h-20">
            {/* Brand Name with playful animation */}
            <motion.div 
              className="flex items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
            >
              <h1 className="text-2xl font-bold" style={{ color: brandColors.secondary }}>
                GJS <span style={{ color: brandColors.primary }}>Kikajjo</span>
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <motion.a 
                href="#home" 
                className="relative text-gray-700 hover:text-[#800E13] font-medium transition-all duration-300 group"
                whileHover={{ y: -2 }}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              
              {/* About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <motion.button 
                  className="flex items-center text-gray-700 hover:text-[#800E13] font-medium transition-colors group"
                  whileHover={{ y: -2 }}
                >
                  About Us
                  <LuChevronDown className={`ml-1 w-4 h-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
                </motion.button>
                {isAboutDropdownOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-3 border-2 border-[#FFD700] z-[100]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="#management" className="block px-4 py-3 text-gray-700 hover:bg-[#FFF9E6] hover:text-[#800E13] transition-colors rounded-lg mx-2">
                      School Management Committee
                    </a>
                    <a href="#mission" className="block px-4 py-3 text-gray-700 hover:bg-[#FFF9E6] hover:text-[#800E13] transition-colors rounded-lg mx-2">
                      Mission & Vision
                    </a>
                    <a href="#facilities" className="block px-4 py-3 text-gray-700 hover:bg-[#FFF9E6] hover:text-[#800E13] transition-colors rounded-lg mx-2">
                      Our Facilities
                    </a>
                  </motion.div>
                )}
              </div>

              <motion.a 
                href="#blog" 
                className="relative text-gray-700 hover:text-[#800E13] font-medium transition-all duration-300 group"
                whileHover={{ y: -2 }}
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
              </motion.a>

              <motion.a 
                href="#gallery" 
                className="relative text-gray-700 hover:text-[#800E13] font-medium transition-all duration-300 group"
                whileHover={{ y: -2 }}
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
              </motion.a>

              <motion.a 
                href="#programs" 
                className="relative text-gray-700 hover:text-[#800E13] font-medium transition-all duration-300 group"
                whileHover={{ y: -2 }}
              >
                Programs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></span>
              </motion.a>

              <motion.a 
                href="#contact" 
                className="px-6 py-2 rounded-full font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: brandColors.primary, color: brandColors.secondary }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
              <a href="#home" className="block py-3 px-4 text-gray-700 hover:bg-[#FFF9E6] hover:text-[#800E13] font-medium rounded-lg transition-colors">
                Home
              </a>
              <div className="py-2">
                <button 
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-[#FFF9E6] hover:text-[#800E13] font-medium rounded-lg transition-colors"
                >
                  About Us
                  <LuChevronDown className={`w-4 h-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAboutDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    <a href="#management" className="block py-2 px-4 text-gray-600 hover:text-[#800E13] rounded-lg hover:bg-[#FFF9E6]">
                      School Management Committee
                    </a>
                    <a href="#mission" className="block py-2 px-4 text-gray-600 hover:text-[#800E13] rounded-lg hover:bg-[#FFF9E6]">
                      Mission & Vision
                    </a>
                    <a href="#facilities" className="block py-2 px-4 text-gray-600 hover:text-[#800E13] rounded-lg hover:bg-[#FFF9E6]">
                      Our Facilities
                    </a>
                  </div>
                )}
              </div>
              <a href="#blog" className="block py-3 px-4 text-gray-700 hover:bg-[#FFF9E6] hover:text-[#800E13] font-medium rounded-lg transition-colors">
                Blog
              </a>
              <a href="#gallery" className="block py-3 px-4 text-gray-700 hover:bg-[#FFF9E6] hover:text-[#800E13] font-medium rounded-lg transition-colors">
                Gallery
              </a>
              <a href="#programs" className="block py-3 px-4 text-gray-700 hover:bg-[#FFF9E6] hover:text-[#800E13] font-medium rounded-lg transition-colors">
                Programs
              </a>
              <a href="#contact" className="block py-3 px-4 mt-2 text-center rounded-full font-bold text-white" style={{ backgroundColor: brandColors.primary, color: brandColors.secondary }}>
                Contact
              </a>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-32" style={{ backgroundColor: brandColors.secondary }}>
        <div className="absolute inset-0">
          <img 
            src="/images/happy pupil.jpg" 
            alt="Gombe Junior School - Kikajjo" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center rounded-full px-6 py-2 mb-6" style={{ backgroundColor: `${brandColors.primary}40` }}>
                <LuExternalLink className="w-4 h-4 mr-2" style={{ color: brandColors.primary }} />
                <span className="text-sm font-medium">gjs-kikajjo.ges.ac.ug</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Gombe Junior School (GJS)
              </h1>
              <p className="text-xl mb-4" style={{ color: brandColors.primary }}>
                Kikajjo Campus
              </p>
            </motion.div>
            
            {/* Right side - Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center md:justify-end"
            >
              <img 
                src="/images/Gombe Junior School logo.png" 
                alt="Gombe Junior School" 
                className="w-96 h-96 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="w-full" style={{ marginTop: '-1px', lineHeight: 0 }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full" style={{ height: '100px', display: 'block' }}>
          <path d="M0,0 C300,90 600,90 900,0 C1050,50 1150,50 1200,0 L1200,120 L0,120 Z" fill="#FFF9F5"></path>
        </svg>
      </div>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: '#FFF9F5' }}>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-10 z-0">
          <svg width="80" height="80" viewBox="0 0 100 100">
            <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" fill="#FFD700" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 z-0">
          <svg width="100" height="60" viewBox="0 0 100 60">
            <ellipse cx="30" cy="30" rx="25" ry="15" fill="#FFD700"/>
            <ellipse cx="70" cy="30" rx="25" ry="15" fill="#FFD700"/>
            <rect x="10" y="35" width="80" height="20" rx="10" fill="#FFD700"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" style={{ backgroundColor: '#fff', boxShadow: '0 10px 30px rgba(128,14,19,0.1)' }}>
                  <stat.icon className="w-10 h-10" style={{ color: brandColors.primary }} />
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: brandColors.secondary }}>{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="w-full" style={{ marginTop: '-1px', lineHeight: 0 }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full" style={{ height: '100px', display: 'block' }}>
          <path d="M0,0 C300,90 600,90 900,0 C1050,50 1150,50 1200,0 L1200,120 L0,120 Z" fill="#F0F9FF"></path>
        </svg>
      </div>

      {/* Programs Section */}
      <section className="py-20 relative" style={{ backgroundColor: '#F0F9FF' }}>
        {/* Decorative Airplane */}
        <div className="absolute top-20 right-10 opacity-10">
          <svg width="120" height="80" viewBox="0 0 120 80">
            <path d="M10,40 L60,20 L110,40 L100,50 L70,45 L50,70 L45,70 L55,45 L30,42 L20,50 L15,48 Z" fill="#800E13" stroke="#800E13" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-lg font-semibold mb-2" style={{ color: '#FF6B35' }}>Our Programs</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: brandColors.secondary }}>
              We meet kids at their level<br/>regardless of their age
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class international education programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const bgColors = ['#FFE8E8', '#E8F5FF', '#E8FFE8'];
              const accentColors = ['#FF6B35', '#4FB8FF', '#5FD068'];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                  style={{
                    borderRadius: '30px',
                    backgroundColor: bgColors[index % 3]
                  }}
                >
                  <div className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4" 
                    style={{ 
                      backgroundColor: '#fff', 
                      color: accentColors[index % 3],
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                    {program.title}
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: brandColors.secondary }}>
                    {program.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-gray-700">
                        <span className="w-6 h-6 rounded-full mr-3 flex items-center justify-center flex-shrink-0" 
                          style={{ backgroundColor: accentColors[index % 3] }}>
                          <span className="text-white text-xs">\u2713</span>
                        </span>
                        <span className="pt-0.5">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Decorative blob */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20" 
                    style={{ backgroundColor: accentColors[index % 3] }}></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="w-full" style={{ marginTop: '-1px', lineHeight: 0 }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full" style={{ height: '100px', display: 'block' }}>
          <path d="M0,0 C300,90 600,90 900,0 C1050,50 1150,50 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Contact Section */}
      <section className="py-20 text-white" style={{ backgroundColor: brandColors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Join Our Global Community
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Experience world-class international education at GJS - Kikajjo Campus
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <LuMapPin className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>Katale, Kampala</span>
              </div>
              <div className="flex items-center space-x-2">
                <LuPhone className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>+256 414 694 516</span>
              </div>
              <div className="flex items-center space-x-2">
                <LuMail className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>info@gjs.ges.ac.ug</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 shadow-lg"
              style={{ backgroundColor: brandColors.primary, color: brandColors.secondary }}
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Custom Footer */}
      <footer className="bg-[#800E13] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/images/Gombe Junior School logo.png" 
                  alt="Gombe Junior School" 
                  className="h-40 w-auto mr-3 grayscale"
                />
                <h3 className="text-2xl font-bold" style={{ color: brandColors.primary }}>
                  GJS - Kikajjo Campus
                </h3>
              </div>
              <p className="text-gray-200 mb-4">
                Providing world-class international education with a focus on holistic development.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: brandColors.primary }}>Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <LuMail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">info@gjs.ges.ac.ug</span>
                </div>
                <div className="flex items-start space-x-3">
                  <LuPhone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div className="text-gray-200">
                    <div>Tel: +256 414 694 516</div>
                    <div>Mobile: +256 708 800 005</div>
                    <div>Mobile: +256 708 800 006</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <LuMapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Kikajjo Campus, Kampala</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: brandColors.primary }}>Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD700] flex items-center justify-center transition-all">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD700] flex items-center justify-center transition-all">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD700] flex items-center justify-center transition-all">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD700] flex items-center justify-center transition-all">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-3">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Gombe Junior School (GJS). All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-sm">Powered by</span>
                <img 
                  src="/images/Inzozi-grayscale.png" 
                  alt="Inzozi Logo" 
                  className="h-16 w-auto brightness-0 invert" 
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GJSKikajjo;
