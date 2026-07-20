import React from 'react';
import { Link } from 'react-router-dom';
import { LuArrowLeft } from 'react-icons/lu';

const PrincipalMessage = () => {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#2D2622]">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F0E4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E7D4B9] bg-white text-sm font-medium text-[#59311B] hover:bg-[#FFF3D8] transition"
          >
            <LuArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B1742F]">Gombe Junior School — Gulu Campus</p>
            <h1 className="text-xl sm:text-2xl font-semibold text-[#800E13]">Principal&apos;s Message</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="rounded-none border border-[#F0E4D8] bg-white shadow-[0_40px_120px_rgba(128,14,19,0.06)] p-8 sm:p-12">
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="shrink-0">
              <img
                src="/GJS-Gulu/CALNONO%20PATRICK%20-%20PRINCIPAL.jpeg"
                alt="Mr. Calnono Patrick - Principal"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover object-top shadow-md border-4 border-[#FFD700]"
              />
            </div>
            <div>
              <p className="inline-flex items-center rounded-full bg-[#FFF1D8] px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B1742F]">
                A message from the Principal
              </p>
              <p className="mt-3 text-lg font-bold text-[#59311B]">Mr. Calnono Patrick</p>
              <p className="text-sm text-[#6B4A3F]">Principal, Gombe Junior School — Gulu</p>
            </div>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#3D2D25]">
            <p className="text-lg font-semibold text-[#800E13]">Welcome to Gombe Junior School — Gulu.</p>

            <p>
              It is with immense pride and excitement that I welcome you to Gombe Junior School Gulu. Our school is built on a foundation of academic excellence, holistic education and a forward-thinking approach to modern education.
            </p>

            <p>
              Choosing the right school for your child is one of the most critical decisions you will make as a parent. At Gombe Junior School Gulu, we have designed an environment where every child is seen and supported as an individual.
            </p>

            <p>
              Our mission is to provide quality holistic education that fosters creativity, critical thinking and collaboration to produce competent citizens, with our vision being to sit at the helm of producing competent, responsible, self-reliant and flexible citizens.
            </p>

            <div className="rounded-none border border-[#F4E2C9] bg-[#FFF5E2] p-5 space-y-4">
              <p className="font-semibold text-[#800E13]">What sets us apart as Gombe Junior School — Gulu:</p>
              <ul className="space-y-3 text-[#3D2D25]">
                <li>
                  <strong className="text-[#800E13]">Outstanding academic performance</strong> — Gombe Junior School Gulu is among the top performing schools in Uganda tested nationally. We offer a Uganda-based curriculum in subjects like Mathematics, English, Social Studies, Integrated Science, Religious Education, Literacy, Reading and Handwriting, accompanied with language development in Kiswahili, French and Luo.
                </li>
                <li>
                  <strong className="text-[#800E13]">Holistic education</strong> — We believe that education extends far beyond academics. We are committed to fostering a holistic learning environment focused on competitive sports, chess, piano, scouting, soccer academy and our dance group (Happy Kids).
                </li>
                <li>
                  <strong className="text-[#800E13]">Dedicated educators</strong> — We have a big team of qualified, empathetic and experienced staff trained to guide children through the new normal of modern education.
                </li>
                <li>
                  <strong className="text-[#800E13]">ICT integration</strong> — The integration of ICT into teaching and learning, driven by our expertized personnel, has made learning real and meaningful through research work which exposes our children to global awareness.
                </li>
                <li>
                  <strong className="text-[#800E13]">Spiritual development</strong> — As fearing the Lord is the beginning of wisdom, we celebrate all recognized religions to instil discipline and the proper upbringing of our children during the allocated time in the school program.
                </li>
              </ul>
            </div>

            <p>
              We view education as a collaborative partnership between the school, the home and the local community. We maintain strict policies and invite other stakeholders to be active co-creators of our school culture.
            </p>

            <p>
              Our doors are open for inquiries and enrolment. We invite any well-wisher to visit us and discover how we help children achieve a bright future at our institution.
            </p>

            <p>
              Thank you for the trust exhibited by parents, guardians and other stakeholders. Together we can make Gombe Junior School Gulu continue shining.
            </p>

            <p className="text-sm uppercase tracking-[0.18em] text-[#B1742F]">Warmest regards</p>
            <p className="text-lg font-semibold text-[#59311B]">Mr. Calnono Patrick</p>
            <p className="text-sm text-[#6B4A3F]">Principal, Gombe Junior School — Gulu</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrincipalMessage;
