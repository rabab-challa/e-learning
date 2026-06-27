import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
export default function Home() {
  return (
    <>
      <section className="bg-white overflow-hidden w-full">
        <Navbar variant="default" />
       </section>
      <section className="bg-dark-blue8 overflow-hidden w-full ">
        <Footer />
      </section>
    </>
  );
}