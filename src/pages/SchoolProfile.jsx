import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LuArrowLeft, LuMapPin, LuPhone, LuMail, LuAward, LuBookOpen,
  LuUsers, LuActivity, LuHeart, LuBuilding, LuCompass, LuShield,
  LuSparkles, LuCheck, LuClock, LuBriefcase
} from 'react-icons/lu';

const SchoolProfile = () => {
  const brandColors = {
    primary: '#FFD700',   // Yellow
    secondary: '#800E13', // Burgundy
    cream: '#FFF9F5',
  };

  const location = useLocation();
  const [activeTab, setActiveTab] = useState('identity');

  useEffect(() => {
    if (location.hash === '#mission' || location.hash === '#core-values') {
      setActiveTab('identity');
      setTimeout(() => {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [location]);

  const tabs = [
    { id: 'identity', label: 'Identity & History', icon: LuCompass },
    { id: 'academics', label: 'Academics & ICT', icon: LuBookOpen },
    { id: 'facilities', label: 'Facilities', icon: LuBuilding },
    { id: 'activities', label: 'Co-Curricular & Clubs', icon: LuSparkles },
    { id: 'community', label: 'Staff & Community', icon: LuHeart },
    { id: 'sister-schools', label: 'Sister Schools', icon: LuUsers },
  ];

  const coreValues = [
    { name: 'God Fearing', desc: 'Putting God first in all our endeavors.' },
    { name: 'Respect', desc: 'Value yourself, others, and the environment.' },
    { name: 'Integrity', desc: 'Acting with honesty and strong moral principles.' },
    { name: 'Teamwork', desc: 'Collaborating together to achieve greatness.' },
    { name: 'Excellence', desc: 'Striving to be outstanding in everything we do.' },
    { name: 'Time Management', desc: 'Valuing time as a resource for success.' },
  ];

  const clubs = [
    'Chess Club',
    'Robotics Club',
    'Scouts Club',
    'Piano Club',
    'Jazz Band Club',
    'Violin Club',
    'Guitar Club',
    'Happy Kids Club',
    'MDD Club',
    'Food and Nutrition Club',
    'Soccer Academy',
    'Art and Crafts Club',
    'Netball Club',
    'Volleyball Club',
    'Board Games Club',
    'Dance Group (Happy Kids)'
  ];

  const sisterSchools = [
    { name: 'St. Andrew Kaggwa Gombe High School - Kawaala', loc: 'Kampala - Hoima Road', url: 'http://www.kawaala.gombehighschool.ac.ug/' },
    { name: 'St. Andrew Kaggwa Gombe High School - Bujuuko', loc: 'Kampala - Mityana Road', url: 'http://www.bujuuko.gombehighschool.ac.ug/' },
    { name: 'Gombe Junior School - Kikajjo', loc: 'Kikajjo, Kampala', url: 'https://www.kikajjo.gombejuniorschool.ac.ug' },
    { name: 'Gombe Junior School - Gulu', loc: 'Gulu City', url: 'https://www.gulu.gombejuniorschool.ac.ug' },
    { name: 'ScoobyDoo International School Uganda - Katale', loc: 'Along Sseguku - Katale Rd', url: 'https://www.katale.scoobydoointernational.ac.ug' },
    { name: 'ScoobyDoo International School Uganda - Gulu', loc: 'Gulu City (Same Location)', url: 'https://www.gulu.scoobydoointernational.ac.ug' },
    { name: 'Gombe Institute of Science & Technology', loc: 'Kabalagala - Muzaana Zone, Kampala', url: 'http://gibst.ac.ug' },
    { name: 'International Education Pathway Program', loc: 'Gombe Education Service', url: 'https://www.ipp.ges.ac.ug' }
  ];

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
              <p className="text-xs uppercase tracking-[0.2em] text-[#B1742F] text-right">About Us</p>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#800E13]">School Profile</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative text-white py-16 overflow-hidden" style={{ backgroundColor: brandColors.secondary }}>
        {/* Wavy lines / circles background */}
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
            <img
              src="/Gombe Junior School logo.png"
              alt="Gombe Junior School Logo"
              className="w-24 h-24 mx-auto mb-6 object-contain drop-shadow-lg"
            />
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Gombe Junior School
            </h2>
            <p className="text-lg sm:text-xl font-medium mb-6 text-yellow-300">
              Holistic Education
            </p>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed">
              Our School Profile spells out information on our Identity, our vision, mission, core values, academic information, co-curricular activities, staffing and admission information &mdash; giving you a general picture of our School Culture in Gulu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-none shadow-md border border-gray-100 p-4 space-y-1">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold px-3 mb-3">Sections</p>
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-none text-left text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white shadow-md'
                        : 'text-gray-600 hover:bg-[#FFF6CC] hover:text-[#800E13]'
                    }`}
                    style={isActive ? { backgroundColor: brandColors.secondary } : {}}
                  >
                    <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-[#800E13]'}`} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Pane */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-none shadow-xl border border-[#F0E4D8] p-8 sm:p-10 min-h-[500px]"
              >

                {/* ── TAB 1: IDENTITY & HISTORY ── */}
                {activeTab === 'identity' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-[#800E13] mb-2">School Identity</h3>
                      <p className="text-gray-500">The foundation, location, and beliefs that define our mixed day school.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-[#FFF9F5] p-5 rounded-none border border-[#F5E6DA] space-y-2">
                        <span className="text-xs font-bold uppercase text-[#B1742F]">Nature of School</span>
                        <h4 className="text-lg font-bold text-gray-800">Mixed Day Private Primary School</h4>
                        <p className="text-sm text-gray-600">Gombe Junior School Gulu is a mixed day private school, currently serving learners from P.1 to P.6.</p>
                      </div>

                      <div className="bg-[#FFF9F5] p-5 rounded-none border border-[#F5E6DA] space-y-2">
                        <span className="text-xs font-bold uppercase text-[#B1742F]">Founding & Licensing</span>
                        <h4 className="text-lg font-bold text-gray-800">Founded in 2025</h4>
                        <p className="text-sm text-gray-600">
                          Founded by <strong className="text-gray-800">Mr. Kyewalabye Male David</strong>, founder of Gombe Education Service and a former cultural leader in the Buganda Kingdom Government. Duly licensed by the Ministry of Education and Sports (MoES) under License No. <strong className="text-gray-800">ME/P/13561</strong>.
                        </p>
                      </div>
                    </div>

                    {/* Motto Story Card */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF7E6] to-[#FFF1D8] p-6 rounded-none border-2 border-yellow-300">
                      <div className="absolute inset-y-0 right-0 hidden sm:flex items-center justify-center pr-4">
                        <img
                          src="/Ssosolye%20or%20Red-chested%20Cuckoo%20(Cuculus%20solitarius).png"
                          alt="Ssosolye Red-chested Cuckoo"
                          className="w-28 h-28 object-contain opacity-20 pointer-events-none"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-[#800E13] mb-3 flex items-center gap-2 pr-24">
                        <LuCompass className="w-5 h-5 text-yellow-500" />
                        Our Motto: &ldquo;Ssosolye Bwatafa&rdquo;
                      </h4>
                      <div className="text-gray-700 text-sm leading-relaxed space-y-2 pr-24">
                        <p>Literally showing that we can achieve success through perseverance.</p>
                        <p>
                          &ldquo;Ssosolye&rdquo; is a Kiganda name for a bird that eats ripe bananas but continues pecking unripe ones until it falls on a ripe one after a while (the Red-Chested Cuckoo). Through its perseverance, it gets the ripe banana. The message is that through toiling we can achieve success.
                        </p>
                      </div>
                    </div>

                    {/* Quick Specs */}
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Location & Contact Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-start gap-3">
                          <LuMapPin className="w-5 h-5 text-red-500 mt-0.5" />
                          <div>
                            <strong className="text-gray-800 block">School Location</strong>
                            <span className="text-gray-600">Lukung Cell, Pece Parish Ward, Laroo-Pece Division, Gulu City Council.</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <LuPhone className="w-5 h-5 text-green-600 mt-0.5" />
                          <div>
                            <strong className="text-gray-800 block">School Contacts</strong>
                            <span className="text-gray-600 block">Mobile: 0708 800 008 / 0760 063 577</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <LuMail className="w-5 h-5 text-blue-500 mt-0.5" />
                          <div>
                            <strong className="text-gray-800 block">School Email</strong>
                            <span className="text-gray-600 block">Email: gombejuniorschool@gmail.com</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <LuBuilding className="w-5 h-5 text-purple-500 mt-0.5" />
                          <div>
                            <strong className="text-gray-800 block">Ownership</strong>
                            <span className="text-gray-600">Owned by Mr. Kyewalabye Male David under Gombe Education Service.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vision & Mission */}
                    <div id="mission" className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-6">
                      <div className="bg-red-50/50 p-6 rounded-none border border-red-100">
                        <h4 className="text-lg font-bold text-[#800E13] mb-2">Our Vision</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          &ldquo;At the helm of producing Competent, Responsible, Self-Reliant and Flexible Citizens.&rdquo;
                        </p>
                      </div>
                      <div className="bg-yellow-50/30 p-6 rounded-none border border-yellow-100">
                        <h4 className="text-lg font-bold text-[#B1742F] mb-2">Our Mission</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          &ldquo;To provide Quality Holistic Education that Fosters Creativity, Critical thinking and Collaboration to Produce Competent Global Citizens.&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Core Values */}
                    <div id="core-values" className="border-t border-gray-100 pt-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Core Values</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {coreValues.map((value, i) => (
                          <div key={i} className="p-4 bg-white rounded-none border border-gray-100 shadow-sm hover:border-yellow-300 transition-colors">
                            <span className="text-[#800E13] font-bold text-lg block mb-1">0{i+1}. {value.name}</span>
                            <span className="text-xs text-gray-500">{value.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ── TAB 2: ACADEMICS & ICT ── */}
                {activeTab === 'academics' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-[#800E13] mb-2">Academics & ICT</h3>
                      <p className="text-gray-500">Combining national curriculum excellence with modern digital instruction.</p>
                    </div>

                    <div className="bg-[#FFF9F5] p-6 rounded-none border border-[#F5E6DA] space-y-4">
                      <h4 className="text-xl font-bold text-gray-800">Curriculum Offered</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Gombe Junior School Gulu offers a <strong className="text-gray-800">Uganda-based curriculum</strong> covering Mathematics, English, Social Studies, Integrated Science, Religious Education, Literacy, Reading and Handwriting, accompanied by language development in <strong className="text-gray-800">Kiswahili, French and Luo</strong>.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        The school currently serves learners from P.1 to P.6, a limit strategically set to lay a firm foundation for our learners before they reach P.7.
                      </p>
                    </div>

                    {/* Interactive lower school & ICT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-5 rounded-none border border-gray-100 shadow-sm space-y-2">
                        <div className="flex items-center gap-2 mb-2 text-[#4FB8FF]">
                          <LuActivity className="w-5 h-5" />
                          <h5 className="font-bold text-gray-800">ICT Integration</h5>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Teaching and learning is driven by ICT integration, with expertized personnel making learning real and meaningful through research work that exposes children to global awareness.
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-none border border-gray-100 shadow-sm space-y-2">
                        <div className="flex items-center gap-2 mb-2 text-[#5FD068]">
                          <LuCheck className="w-5 h-5" />
                          <h5 className="font-bold text-gray-800">Consistent Improvement</h5>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          There has been consistent improvement in learner performance since the school opened in 2025, with Gombe Junior School Gulu counted among the top performing schools tested nationally.
                        </p>
                      </div>
                    </div>

                  </div>
                )}

                {/* ── TAB 3: FACILITIES ── */}
                {activeTab === 'facilities' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-[#800E13] mb-2">School Facilities</h3>
                      <p className="text-gray-500">A day-school environment designed for comfortable learning.</p>
                    </div>

                    <div className="bg-[#FFF9F5] p-6 rounded-none border border-[#F5E6DA] space-y-2">
                      <h5 className="font-bold text-gray-800">Mixed Day School</h5>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Gombe Junior School Gulu operates as a day school (no boarding facilities), with classrooms structured for learners from P.1 to P.6 and ICT-enabled teaching spaces.
                      </p>
                    </div>

                    {/* Facility links — each opens the relevant gallery category */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                        { label: 'Classrooms', slug: 'classrooms' },
                        { label: 'ICT-Enabled Spaces', slug: 'ict-lab' },
                        { label: 'Offices', slug: 'offices' },
                        { label: 'Sports & Aerobics', slug: 'aerobics' },
                        { label: 'Club Spaces', slug: 'clubs' },
                        { label: 'School Compound', slug: 'campus' },
                      ].map((item, i) => (
                        <Link
                          key={i}
                          to={`/gallery?category=${item.slug}`}
                          className="p-4 bg-gray-50 rounded-none border border-gray-100 flex items-center justify-between group hover:border-[#800E13] hover:bg-red-50/40 transition-colors"
                        >
                          <span className="text-sm font-semibold text-gray-700 group-hover:text-[#800E13] transition-colors">{item.label}</span>
                          <span className="text-[#800E13] text-xs font-bold flex items-center gap-1">
                            View <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                          </span>
                        </Link>
                      ))}
                    </div>

                    <p className="text-xs text-gray-400 italic">
                      Further facility photographs will be published as the campus continues to grow.
                    </p>
                  </div>
                )}

                {/* ── TAB 4: CO-CURRICULAR & CLUBS ── */}
                {activeTab === 'activities' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-[#800E13] mb-2">Co-Curricular & Clubs</h3>
                      <p className="text-gray-500">Fostering talent and teamwork outside the classroom.</p>
                    </div>

                    <div className="bg-yellow-50/40 p-6 rounded-none border border-yellow-200">
                      <div className="flex items-center gap-2 mb-2 text-yellow-700">
                        <LuClock className="w-5 h-5" />
                        <h4 className="font-bold text-gray-800">Holistic Development</h4>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Gombe Junior School Gulu is very much alive in co-curricular activities, with pupils actively involved in athletics, music, dance and drama, alongside a variety of student clubs.
                      </p>
                    </div>

                    {/* Sports & Clubs lists */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-none border border-gray-100 shadow-sm">
                        <h5 className="font-bold text-[#800E13] mb-3 pb-2 border-b border-gray-100">Sports & Activities</h5>
                        <ul className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                          <li>🏃 Athletics</li>
                          <li>🎶 Music</li>
                          <li>💃 Dance</li>
                          <li>🎭 Drama</li>
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-none border border-gray-100 shadow-sm">
                        <h5 className="font-bold text-[#800E13] mb-3 pb-2 border-b border-gray-100">Student Clubs</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                          {clubs.map((club, idx) => (
                            <Link
                              key={idx}
                              to="/gallery?category=clubs"
                              className="flex items-center gap-1.5 hover:text-[#800E13] transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                              {club}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── TAB 5: STAFF & COMMUNITY ── */}
                {activeTab === 'community' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-[#800E13] mb-2">Staffing & Community</h3>
                      <p className="text-gray-500">Our people and partnerships that keep the school running.</p>
                    </div>

                    {/* Staff & Admin */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-800">Staffing</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-[#FFF9F5] p-5 rounded-none border border-[#F5E6DA]">
                          <span className="text-[#800E13] font-bold text-sm block mb-2">Teaching Staff</span>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Female: 6 &middot; Male: 11</span>
                            <span className="bg-[#800E13] text-white text-xs font-bold px-2 py-1 rounded-full">Total: 17</span>
                          </div>
                        </div>
                        <div className="bg-[#FFF9F5] p-5 rounded-none border border-[#F5E6DA]">
                          <span className="text-[#800E13] font-bold text-sm block mb-2">Non-Teaching Staff</span>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Female: 10 &middot; Male: 5</span>
                            <span className="bg-[#800E13] text-white text-xs font-bold px-2 py-1 rounded-full">Total: 15</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SMC */}
                    <div className="border-t border-gray-100 pt-6 space-y-3">
                      <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <LuUsers className="w-5 h-5 text-[#800E13]" />
                        School Management Committee
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        The partnership between the school and its stakeholders has been a long-standing one. Our <strong className="text-gray-800">11-member School Management Committee</strong> has been instrumental in the running of the school.
                      </p>
                      <Link
                        to="/about/management-committee"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#800E13] hover:underline"
                      >
                        Meet the Committee →
                      </Link>
                    </div>

                    {/* Spiritual development */}
                    <div className="bg-[#FFF9F5] p-5 rounded-none border border-[#F5E6DA] space-y-3 border-t border-gray-100 pt-6">
                      <h5 className="font-bold text-gray-800 flex items-center gap-2">
                        <LuHeart className="w-4 h-4 text-red-500" />
                        Spiritual Development
                      </h5>
                      <div className="text-xs text-gray-600 leading-relaxed space-y-3">
                        <p className="font-semibold text-gray-800">A Multi-Religious School</p>
                        <p>
                          At Gombe Junior School, we are committed to providing an inclusive learning environment where every child is respected, valued, and supported in both their academic and spiritual journey. We proudly welcome learners from diverse faith backgrounds, including Muslims, Catholics, Anglicans, Pentecostals, and Seventh-day Adventists.
                        </p>
                        <p>
                          We recognize the importance of nurturing each child&apos;s faith by providing opportunities for appropriate religious instruction, worship, and spiritual guidance in accordance with their beliefs. Our learners are encouraged to embrace values such as integrity, respect, compassion, discipline, and service, while appreciating the diversity of others.
                        </p>
                        <p>
                          By fostering a culture of mutual respect, tolerance, and unity, Gombe Junior School prepares children to become academically successful, morally upright, and socially responsible citizens who can thrive in a diverse and interconnected world.
                        </p>
                      </div>
                    </div>

                    {/* Community partnership */}
                    <div className="border-t border-gray-100 pt-6 space-y-2">
                      <h5 className="font-bold text-gray-800">Home, School & Community Partnership</h5>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We view education as a collaborative partnership between the school, the home, and the local community, and we invite parents, guardians and well-wishers to be active co-creators of our school culture.
                      </p>
                    </div>

                  </div>
                )}

                {/* ── TAB 6: SISTER SCHOOLS ── */}
                {activeTab === 'sister-schools' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-[#800E13] mb-2">Sister Schools</h3>
                      <p className="text-gray-500">Other institutions operating under the Gombe Education Service (GES).</p>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      Gombe Junior School Gulu is sister to several other academic institutions under the direct stewardship of <strong className="text-gray-800">Mr. Kyewalabye Male David</strong>:
                    </p>

                    <div className="space-y-3">
                      {sisterSchools.map((school, idx) => (
                        <a
                          key={idx}
                          href={school.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 bg-gray-50 hover:bg-[#FFF9F5] rounded-none border border-gray-100 flex items-center justify-between gap-4 transition-colors"
                        >
                          <div>
                            <span className="text-xs font-bold text-gray-400 block">Institution 0{idx+1}</span>
                            <span className="font-bold text-gray-800 text-sm sm:text-base">{school.name}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs bg-[#800E13]/10 text-[#800E13] font-semibold px-3 py-1.5 rounded-full flex-shrink-0 block">
                              {school.loc}
                            </span>
                            <span className="text-xs text-[#800E13] font-medium mt-1 inline-block">Visit website →</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Conclusion / Footer Statement */}
        <section className="mt-12 bg-white border border-[#F0E4D8] rounded-none p-8 text-center shadow-lg">
          <p className="text-[#800E13] font-bold text-xl mb-3">Holistic Education, Positive Futures</p>
          <p className="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
            &ldquo;Gombe Junior School Gulu is a learning institution which provides quality holistic education capable of nurturing children who will be able to face life with a positive attitude and be role models in society.&rdquo;
          </p>
        </section>
      </main>
    </div>
  );
};

export default SchoolProfile;
