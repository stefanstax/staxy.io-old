import { Box } from "@mui/material";
import Footer from "./Footer";
import Menu from "./Menu";
import "../app/globals.css";

const SharedLayout = ({ children }) => {
  return (
    <main className="w-full min-h-screen">
      <Menu />
      <Box fluid className="min-w-full max-w-[1140px]">
        {children}
      </Box>
      <Footer />
    </main>
  );
};

export default SharedLayout;
