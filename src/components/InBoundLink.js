import classNames from "classnames";
import Link from "next/link";

const InBoundLink = ({
  className,
  children,
  cta,
  secondary,
  currentPath,
  to,
  activeClassName,
  outSource,
  ctaOutSource,
}) => {
  const classes = classNames(
    `font-black p-2 rounded underline transition-all cursor-pointer`,
    className,
    currentPath === to && activeClassName,
    cta &&
      !secondary &&
      `bg-formula text-[#171717] hover:bg-purpy hover:text-whiteSmoke`,
    secondary && !cta && `bg-byzantine text-white hover:bg-babyBlue`
  );
  return (
    <Link
      href={to}
      target={(outSource || ctaOutSource) && "_blank"}
      className={classes}
    >
      {children}
    </Link>
  );
};

export default InBoundLink;
