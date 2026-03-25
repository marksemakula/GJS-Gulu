import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LuChevronDown, LuMenu, LuX } from 'react-icons/lu';

const brandColors = {
  primary: '#FFD700',
  secondary: '#800E13',
};

const navItems = [
  { label: 'Home', href: '#home' },
  {
    label: 'About Us',
    dropdown: [
      { label: 'School Profile', href: '#school-profile' },
      { label: 'Mission & Vision', href: '#mission-vision' },
      { label: 'Core Values', href: '#core-values' },
      { label: 'Board of Governors', href: '#board-of-governors' },
      { label: "Principal's Message", href: '#principals-message' },
      { label: 'Administration and Management Team', href: '#administration' },
    ],
  },
  {
    label: 'Academics',
    dropdown: [
      { label: 'Academic Program', href: '#academic-program' },
      { label: 'Curriculum - Subjects', href: '#curriculum' },
      { label: 'Departments', href: '#departments' },
      { label: 'UNED Results - Archives', href: '#uned-results' },
    ],
  },
  {
    label: 'Admissions',
    dropdown: [
      { label: 'Apply Now', href: '#apply-now' },
      { label: 'Resources - Fees', href: '#resources-fees' },
      { label: 'FAQs', href: '#faqs' },
      { label: 'Documents', href: '#documents' },
      { label: 'Overview', href: '#overview' },
    ],
  },
  {
    label: "Student's Life",
    dropdown: [
      { label: 'Articles', href: '#articles' },
      { label: 'Images', href: '#images' },
      { label: 'Student Clubs and Societies', href: '#clubs' },
    ],
  },
];

const GJSHeader = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-[130] shadow-lg" style={{ backgroundColor: brandColors.secondary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative overflow-visible">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
            <img src="/images/GombeBadge.png" alt="Gombe Junior School" className="h-12 w-auto" />
            <div className="leading-tight">
              <div className="text-lg font-bold text-white">Gombe Junior School</div>
              <div className="text-xs font-semibold" style={{ color: brandColors.primary }}>
                Ssosolye bwatafa
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-white hover:text-[#FFD700] transition-colors">
                    {item.label}
                    <LuChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        className="absolute top-full left-0 mt-1 min-w-[220px] bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-[140]"
                      >
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#FFF6CC] hover:text-[#800E13] transition-colors mx-2 rounded-xl"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-semibold text-white hover:text-[#FFD700] transition-colors group"
                >
                  {item.label}
                  <span className="absolute left-3 bottom-0 h-0.5 w-0 bg-[#FFD700] transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]" />
                </a>
              )
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-[#FFD700] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
          <AnimatePresence>
            {isMobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden border-t border-[#F3C93A]"
              >
                <div className="py-4 space-y-1">
                  {navItems.map((item) =>
                    item.dropdown ? (
                      <div key={item.label}>
                        <button
                          onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold text-white hover:bg-[rgba(255,255,255,0.1)]"
                        >
                          {item.label}
                          <LuChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileOpenDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1 overflow-hidden"
                            >
                              {item.dropdown.map((sub) => (
                                <a
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="block px-3 py-2 rounded-lg text-sm text-white hover:bg-[rgba(255,255,255,0.1)]"
                                >
                                  {sub.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block px-3 py-3 rounded-xl text-sm font-semibold text-white hover:bg-[rgba(255,255,255,0.1)]"
                      >
                        {item.label}
                      </a>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </header>
  );
};

export default GJSHeader;
