import { Box, Typography } from "@mui/material";
import classNames from "classnames";

const Disclaimer = ({ title, description, className }) => {
  const classes = classNames(className);
  return (
    <Box
      className={`${classes} flex flex-col justify-center items-center text-center gap-[10px]`}
    >
      <Typography className="text-[40px]" fontStyle={"italic"} component="h3">
        {title}
      </Typography>
      <Typography className="text-[20px]" component="p">
        {description}
      </Typography>
    </Box>
  );
};

export default Disclaimer;
