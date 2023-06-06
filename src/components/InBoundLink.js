import classNames from "classnames";
import Link from "next/link";

const InBoundLink = ({
  className,
  children,
  cta,
  secondary,
  currentPath,
  footerLink,
  to,
  activeClassName,
  outSource,
  ctaOutSource,
}) => {
  const classes = classNames(
    className,
    footerLink && `font-light py-2 px-0 hover:opacity-75`,
    `font-black p-2 rounded underline transition-all cursor-pointer`,
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
