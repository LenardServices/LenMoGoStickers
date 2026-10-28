import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import FacebookCTA from "./components/FacebookCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PlaceholderNotice from "./components/PlaceholderNotice";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-gold-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-900"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <FacebookCTA />
        <FAQ />
      </main>
      <Footer />
      <PlaceholderNotice />
    </>
  );
}
