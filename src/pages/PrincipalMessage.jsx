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
            <p className="text-xs uppercase tracking-[0.2em] text-[#B1742F]">Gombe Junior School</p>
            <h1 className="text-xl sm:text-2xl font-semibold text-[#800E13]">Principal&apos;s Message</h1>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="rounded-[32px] border border-[#F0E4D8] bg-white shadow-[0_40px_120px_rgba(128,14,19,0.06)] p-8 sm:p-12">
          <div className="mb-8">
            <p className="inline-flex items-center rounded-full bg-[#FFF1D8] px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B1742F]">
              A message from the Principal
            </p>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#3D2D25]">
            <p className="text-lg font-semibold text-[#800E13]">Greetings dear Parents, staff, Pupils and well-wishers of the Mighty Gombe Junior School.</p>

            <p>
              We thank the Lord that our School is celebrating thirteen years of existence. We thank the Lord for the success achieved over years. As a School that caters for Holistic Education, We thank the Lord that on the Cognitive side that we have always exhibited an overwhelming academic performance in PLE atleast 95% performance and above every year however also recording 100% Pass in PLE 2017 and 2022.
            </p>

            <p>
              We also note that the School is one of the giants in the National Mathematics contest and also for 2 out of the 13 years we have been top of the list that is in 2018 and 2019. Represented by our students Theoddore Walcott Ssebadduka and Asanda Camila respectively. This shows that at Gombe Junior School we are not only after Participation but priotise excellence.
            </p>

            <p>
              As any School which Looks at a holistic approach of Education we also look at the psychomotor, we as Gombe Junior School look at developing Children’s talents and skills. This is done through enabling children to choose clubs which can promote their talents and skills. Among clubs here we have Soccer academy, Piano Club, Violin Club, MDD, Food and Nutrition, Chess Club, Netball Club, Happy Kids, Scouts, Robotics just to mention but a few. Our School normally spares an hour in week days and two hours over weekends to help children develop their talents. We however as a school allow children to swim once a week. Swimming in our School is a given for the children in our School and we do not pay for this service because we regard it as one of our take home for all children in our School.
            </p>

            <div className="rounded-3xl border border-[#F4E2C9] bg-[#FFF5E2] p-5">
              <p className="font-semibold text-[#800E13] mb-3">Clubs and activities include:</p>
              <ul className="list-disc list-inside space-y-2 text-[#3D2D25]">
                <li>Soccer Academy</li>
                <li>Piano Club</li>
                <li>Violin Club</li>
                <li>MDD</li>
                <li>Food and Nutrition</li>
                <li>Chess Club</li>
                <li>Netball Club</li>
                <li>Happy Kids</li>
                <li>Scouts</li>
                <li>Robotics</li>
              </ul>
            </div>

            <p>
              On the other hand as we wind up on developing children holistically Gombe Junior School cherishes building the affective domain and this is done through inculcating spiritual values through mentoring them in the religions parents have registered them with us. We have supported our Children through holding religious hours during week days on Tuesday, on Friday and on Sunday. Among activities here are religious instructions, Catechism lessons, Darasa lessons, Bible Sharing, Masses and Services. We have hosted the Arch Bishop of Kampala severally to administer confirmation t the catholic community; we have also severally hosted the Bishop of Namirembe Diocese for a pastoral tour in our School and administering Confirmation to Children in the Anglican community. On the other side the students from the Muslim Community during fasting periods to break their fast. We have equally hosted the Supreme Mufti severally in our school and as well-organized Quran Competitions. God Fearing being our first core value makes us always focus children on prayer life.
            </p>

            <p>
              We cherish engaging Our Children in activities of Corporate Social Responsibility through helping children to mobilize aid to help the needy in our Community this has been done regularly to help our children to develop.
            </p>

            <p className="text-sm uppercase tracking-[0.18em] text-[#B1742F]">All regards from</p>
            <p className="text-lg font-semibold text-[#59311B]">Kiggundu Richard</p>
            <p className="text-sm text-[#6B4A3F]">Principal GJS</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrincipalMessage;
