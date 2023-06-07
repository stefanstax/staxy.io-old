import { Container } from "@mui/material";
import Footer from "./Footer";
import Menu from "./Menu";
import "../app/globals.css";

const SharedLayout = ({ children }) => {
  return (
    <main className="w-full min-h-screen">
      <Menu />
      <Container fixed className="min-w-full p-0">
        {children}
      </Container>
      <Footer />
    </main>
  );
};

export default SharedLayout;
