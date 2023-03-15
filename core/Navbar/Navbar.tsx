import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useContext, useEffect, useState } from "react";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import Button from "../../components/Button/Button";
import { OverlayContext } from "../../context/OverlayContext";
import { poppins } from "../../lib/app.interface";

import { Link, motion } from "../Imports/imports";
import { MenuToggle } from "./MenuToggle";
import { useWindowSize } from "./useWindowSize";

const Navbar = ({ className }: { className: string }) => {
  const { toggleStartedForm } = useContext(OverlayContext);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  const hidemenuFunc = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (size.width > 991) {
      setIsOpen(false);
    }
  }, [size]);

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document as unknown as HTMLElement);
    } else {
      enableBodyScroll(document as unknown as HTMLElement);
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg m-0 p-0 navbar-custom ${className} w-100`}
      >
        <div className="container py-2">
          <Link
            className="navbar-brand py-3 hero-sub-text font-size-sm fw-bold text-white"
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

          <motion.nav
            animate={isOpen ? "open" : "closed"}
            className="navbar-toggler p-0 border-0 cursor-pointer"
          >
            <MenuToggle
              toggle={() => {
                setIsOpen(!isOpen);
              }}
            />
          </motion.nav>
          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-xl-3 px-2">
                <Link
                  className="nav-link text-white fw-medium nav-link-items"
                  href="/aboutus"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item  px-xl-3 px-2">
                <Link
                  className="nav-link text-white fw-medium nav-link-items"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item  px-2 px-xl-3">
                <Link
                  className="nav-link text-white fw-medium   nav-link-items"
                  href="/packages"
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item  px-2 px-xl-3">
                <Link
                  className="nav-link text-white fw-medium   nav-link-items"
                  href="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item  px-2 px-xl-3">
                <Link
                  className="nav-link text-white fw-medium  nav-link-items"
                  href="/blogs"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item  px-2 px-xl-3">
                <Link
                  className="nav-link text-white fw-medium  nav-link-items"
                  href="/contactus"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <Button
              className="btn btn-outline-white ms-3 rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
              onClick={toggleStartedForm}
              label="Get Started"
            ></Button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <AnimateInView
          direction="right"
          time="0.05s"
          className={`bg-primary ${poppins.className}`}
        >
          <div className="container main h-100 py-2 d-flex">
            <div className="overflow-auto w-100 flex-grow-1 position-relative">
              <div className="position-absolute h-100 overflow-auto  d-flex flex-column justify-content-between ">
                <ul className="navbar-nav ">
                  <li className="nav-item py-2">
                    <Link
                      className="nav-link text-white fw-bold  nav-link-items fs-3"
                      href="/aboutus"
                      onClick={hidemenuFunc}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item py-2 ">
                    <Link
                      className="nav-link text-white fw-bold  nav-link-items fs-3"
                      href="/services"
                      onClick={hidemenuFunc}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link
                      className="nav-link text-white fw-bold   nav-link-items fs-3"
                      href="/packages"
                      onClick={hidemenuFunc}
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link
                      className="nav-link text-white fw-bold   nav-link-items fs-3"
                      href="/portfolio"
                      onClick={hidemenuFunc}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link
                      className="nav-link text-white fw-bold  nav-link-items fs-3"
                      href="/blogs"
                      onClick={hidemenuFunc}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item py-2">
                    <Link
                      className="nav-link text-white fw-bold  nav-link-items fs-3"
                      href="/contactus"
                      onClick={hidemenuFunc}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="justify-self-baseline">
                  <Button
                    className="btn btn-outline-white rounded-0 px-4 py-3 spaced-text fs-5 fw-bold d-flex align-items-center "
                    onClick={() => {
                      toggleStartedForm();
                      hidemenuFunc();
                    }}
                    label="Get Started"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </AnimateInView>
      )}
    </>
  );
};

export default Navbar;
