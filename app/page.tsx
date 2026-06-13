import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Oursuccess from '../components/ourSuccess';
import CloudSoft from '../components/cloudSoft';
import WhatIs from '../components/whatIs';
import WhatYouCanDoWithTOTC from "../components/WhatYouCanDoWithTOTC";
import OurFeatures from "../components/ourFeatures";
export default function Home() {
  return (
    <>
      <section className="bg-[#49BBBD] overflow-hidden w-full ">
        <Navbar />
        <Hero />
      </section>
      <Oursuccess />
      <CloudSoft />
      <WhatIs />
      <WhatYouCanDoWithTOTC />
      <OurFeatures />
    </>
  );
}
