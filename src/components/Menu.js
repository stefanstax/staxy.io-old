import Image from "next/image";
import StaxyLogo from "../assets/images/staxy-logo.png";

const Menu = () => {
  return (
    <nav className="w-full fixed z-[99] top-0 left-0 bg-[#171717] min-h-[80px] flex justify-center items-center">
      <Image
        src={StaxyLogo}
        className="w-full max-w-[125px]"
        width={125}
        height={80}
        alt=""
      />
    </nav>
  );
};

export default Menu;
