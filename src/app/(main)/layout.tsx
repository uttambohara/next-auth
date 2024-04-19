import Link from "next/link";
import React from "react";

const NavLink = [
  {
    link: "/login",
    name: "login",
  },
  {
    link: "/register",
    name: "register",
  },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ul>
        {NavLink.map(({ link, name }) => (
          <Link href={link} key={link}>
            <li>{name}</li>
          </Link>
        ))}
      </ul>

      <main>{children}</main>
    </>
  );
}
