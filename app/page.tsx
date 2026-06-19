import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Oursuccess from '../components/ourSuccess';
import CloudSoft from '../components/cloudSoft';
import WhatIs from '../components/whatIs';
import WhatYouCanDo from "../components/whatYouCanDo";
import OurFeatures from "../components/ourFeatures";
import ExploreCourses from "../components/exploreCourses";
export default function Home() {
  return (
    <>
      <section className="bg-[#49BBBD] overflow-hidden w-full ">
        <Navbar />
        <Hero />
      </section>
      <section className="bg-[#ffffff] overflow-hidden w-full ">
        <Oursuccess />
        <CloudSoft />
        <WhatIs />
        <WhatYouCanDo/>
        <OurFeatures />
        <ExploreCourses />
        <br/>
      </section>
    </>
  );
}
