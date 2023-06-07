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
    footerLink && `font-light py-2 px-0`,
    `font-black p-2 rounded underline transition-all cursor-pointer hover:opacity-75`,
    currentPath === to && activeClassName,
    cta && !secondary && `bg-byzantine text-white`,
    secondary && !cta && `bg-purpy text-white`
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
