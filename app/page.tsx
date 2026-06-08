import React from 'react'
import Navbar from "../components/navbar";
import Hero from "../components/hero";
export default function Home() {
  return (
    <>
      <section className="bg-[#49C5C1] rounded-b-[200px]  w-full overflow-hidden">
        <Navbar />
        <Hero />
      </section>
    </>
  );
}
