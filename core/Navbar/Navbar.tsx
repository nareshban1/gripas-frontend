import React from "react";
import Services from "../../pages/services";
import Blogs from "../../pages/blogs/index";
import Link from "next/link";
import Image from "next/image";
import { CgArrowLongRight, CgArrowLongRightC } from "react-icons/cg";
import { RiMenu3Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg m-0 p-0 bg-primary ">
      <div className="container py-2">
        <Link
          className="navbar-brand py-3 hero-sub-text fw-bold text-white"
          href="/"
        >
          {/* <Image
            src="/logo.svg"
            alt="Gripas Marketing"
            width={180}
            height={70}
          /> */}
          Gripas
          <br />
          Marketing
        </Link>
        <RiMenu3Line size={28} className={"text-white navbar-toggler"} />
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-4">
              <Link
                className="nav-link text-white fw-medium nav-link-items"
                href="/aboutus"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item  px-4">
              <Link
                className="nav-link text-white fw-medium nav-link-items"
                href="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item  px-4">
              <Link
                className="nav-link text-white fw-medium   nav-link-items"
                href="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item  px-4">
              <Link
                className="nav-link text-white fw-medium  nav-link-items"
                href="/blogs"
              >
                Blog
              </Link>
            </li>
          </ul>
          <button className="btn btn-outline-white ms-3 rounded-0 px-4 py-3 nav-link-text d-flex align-items-center">
            Get Started <CgArrowLongRight className="ms-2 long-arrow" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
