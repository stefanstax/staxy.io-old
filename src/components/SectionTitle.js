import { Typography } from "@mui/material";

const SectionTitle = ({ title }) => {
  return (
    <Typography
      component="h2"
      className="max-w-[600px] mx-auto px-4 text-[35px] lg:text-[55px] uppercase text-center font-black my-24"
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
