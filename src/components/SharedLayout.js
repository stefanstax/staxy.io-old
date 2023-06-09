import { Box } from "@mui/material";
import Footer from "./Footer";
import Menu from "./Menu";
import "../app/globals.css";
import classNames from "classnames";

const SharedLayout = ({ children, className }) => {
  const classes = classNames(className);
  return (
    <main className="w-full min-h-screen">
      <Menu />
      <Box
        fluid
        className={`min-w-full min-h-[70vh] max-w-[1140px] ${className}`}
      >
        {children}
      </Box>
      <Footer />
    </main>
  );
};

export default SharedLayout;
