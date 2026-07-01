import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Hero from "../../components/blog/heroBlog";
import ReadingBlog from "../../components/blog/readingBlog";
import RelatedBlog from "../../components/blog/relatedBlog";
export default function Home() {
  return (
    <>
      <section className="bg-white overflow-hidden w-full">
        <Navbar variant="default" />
       </section>
       <Hero />
       <ReadingBlog />
       <RelatedBlog />
      <section className="bg-dark-blue8 overflow-hidden w-full ">
        <Footer />
      </section>
    </>
  );
}