import { Box } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";

const ImageBanner = ({ src, className }) => {
  const classes = classNames(className);
  return (
    <Box
      className={`w-full flex justify-center items-center mx-auto md:p-10 ${classes}`}
    >
      <Image
        className="w-full h-full object-fit object-contain md:rounded-[40px] glass-angle"
        src={src}
        width={1280}
        height={650}
        alt=""
      />
    </Box>
  );
};

export default ImageBanner;
