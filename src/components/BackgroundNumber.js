import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import { useState } from "react";

const BackgroundNumber = ({
  regularPadding,
  revenue,
  label,
  description,
  className,
}) => {
  const classes = classNames(regularPadding && `p-4 lg:p-24`, className);
  const [colorRevenue, setColorRevenue] = useState(false);

  const activateColorRevenue = () => {
    setColorRevenue(true);
  };

  const deactivateColorRevenue = () => {
    setColorRevenue(false);
  };

  return (
    <Box
      onMouseEnter={activateColorRevenue}
      onMouseLeave={deactivateColorRevenue}
      className={`w-full max-w-[1140px] px-4 flex flex-col justify-center items-center mx-auto relative ${classes} lg:min-h-[400px]`}
    >
      <Typography
        component="h4"
        variant="p"
        color={colorRevenue ? `lightGray` : "transparent"}
        className={`text-[80px] lg:text-[300px] text-byzantine z-[-1] font-[100] background--number-stroke lg:absolute transition-all lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2`}
      >
        €{revenue}
      </Typography>
      <Box className="flex flex-col w-full justify-center items-center lg:justify-end lg:items-end lg:min-h-[300px]">
        <Typography
          component="h4"
          variant="h3"
          className="font-black text-[40px] lg:text-[55px]"
        >
          {label}
        </Typography>
        <Typography component="h4" className="text-[20px] text-center">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default BackgroundNumber;
