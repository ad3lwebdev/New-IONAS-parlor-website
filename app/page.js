import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <TrustBar />
        <Story />
        <Menu />
        <Experience />
        <Gallery />
        <Testimonials />
        <Location />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
