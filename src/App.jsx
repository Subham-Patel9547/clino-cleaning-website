import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import OurServices from "./components/OurServices/OurServices";
import ChooseSection from "./components/ChooseSection/ChooseSection";
import PricingPlans from "./components/PricingPlans/PricingPlans";
import CleaningQuoteSection from "./components/CleaningQuoteSection/CleaningQuoteSection";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollTotop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="pt-18 scroll-smooth">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/testimonial" element={<ChooseSection />} />
            <Route path="/pricing" element={<PricingPlans />} />
            <Route path="/blog" element={<CleaningQuoteSection />} />

            {/* coming-soon */}
            <Route path="/coming-soon" element={<ComingSoon />} />

            {/* page not found */}
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
