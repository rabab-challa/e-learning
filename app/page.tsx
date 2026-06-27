import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Oursuccess from '../components/ourSuccess';
import CloudSoft from '../components/cloudSoft';
import WhatIs from '../components/whatIs';
import WhatYouCanDo from "../components/whatYouCanDo";
import OurFeatures from "../components/ourFeatures";
import ExploreCourses from "../components/exploreCourses";
import Testimonial from "../components/testimonial";
import LatestNews from "../components/latestNews";
import Footer from "../components/footer";
export default function Home() {
  return (
    <>
      <section className="bg-[#49BBBD] overflow-hidden w-full ">
        <Navbar variant="home" />
        <Hero />
      </section>
      <section className="bg-[#ffffff] overflow-hidden w-full ">
        <Oursuccess />
        <CloudSoft />
        <WhatIs />
        <WhatYouCanDo/>
        <OurFeatures />
        <ExploreCourses />
        <Testimonial />
        <LatestNews />
      </section>
      <section className="bg-dark-blue8 overflow-hidden w-full ">
        <Footer />
      </section>
    </>
  );
}
