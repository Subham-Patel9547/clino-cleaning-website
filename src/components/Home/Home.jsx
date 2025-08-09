import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import AboutUs from "../AboutUs/AboutUs";
import OurServices from "../OurServices/OurServices";
import ChooseSection from "../ChooseSection/ChooseSection";
import PricingPlans from "../PricingPlans/PricingPlans";
import CleaningQuoteSection from "../CleaningQuoteSection/CleaningQuoteSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <ChooseSection />
      <PricingPlans />
      <CleaningQuoteSection />
    </>
  );
};

export default Home;
