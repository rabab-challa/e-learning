import React from 'react'
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Oursuccess from '../components/ourSuccess';
export default function Home() {
  return (
    <>
      <section className="bg-[#49BBBD] overflow-hidden w-full ">
        <Navbar />
        <Hero />
        
      </section>
      <Oursuccess />
    </>
  );
}
