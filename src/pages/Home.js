import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Carousel from '../partials/Carousel';
// import Tabs from '../partials/Tabs';
import Process from '../partials/Process';
// import PricingTables from '../partials/PricingTables';
// import TestimonialsBlocks from '../partials/TestimonialsBlocks';
// import FeaturesBlocks from '../partials/FeaturesBlocks';
// import Cta from '../partials/Cta';
import Footer from '../partials/Footer';
import AboutTransition from "../partials/AboutTransition";
import Instagram from "../partials/Instagram";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <Carousel />
        {/*<Stats />*/}
        <AboutTransition />
        <Process />
        <Instagram />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;