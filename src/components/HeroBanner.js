import InBoundLink from "./InBoundLink";
import classNames from "classnames";
import { Box, Container, Typography } from "@mui/material";

const HeroBanner = ({
  title,
  subtitle,
  ctaLabel,
  ctaLink,
  secondaryLabel,
  secondaryLink,
  regularPadding,
  className,
  outSource,
  ctaOutSource,
}) => {
  const classes = classNames(regularPadding && `p-4 lg:pb-12`, className);
  return (
    <Box className={`w-full flex justify-center items-center ${classes}`}>
      <Box className="w-full h-full flex flex-wrap justify-center items-center text-center max-w-[800px] mx-auto">
        <Typography
          component="h1"
          className="font-black w-full text-[40px] lg:text-[85px] lg:leading-[8rem]"
        >
          {title}
        </Typography>
        <Typography
          component="h3"
          className="w-full text-md lg:text-[30px] lg:leading-[3rem] my-8"
        >
          {subtitle}
        </Typography>
        <Box className="w-full flex flex-wrap gap-[10px] justify-center items-center">
          <InBoundLink
            cta
            to={ctaLink}
            ctaOutSource={ctaOutSource}
            className="w-full md:w-fit flex-auto min-h-[50px] flex justify-center items-center"
          >
            {ctaLabel}
          </InBoundLink>
          <InBoundLink
            secondary
            to={secondaryLink}
            outSource={outSource}
            className="w-full md:w-fit flex-auto min-h-[50px] flex justify-center items-center"
          >
            {secondaryLabel}
          </InBoundLink>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;
