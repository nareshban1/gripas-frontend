import Link from "next/link";
import React from "react";
import Portfolio from "../PortFolio/Portfolio";

const Footer = ({ className }: { className: string }) => {
  return (
    <div className={`bg-primary ${className} py-5 border-0 border-top`}>
      <div className="container my-5">
        <div className="row w-100 ">
          <div className="col-12 col-md-6">
            <Link
              className="navbar-brand  hero-sub-text font-size-md fw-bold text-white"
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
            <p className="lh-1 mt-2 text-white lh-base fs-5 ">
              Driving business through creativity
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-white my-4 w-100">
              <h6 className="spaced-text fw-bold">Quick Links</h6>
              <ul className="p-0 d-md-flex my-2 ">
                <Link className="text-white" href="/aboutus">
                  <li className="pe-md-3 my-2 my-md-0">About Us</li>
                </Link>
                <Link className="text-white" href="/services">
                  <li className="px-md-3 my-2 my-md-0">Services</li>
                </Link>
                <Link className="text-white" href="/packages">
                  <li className="px-md-3 my-2 my-md-0">Pricing</li>
                </Link>
                <Link className="text-white" href="/portfolio">
                  <li className="px-md-3 my-2 my-md-0">Portfolio</li>
                </Link>
                <Link className="text-white" href="/blogs">
                  <li className="px-md-3 my-2 my-md-0">Blog</li>
                </Link>
                <Link className="text-white" href="/contactus">
                  <li className="px-md-3 my-2 my-md-0">Contact</li>
                </Link>
              </ul>
            </div>
            <div className="text-white">
              <h6 className="spaced-text fw-bold">Follow Us</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
