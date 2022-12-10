import React from "react";
import Services from "../../pages/services";
import Blogs from "../../pages/blogs/index";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg m-0 p-0 ">
      <div className="container">
        <Link className="navbar-brand py-3" href="/">
          <Image
            src="/logo.svg"
            alt="Gripas Marketing"
            width={180}
            height={70}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <span className="ms-auto navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link
                className="nav-link text-dark fw-medium px-3"
                href="/aboutus"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-medium px-3"
                href="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-medium px-3"
                href="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-medium px-3" href="/blogs">
                Blog
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary ms-3 rounded-pill px-4 py-2">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
