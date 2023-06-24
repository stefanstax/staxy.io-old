import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import InBoundLink from "./InBoundLink";
import classNames from "classnames";
import { Icon } from "@iconify/react";

const MediaAndText = ({
  mediaFirst,
  mediaAlt,
  mediaSrc,
  endBlock,
  title,
  description,
  url,
  label,
  className,
}) => {
  const classes = classNames(className, `mx-auto`);
  const endBlockImage = classNames(endBlock && `mx-auto`);
  const endBlockContent = classNames(
    endBlock ? `w-full justify-center items-center` : `w-7/12 md:w-5/12`
  );
  const endBlockContainer = classNames(
    endBlock ? `justify-between items-center` : `justify-center items-center`
  );

  return (
    <Box
      className={`${classes} ${endBlockContainer} w-full my-12 px-4 flex flex-wrap justify-between items-center gap-[40px]`}
    >
      {/* Media */}
      {mediaSrc && (
        <Icon
          icon={mediaSrc}
          fontSize={128}
          className={`${endBlockImage} w-3/12 md:w-5/12 drop-shadow-2xl shadow-red-700 max-w-[200px] ${
            mediaFirst ? "order-0" : "order-1"
          }`}
        />
      )}
      {/* Content */}
      <Box className={`${endBlockContent} flex flex-col`}>
        {title && (
          <Typography
            component="h3"
            className="text-[25px] lg:text-[45px] font-black"
          >
            {title}
          </Typography>
        )}
        {description && (
          <Typography component="p" className="text-[20px]">
            {description}
          </Typography>
        )}
        {url && label && <InBoundLink href={url}>{label}</InBoundLink>}
      </Box>
    </Box>
  );
};

export default MediaAndText;
