import { Typography } from "@mui/material";
import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import { testData } from "@/context/features-data";

const FeaturesCarousel = ({ options, data, className }) => {
  const classes = classNames(
    `w-full md:w-3/12 flex flex-col h-full gap-[20px] justify-end items-center rounded bg-white shadow-lg shadow-[#17171720] p-5 transition-all hover:bg-pond cursor-grab hover:text-white`
  );

  const parentClasses = classNames(className, `w-full my-24`);

  const FeatureLabel = ({ label }) => {
    return (
      <Typography
        component="span"
        className="self-end font-black"
        fontStyle="italic"
      >
        {label}
      </Typography>
    );
  };

  // * If data is missing
  if (!data?.length) {
    data = testData;
  }
  // * If options are missing
  if (!options) {
    options = {
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
    };
  }
  const renderFeatures = data?.map((feature) => {
    return (
      <SplideSlide
        key={feature?.title}
        className={`${classes} ${feature?.extraClass}`}
      >
        <Image
          width={200}
          height={200}
          src={feature?.image}
          alt={`Illustration for ${feature?.title}`}
        />
        <FeatureLabel label={feature?.title} />
      </SplideSlide>
    );
  });

  return (
    <Splide
      className={`${parentClasses}`}
      options={{
        ...options,
      }}
    >
      {renderFeatures}
    </Splide>
  );
};

export default FeaturesCarousel;
