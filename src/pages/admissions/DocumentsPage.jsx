import React from 'react';
import { motion } from 'framer-motion';
import { LuDownload, LuFileText, LuFileCheck, LuFolderOpen } from 'react-icons/lu';
import GJSHeader from '../../components/layout/GJSHeader';
import GJSFooter from '../../components/layout/GJSFooter';

const brandColors = {
  primary: '#FFD700', // Yellow
  secondary: '#800E13', // Burgundy
};

const documents = [
  {
    title: 'Application Form',
    file: 'APPLICATION FORM.docx',
    description: 'The official admission form. Please download, fill out, and return to the school.',
    type: 'docx',
    icon: LuFileText,
  },
  {
    title: 'Boarding School Requirements',
    file: 'BOARDING SCHOOL REQUIREMENTS.pdf',
    description: 'Detailed list of requirements and fee structure for boarding students.',
    type: 'pdf',
    icon: LuFileCheck,
  },
  {
    title: 'Day School Requirements',
    file: 'DAY SCHOOL REQUIREMENTS.pdf',
    description: 'Detailed list of requirements and fee structure for day students.',
    type: 'pdf',
    icon: LuFileCheck,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const DocumentsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <GJSHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-white" style={{ backgroundColor: brandColors.secondary }}>
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
              <LuFolderOpen className="w-10 h-10 text-[#FFD700]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Document Center</h1>
            <p className="text-lg md:text-xl text-[#FFD700] max-w-2xl mx-auto">
              Access and download all necessary forms, requirements, and information documents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className="h-3 w-full" style={{ backgroundColor: brandColors.primary }} />
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-sm" style={{ backgroundColor: '#FFF9E6' }}>
                    <Icon className="w-8 h-8" style={{ color: brandColors.secondary }} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{doc.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {doc.description}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <a
                      href={`/Resources/${doc.file}`}
                      download
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-colors"
                      style={{ 
                        color: brandColors.secondary,
                        backgroundColor: '#FFF9E6',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = brandColors.secondary;
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFF9E6';
                        e.currentTarget.style.color = brandColors.secondary;
                      }}
                    >
                      <LuDownload className="w-5 h-5" />
                      Download {doc.type.toUpperCase()}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </main>

      <GJSFooter />
    </div>
  );
};

export default DocumentsPage;
