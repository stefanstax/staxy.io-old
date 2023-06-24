import { Typography } from "@mui/material";
import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { testData } from "@/context/features-data";
import { Icon } from "@iconify/react";

const FeaturesCarousel = ({ options, data, className }) => {
  const classes = classNames(
    `group w-full md:w-4/12 lg:w-3/12 xl:w-2/12 flex flex-col h-full gap-[20px] justify-center items-center rounded-[20px] bg-purpy text-white shadow-lg shadow-[#17171720] p-5 transition-all hover:bg-pond cursor-grab hover:text-white`
  );

  const parentClasses = classNames(className, `w-full my-24`);

  const FeatureLabel = ({ label }) => {
    return (
      <Typography
        component="span"
        className="group-hover:text-pond font-black bg-white w-full uppercase p-2 text-purpy text-center rounded drop-shadow-2xl"
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
        <Icon icon={feature?.image} fontSize={64} />
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
