import React from 'react';
import { motion } from 'framer-motion';
import {
  LuDownload, LuFileText, LuWallet, LuShirt, LuBookOpen,
  LuCircleCheck, LuBackpack, LuInfo,
} from 'react-icons/lu';
import GJSHeader from '../../components/layout/GJSHeader';
import GJSFooter from '../../components/layout/GJSFooter';

const brandColors = {
  primary: '#FFD700', // Yellow
  secondary: '#800E13', // Burgundy
};

const feeItems = [
  { label: 'P.1 — P.6 Tuition (per term)', amount: 'UGX 850,000' },
  { label: 'Interview Fee (paid once)', amount: 'UGX 10,000' },
  { label: 'Admission Fee (paid once)', amount: 'UGX 50,000' },
  { label: 'Termly Workbooks', amount: 'UGX 60,000' },
  { label: 'Clubs (except Chess)', amount: 'UGX 100,000' },
];

const uniformItems = [
  { label: 'Girls (includes labeling)', amount: 'UGX 198,000' },
  { label: 'Boys (includes labeling)', amount: 'UGX 241,000' },
];

const providedBySchool = [
  'Box files', 'Holiday package (UGX 10,000 each)', 'Computer lessons',
  'Examinations', 'Religious instruction', 'Rubbers', 'Book covers',
  'Breakfast', 'Lunch', 'First aid in case of accidents',
];

const personalRequirements = [
  'Ream of photocopying paper: P.1 — P.2 coloured ream (blue); P.3 — P.4 Rotatrim (white); P.5 — P.6 coloured ream (yellow / green)',
  '10 rolls of toilet paper (Eurosilk or Compact type)',
  '1 packet of coloured pencils (P.1 — P.3)',
  'Long ruler (Haco) — (P.1 — P.3)',
  '1 dozen Nataraj pencils (P.1 — P.3)',
  '1 dozen 96-page Picfare exercise books (P.1 — P.2)',
  '1 dozen A4 96-page books (Champion) — P.3',
  '6 Bic blue pens (P.3)',
  '6 counter books, 3 quire (P.4 — P.6)',
  '1 graph book (P.6)',
  'Mathematical set (P.4 — P.6)',
  '3 fountain pens with cartridges (P.4 — P.6)',
  'Black school shoes',
  'Water bottle',
  'Canvas shoes (white) — Nike, Reebok or Adidas',
  'Wrist watch (P.3 — P.6)',
  'Personal dictionary & atlas (P.4 — P.6)',
  'Swim wear (P.1 — P.6)',
  "Bible / Qur'an (P.1 — P.6)",
  'Rosary for Catholics (P.1 — P.6)',
  'Come & Worship / Youth Praise (Anglicans)',
  'Black sharias and white veils (Muslim girls)',
  'White kanzus and black caps (Muslim boys)',
];

const classReaders = {
  girls: [
    "P.1 — MK English pupil's book",
    'P.2 — P.3 — St. Bernard English',
    "P.4 — Precise S.S.T pupil's book 4",
    "P.5 — Precise Social Studies pupil's book 6",
  ],
  boys: [
    "P.1 — KOBTA Literacy Two pupil's book",
    "P.2 — P.3 — Precise pupil's book 5",
    "P.4 — Precise S.S.T pupil's book 5",
    "P.5 — Precise S.S.T pupil's book 6",
  ],
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SectionCard = ({ icon: Icon, title, children }) => (
  <motion.section
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
  >
    <div className="h-2 w-full" style={{ backgroundColor: brandColors.primary }} />
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl shadow-sm" style={{ backgroundColor: '#FFF9E6' }}>
          <Icon className="w-6 h-6" style={{ color: brandColors.secondary }} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  </motion.section>
);

const AmountRow = ({ label, amount }) => (
  <div className="flex items-center justify-between gap-4 py-3 border-b border-gray-100 last:border-b-0">
    <span className="text-gray-700">{label}</span>
    <span className="font-bold whitespace-nowrap" style={{ color: brandColors.secondary }}>{amount}</span>
  </div>
);

const FeesPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fees & Requirements 2026</h1>
            <p className="text-lg md:text-xl text-[#FFD700]">
              Fee structure and requirement sheet for Gombe Junior School — Gulu Campus
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10">
        <SectionCard icon={LuWallet} title="Fees Structure">
          <p className="text-sm text-gray-500 mb-4">Interview and Admission fees are paid once.</p>
          {feeItems.map((item) => (
            <AmountRow key={item.label} label={item.label} amount={item.amount} />
          ))}
        </SectionCard>

        <SectionCard icon={LuShirt} title="Uniform Costs">
          <p className="text-sm text-gray-500 mb-4">Uniforms are bought at school from Unique. The costs below include labeling.</p>
          {uniformItems.map((item) => (
            <AmountRow key={item.label} label={item.label} amount={item.amount} />
          ))}
        </SectionCard>

        <SectionCard icon={LuCircleCheck} title="Provided by the School">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {providedBySchool.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <LuCircleCheck className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: brandColors.secondary }} />
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard icon={LuBackpack} title="Personal School Requirements">
          <ul className="space-y-3">
            {personalRequirements.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: brandColors.primary }} />
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard icon={LuBookOpen} title="Class Readers">
          <p className="text-sm text-gray-500 mb-6">All learners are required to purchase a book based on class level.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[['Girls', classReaders.girls], ['Boys', classReaders.boys]].map(([group, books]) => (
              <div key={group}>
                <h3 className="font-bold mb-3" style={{ color: brandColors.secondary }}>{group}</h3>
                <ul className="space-y-2">
                  {books.map((book) => (
                    <li key={book} className="flex items-start gap-3 text-gray-700">
                      <LuBookOpen className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: brandColors.secondary }} />
                      {book}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: '#FFF9E6' }}>
            <LuInfo className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: brandColors.secondary }} />
            <p className="text-sm text-gray-600">
              Parents are not advised to pack any evening snack for their children — the school
              provides breakfast and lunch at school.
            </p>
          </div>
        </SectionCard>

        {/* Downloads */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/Resources/PRIMARY SCHOOL REQUIREMENTS 2026.docx"
            download
            className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-transform hover:scale-105 active:scale-95 shadow-md"
            style={{ backgroundColor: brandColors.secondary }}
          >
            <LuDownload className="w-5 h-5" />
            Download Requirement Sheet 2026
          </a>
          <a
            href="/Resources/APPLICATION FOR ADMISSION.docx"
            download
            className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-md"
            style={{ backgroundColor: brandColors.primary, color: brandColors.secondary }}
          >
            <LuFileText className="w-5 h-5" />
            Download Application Form
          </a>
        </motion.div>
      </main>

      <GJSFooter />
    </div>
  );
};

export default FeesPage;
