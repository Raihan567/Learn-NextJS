'use client'
import Link from "next/link";
import React from "react";

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
    <div>
      <Link href="/">Logo</Link>
      <div>
        {links.map(link => {
          return (
            <div key={link.id}>
              <Link href={link.path}>{link.title}</Link>
            </div>
          );
        })}
        <button
          onClick={() => {
            console.log("Logged Out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
