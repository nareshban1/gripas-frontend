import Image from "next/image";
import { CgArrowLongRight, Link } from "../core/Imports/imports";
import AnimateInView from "../components/AnimateInView/AnimateInView";
import Freelancer from "../core/Freelancer/Freelancer";

const portfolioItems = [
  {
    name: "Naresh Ban",
    image: "/defaultuser.jpg",
    id: "1",
  },
  {
    name: "Roshan Saud",
    image: "/defaultuser.jpg",
    id: "2",
  },
  {
    name: "Roshan Saud",
    image: "/defaultuser.jpg",
    id: "3",
  },
  {
    name: "Naresh Ban",
    image: "/defaultuser.jpg",
    id: "4",
  },
  {
    name: "Roshan Saud",
    image: "/defaultuser.jpg",
    id: "5",
  },
  {
    name: "Roshan Saud",
    image: "/defaultuser.jpg",
    id: "6",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-white ">
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          Want to know more about us?
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          About Us
        </h3>
        <p className="col-12 col-md-8 fs-5">
          Gripas Marketing was established back in 2020 during the Pandemic.
          With digitalization we began making name in the Digital Marketing
          field. Till now we have served 100+ clients and counting.
        </p>
        <p className="col-12 col-md-8 fs-5">
          We specialize on Social Media Marketing with three package available,
          currently. Further, we believe in driving business through creativity.
        </p>
        <p className="col-12 col-md-8 fs-5">
          Our Mission is to help SMEs to achieve their Sales and Marketing
          objective via Social Media Marketing. Our Vision is to empower
          youngsters and bring latest automation technologies.
        </p>
        <div className="my-4 d-flex">
          <Link
            href="/portfolio"
            className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
          >
            Our Services
            <CgArrowLongRight className="ms-2 long-arrow" />
          </Link>
        </div>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          The Team
        </h3>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {portfolioItems.map((item) => (
            <div className="col cursor-pointer" key={item.id}>
              <div className="position-relative  h-100 ">
                <Image
                  src={item?.image}
                  alt={item.name}
                  height={250}
                  width={400}
                  style={{ objectFit: "cover", width: "100%" }}
                />
                <p className="py-3 spaced-text fw-bold fs-5 text-dark m-0">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimateInView>
      <Freelancer />
    </section>
  );
};

export default AboutUs;
