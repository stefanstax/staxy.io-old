import { Box, Typography } from "@mui/material";
import InBoundLink from "./InBoundLink";
import classNames from "classnames";

const CalendlyCTA = ({
  title,
  description,
  link,
  label,
  containerClass,
  boxClass,
  ctaOutSource,
}) => {
  const containerClasses = classNames(
    containerClass,
    `w-full bg-gradient-to-b from-matte from-[67%] to-transparent to-[32%] text-center`
  );
  const boxClasses = classNames(
    boxClass,
    `w-full max-w-[600px] my-8 rounded-[20px] text-beige drop-shadow-2xl px-4 py-10 mx-auto flex flex-col justify-center items-center`
  );
  return (
    <Box className={containerClasses}>
      <Box className={boxClasses}>
        <Typography
          component="h2"
          className="text-[40px] lg:text-[65px] font-black"
        >
          {title}
        </Typography>
        <Typography component="p" className="text-[20px] my-4 mb-8">
          {description}
        </Typography>
        <InBoundLink
          to={link}
          // cta
          ctaOutSource={ctaOutSource}
          className="w-fit min-w-[300px] p-4 rounded-[20px] bg-byzantine text-beige byzantine-shadow text-[40px] text-center uppercase no-underline hover:animate-pulse"
        >
          {label}
        </InBoundLink>
      </Box>
    </Box>
  );
};

export default CalendlyCTA;
