"use client";
import BackgroundNumber from "@/components/BackgroundNumber";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import HeroBanner from "@/components/HeroBanner";
import MediaAndText from "@/components/MediaAndText";
import { Box } from "@mui/material";
import { createContext } from "react";
import CalendlyCTA from "@/components/CalendlyCTA";
import Disclaimer from "@/components/Disclaimer";
import StaxyPlatformOverview from "@/assets/images/staxy-platform-overview.png";
import FAQ from "@/components/FAQ";

import { features } from "@/context/features-data";
import { steps } from "@/context/steps-data";
import ImageBanner from "@/components/ImageBanner";
import ScrollerCarousel from "@/components/ScrollerCarousel";
import SectionTitle from "@/components/SectionTitle";
import "../app/globals.css";
import SharedLayout from "@/components/SharedLayout";

const HomePage = () => {
  const Context = createContext();

  const renderSteps = steps.map((step) => {
    const {
      title,
      description,
      className,
      mediaSrc,
      mediaAlt,
      mediaFirst,
      endBlock,
    } = step;
    return (
      <MediaAndText
        key={title}
        title={title}
        description={description}
        className={className}
        mediaSrc={mediaSrc}
        mediaAlt={mediaAlt}
        mediaFirst={mediaFirst}
        endBlock={endBlock}
      />
    );
  });
  return (
    <SharedLayout>
      <Box fluid className="min-w-full max-w-[1140px]">
        <HeroBanner
          title="Imagine a platform"
          subtitle="Where you'll able to sell courses. Organize Events. Create Groups. Create Forums. Have personalized member profiles. And so much more!"
          ctaLabel="Schedule a Call"
          ctaLink="https://calendly.com/staxy"
          ctaOutSource
          className="mt-24"
          regularPadding
        />
        <ScrollerCarousel
          options={{
            type: "loop",
            perPage: 6,
            perMove: 1,
            arrows: false,
            pagination: false,
            autoplay: "playing",
            interval: "750",
            lazyLoad: true,
            drag: false,
            gap: "2rem",
            padding: "2rem",
            slideFocus: true,
            breakpoints: {
              640: {
                perPage: 1,
              },
            },
          }}
          data={features}
        />

        <ImageBanner src={StaxyPlatformOverview} className="my-24 bg-purpy" />
        <BackgroundNumber
          className="my-24"
          revenue="176,000"
          label="Annual Revenue"
          description="My clients are killing it! And I believe you should too."
        />
        <SectionTitle title="Enrolment Steps" />

        <FeaturesCarousel
          options={{
            perPage: 3,
            perMove: 1,
            arrows: false,
            pagination: false,
            lazyLoad: true,
            flickPower: 1,
            gap: "2rem",
            padding: "4rem",
            slideFocus: true,
            breakpoints: {
              640: {
                perPage: 1,
              },
            },
          }}
          data={features}
        />
        <SectionTitle title="Enrolment Steps" />
        <Box className="px-4 w-full max-w-[600px] mx-auto flex flex-col justify-center items-center gap-[10px]">
          {renderSteps}
        </Box>
        <CalendlyCTA
          title="Ready to go live?"
          description="You do not need to know P from PROGRAMMING to make your dream."
          link="https://calendly.com/staxy"
          label="schedule"
          ctaOutSource
          containerClass="min-h-[600px] flex justify-center items-center"
        />
        <FAQ className="w-full max-w-[600px] mx-auto my-24 px-4" />
      </Box>
    </SharedLayout>
  );
};

export default HomePage;
