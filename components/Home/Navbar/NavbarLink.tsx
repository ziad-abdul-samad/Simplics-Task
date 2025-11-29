import React from "react";

interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}
export default function NavbarLink({ href, children, ...props }: NavbarLinkProps) {
  return (
    <a
      href={href}
      {...props}
      className="text-base  hover:text-primary transition"
    >
      {children}
    </a>
  );
}
