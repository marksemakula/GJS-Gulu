import React from 'react';
import { motion } from 'framer-motion';
import { LuDownload, LuFileText, LuInfo } from 'react-icons/lu';
import GJSHeader from '../../components/layout/GJSHeader';
import GJSFooter from '../../components/layout/GJSFooter';

const brandColors = {
  primary: '#FFD700', // Yellow
  secondary: '#800E13', // Burgundy
};

const ApplyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <GJSHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-white" style={{ backgroundColor: brandColors.secondary }}>
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,100 L100,0 L100,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply Now</h1>
            <p className="text-lg md:text-xl text-[#FFD700]">
              Start your journey at Gombe Junior School
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-4"
          style={{ borderTopColor: brandColors.primary }}
        >
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FFF9E6] mb-6">
                <LuFileText className="w-10 h-10" style={{ color: brandColors.secondary }} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Form</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Please download the official application form to begin the admission process. 
                Fill out all required details accurately and submit it to the admissions office.
              </p>
            </div>

            <div className="bg-[#FFF9E6] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <LuFileText className="w-8 h-8" style={{ color: brandColors.secondary }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">APPLICATION FORM.docx</h3>
                  <p className="text-gray-500 text-sm">Microsoft Word Document</p>
                </div>
              </div>
              
              <a
                href="/Resources/APPLICATION FORM.docx"
                download
                className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-md"
                style={{ backgroundColor: brandColors.secondary }}
              >
                <LuDownload className="w-5 h-5" />
                Download Form
              </a>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
              <LuInfo className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-1">Preview Note</h4>
                <p className="text-blue-800 text-sm">
                  A native preview is not available for Word documents. Please download the file to view and edit its contents. If you prefer to fill it out physically, you can print the downloaded document.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <GJSFooter />
    </div>
  );
};

export default ApplyPage;
