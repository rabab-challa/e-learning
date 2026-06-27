import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Hero from "../../components/blog/hero";
import ReadingBlog from "../../components/blog/readingBlog";
export default function Home() {
  return (
    <>
      <section className="bg-white overflow-hidden w-full">
        <Navbar variant="default" />
       </section>
       <Hero />
       <ReadingBlog />
      <section className="bg-dark-blue8 overflow-hidden w-full ">
        <Footer />
      </section>
    </>
  );
}