import { Box, Typography } from "@mui/material";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <Box className="w-full flex flex-col justify-center items-center">
      <Typography
        component="h2"
        className="max-w-[600px] mx-auto px-4 text-[35px] lg:text-[55px] uppercase text-center font-black"
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography component="p" className="text-[20px]">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
