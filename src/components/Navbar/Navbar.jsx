"use client";
import Styles from "./navbar.module.css";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";

const links = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
  },
  {
    id: 4,
    title: "About",
    path: "/about",
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    path: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={Styles.container}>
      <Link className={Styles.logo} href="/">
        Brand
      </Link>
      <div className={Styles.links}>
        {links.map(link => (
          <Link className={Styles.link} key={link.id} href={link.path}>
            {link.title}
          </Link>
        ))}
        <Button text="Signup" url="/" />
      </div>
    </div>
  );
};

export default Navbar;
