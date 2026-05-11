import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuDownload, LuFileText, LuEye } from 'react-icons/lu';
import GJSHeader from '../../components/layout/GJSHeader';
import GJSFooter from '../../components/layout/GJSFooter';

const brandColors = {
  primary: '#FFD700', // Yellow
  secondary: '#800E13', // Burgundy
};

const documents = [
  {
    id: 'boarding',
    title: 'Boarding School Requirements & Fees',
    file: 'BOARDING SCHOOL REQUIREMENTS.pdf',
    description: 'Detailed breakdown of fees and requirements for our boarding section.',
  },
  {
    id: 'day',
    title: 'Day School Requirements & Fees',
    file: 'DAY SCHOOL REQUIREMENTS.pdf',
    description: 'Detailed breakdown of fees and requirements for our day section.',
  }
];

const FeesPage = () => {
  const [activeTab, setActiveTab] = useState('boarding');

  const activeDoc = documents.find(d => d.id === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <GJSHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-white" style={{ backgroundColor: brandColors.secondary }}>
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 L100,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Fees</h1>
            <p className="text-lg md:text-xl text-[#FFD700]">
              Find all the requirements and fee structures for our programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {documents.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setActiveTab(doc.id)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-md ${
                activeTab === doc.id
                  ? 'bg-[#800E13] text-white scale-105'
                  : 'bg-white text-gray-700 hover:bg-[#FFF9E6]'
              }`}
            >
              {doc.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 flex flex-col lg:flex-row"
            style={{ borderTopColor: brandColors.primary, minHeight: '600px' }}
          >
            {/* Sidebar Details */}
            <div className="lg:w-1/3 p-8 border-b lg:border-b-0 lg:border-r border-gray-100 bg-[#FFF9E6] flex flex-col justify-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6">
                  <LuFileText className="w-8 h-8" style={{ color: brandColors.secondary }} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{activeDoc.title}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {activeDoc.description}
                </p>
              </div>

              <a
                href={`/Resources/${activeDoc.file}`}
                download
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-md w-full"
                style={{ backgroundColor: brandColors.secondary }}
              >
                <LuDownload className="w-5 h-5" />
                Download PDF
              </a>
              
              <div className="mt-6 flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                <LuEye className="w-5 h-5 mt-0.5" style={{ color: brandColors.primary }} />
                <p className="text-sm text-gray-500">
                  You can preview the document on the right. If it doesn't load, please download it using the button above.
                </p>
              </div>
            </div>

            {/* Document Preview */}
            <div className="lg:w-2/3 bg-gray-100 relative">
              <iframe
                src={`/Resources/${activeDoc.file}#toolbar=0`}
                className="w-full h-[500px] lg:h-full min-h-[600px] border-0"
                title={`${activeDoc.title} Preview`}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <GJSFooter />
    </div>
  );
};

export default FeesPage;
