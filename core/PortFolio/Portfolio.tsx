import Image from "next/image";
import { CgArrowLongRight, Link } from "../Imports/imports";
import AnimateInView from "../../components/AnimateInView/AnimateInView";

export const portfolioItems = [
  {
    name: "Project 1",
    image: "/all.jpg",
    id: "1",
  },
  {
    name: "Project 2",
    image: "/facebook.jpg",
    id: "2",
  },
  {
    name: "Project 3",
    image: "/product.jpg",
    id: "3",
  },
  {
    name: "Project 4",
    image: "/tiktok.jpg",
    id: "4",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-white py-5">
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          Portfolio
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          What have we worked on
        </h3>
        <div className="masnory-container ">
          <div className="row position-relative w-100 g-5 m-0">
            <div className="col-12 col-md-6 ps-md-0 pe-md-4 p-0">
              <div className=" row g-5 masnory-item-container position-relative h-100">
                {[...portfolioItems].splice(0, 2).map((item) => (
                  <div className="col-12 " key={item.id}>
                    <div className="masnory-item">
                      <div className="masnory-item-image">
                        <Image src={item.image} alt={item.name} fill />
                      </div>
                      <div className="masnory-item-description mt-3">
                        <h4 className="spaced-text fw-bold">{item.name}</h4>
                        <p className="service-info fw-md-medium text-dark my-2">
                          We specialize on &quot;Social Media Marketing&quot;
                          with three package available, currently. Further, we
                          believe in driving business through creativity.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-md-6 pe-md-0 ps-md-4 p-0">
              <div className="row g-5 masnory-item-container position-relative mt-0 mt-md-5">
                {[...portfolioItems].splice(2, 4).map((item) => (
                  <div className="col-12 " key={item.id}>
                    <div className="masnory-item">
                      <div className="masnory-item-image">
                        <Image src={item.image} alt={item.name} fill />
                      </div>
                      <div className="masnory-item-description mt-3">
                        <h4 className="spaced-text fw-bold">{item.name}</h4>
                        <p className="service-info fw-md-medium text-dark my-2">
                          We specialize on &quot;Social Media Marketing&quot;
                          with three package available, currently. Further, we
                          believe in driving business through creativity.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 d-flex">
          <Link
            href="/portfolio"
            className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
          >
            View More
            <CgArrowLongRight className="ms-2 long-arrow" />
          </Link>
        </div>
      </AnimateInView>
    </section>
  );
};

export default Portfolio;
