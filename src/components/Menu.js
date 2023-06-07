import Image from "next/image";
import StaxyLogo from "../assets/images/staxy-logo.png";
import InBoundLink from "./InBoundLink";

const Menu = () => {
  return (
    <nav className="w-full fixed z-[99] top-0 left-0 bg-[#171717] min-h-[80px] flex justify-center items-center">
      <InBoundLink to="/">
        <Image
          src={StaxyLogo}
          className="w-full max-w-[125px]"
          width={125}
          height={80}
          alt=""
        />
      </InBoundLink>
      {/* // todo Menu items go here */}
    </nav>
  );
};

export default Menu;
