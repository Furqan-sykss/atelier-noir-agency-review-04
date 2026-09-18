import Navigation from "../components/Navigation";
import Preloader from "../components/Preloader";
import Hero from "../components/Hero";
import StudioIntro from "../components/StudioIntro";
import SelectedWork from "../components/SelectedWork";
import Services from "../components/Services";
import Process from "../components/Process";
import StudioCulture from "../components/StudioCulture";
import Testimonial from "../components/Testimonial";
import Capabilities from "../components/Capabilities";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />

      <Navigation />
      <main>
        <Hero />
        <StudioIntro />
        <SelectedWork />
        <Services />
        <Process />
        <StudioCulture />
        <Testimonial />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
