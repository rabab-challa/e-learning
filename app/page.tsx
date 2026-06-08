import React from 'react'
import Navbar from "../components/navbar";
import Hero from "../components/hero";
export default function Home() {
  return (
    <>
      <section className="bg-[#49BBBD] w-full rounded-b-[300px]  w-full overflow-hidden">
        <Navbar />
        <Hero />
      </section>
    </>
  );
}
