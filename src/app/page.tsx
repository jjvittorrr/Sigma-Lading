import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Product from "@/components/Product";
import Process from "@/components/Process";
import Tech from "@/components/Tech";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Product />
        <Process />
        <Tech />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
