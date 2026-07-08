import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LuArrowLeft, LuUsers, LuAward } from 'react-icons/lu';

const SchoolManagementCommittee = () => {
  const brandColors = {
    primary: '#FFD700',   // Yellow
    secondary: '#800E13', // Burgundy
    cream: '#FFF9F5',
  };

  const members = [
    { name: 'Ms. Okech Goretti', role: 'Chairperson' },
    { name: 'Pr. Benard Otim', role: "Parents' Representative" },
    { name: 'Mr. Okello James Owor', role: 'Member' },
    { name: 'Mr. Mabiriizi Titus Kyewalabye', role: 'Member' },
    { name: 'Ms. Adukin Irene', role: 'Member' },
    { name: 'Ms. Onen Jackie Monica', role: 'Member' },
    { name: 'Ms. Anena Jesca', role: 'Member' },
    { name: 'Ms. Ocwee Grace Acullu', role: 'Member' },
    { name: 'Mr. Ocitti Jimmy', role: 'Member' },
    { name: 'Mr. Calnono Patrick', role: 'Principal / Secretary' },
    { name: 'Ms. Daniella Nakayenga', role: 'GES Rector' },
  ];

  const getInitials = (name) =>
    name
      .replace(/^(Ms\.|Mr\.|Pr\.)\s*/, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase();

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
              <p className="text-xs uppercase tracking-[0.2em] text-[#B1742F] text-right">Governance</p>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#800E13]">Management Committee</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Header */}
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
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-5 text-sm font-semibold tracking-wide uppercase"
              style={{ backgroundColor: `${brandColors.primary}25`, color: brandColors.primary }}
            >
              <LuUsers className="w-4 h-4" />
              Leadership & Governance
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              School Management Committee
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed">
              The partnership between Gombe Junior School Gulu and its stakeholders has been a long-standing one. Our 11-member School Management Committee has been instrumental in the running of the school.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Members Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-6 rounded-none shadow-md border border-gray-100 flex items-center gap-4"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-sm"
                style={{ backgroundColor: brandColors.secondary }}
              >
                {getInitials(member.name)}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-gray-800 leading-tight">{member.name}</h3>
                <p className="text-xs uppercase tracking-wide font-semibold text-[#B1742F] mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment Statement */}
        <section className="mt-16 bg-white border border-[#F0E4D8] p-8 text-center shadow-lg max-w-4xl mx-auto rounded-none">
          <p className="text-[#800E13] font-bold text-lg mb-2 flex items-center justify-center gap-2">
            <LuAward className="w-5 h-5 text-yellow-500" />
            Our Governance Promise
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            The School Management Committee remains committed to providing strategic leadership, ensuring high accountability, supporting teachers, and creating a safe, spiritually grounding environment for every child.
          </p>
        </section>
      </main>
    </div>
  );
};

export default SchoolManagementCommittee;
