import Image from "next/image";
import AnimateInView from "../../components/AnimateInView/AnimateInView";
import HtmlParser from "../../components/HtmlParser/HtmlParser";
import * as gtag from "../../lib/gtag";
import { CgArrowLongRight, Link } from "../Imports/imports";
import PortfolioItem from "./PortfolioItem";

export interface IPortfolioItem {
  id: number;
  image: string;
  name: string;
  slug: string;
  shortDescription: string;
  client: Client;
  details: string;
  isActive: boolean;
  isFeatured: boolean;
}

export interface Client {
  id: number;
  name: string;
  details: string;
  location: string;
  phoneNo: string;
  email: string;
  isActive: boolean;
  clientSince: string;
  createdAt: string;
  updatedAt: string;
}

const Portfolio = (props: { featuredPortfolios: IPortfolioItem[] }) => {
  const { featuredPortfolios } = props;
  return (
    <section className="bg-white ">
      <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
        <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          Portfolio
        </h2>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
          What have we worked on
        </h3>
        {featuredPortfolios && featuredPortfolios?.length ? (
          <div className="masonry-container ">
            <div className="row position-relative w-100 g-5 my-3 m-0">
              <div className="col-12 col-md-6 ps-md-0 pe-md-4 p-0 m-0">
                <div className=" row g-5 masonry-item-container position-relative h-100">
                  {[...featuredPortfolios].splice(0, 2).map((item) => (
                    <div className="col-12 " key={item.id}>
                      <PortfolioItem item={item} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-12 col-md-6 pe-md-0 ps-md-4 p-0 ">
                <div className="row g-5 masonry-item-container position-relative ">
                  {[...featuredPortfolios].splice(2, 2).map((item) => (
                    <div className="col-12 " key={item.id}>
                      <PortfolioItem item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="mt-4 d-flex">
          <Link
            href="/portfolio"
            className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
            onClick={() => {
              gtag.event({
                action: "View More Works Clicked",
                label: "More Works",
                category: "engagement",
                value: "",
              });
            }}
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
