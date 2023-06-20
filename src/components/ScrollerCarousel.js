import { Typography } from "@mui/material";
import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import { testData } from "@/context/features-data";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const ScrollerCarousel = ({ options, data, className }) => {
  const classes = classNames(
    `w-full md:w-3/12 flex gap-[10px] h-full gap-[10px] justify-center items-center rounded bg-white shadow-lg shadow-[#17171720] p-5 opacity-25`
  );

  const parentClasses = classNames(className, `w-full`);

  const FeatureLabel = ({ label }) => {
    return (
      <Typography
        component="span"
        className="self-center font-black"
        fontStyle="italic"
      >
        {label}
      </Typography>
    );
  };

  // * If data is missing use test data
  if (!data?.length) {
    data = testData;
  }

  // * If options are missing use default options
  if (!options) {
    options = {
      type: "loop",
      perPage: 6,
      perMove: 1,
      arrows: false,
      pagination: false,
      autoplay: "playing",
      interval: "1500",
      lazyLoad: true,
      flickPower: 1,
      gap: "2rem",
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
          width={75}
          height={75}
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
      extensions={{ AutoScroll }}
    >
      {renderFeatures}
    </Splide>
  );
};

export default ScrollerCarousel;
