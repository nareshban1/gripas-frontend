import Head from "next/head";
import Image from "next/image";
import AnimateInView from "../components/AnimateInView/AnimateInView";
import Packages from "../core/Packages/Packages";
import { portfolioItems } from "../core/PortFolio/Portfolio";

const Portfolio = () => {
  return (
    <>
      <section className="bg-white ">
        <Head>
          <title>Our Portfolio</title>
          <meta
            name="description"
            content="Gripas Marketing was established back in 2020 during the Pandemic. With digitalization we began making name in the Digital Marketing field. Till now we have served 100+ clients and counting. We specialize on 'Social Media Marketing' with three package available, currently. Further, we believe in driving business through creativity. Our Mission is to help SMEs to achieve their Sales and Marketing objective via Social Media Marketing. Our Vision is to empower youngsters and bring latest automation technologies."
          />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            What have we worked on
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            Our Portfolio
          </h3>
          <div className="container-fluid p-0">
            <div className="row row-cols-md-2 row-cols-1  position-relative w-100 g-5 m-0">
              {[...portfolioItems].map((item) => (
                <div className="col item-grid p-0 p-md-3" key={item.id}>
                  <div className="item-grid-item">
                    <div className="item-grid-item-image">
                      <Image src={item.image} alt={item.name} fill />
                    </div>
                    <div className="item-grid-item-description mt-3">
                      <h4 className="spaced-text fw-bold">{item.name}</h4>
                      <p className="service-info fw-md-medium text-dark my-2">
                        We specialize on &quot;Social Media Marketing&quot; with
                        three package available, currently. Further, we believe
                        in driving business through creativity.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateInView>
      </section>
      <Packages className="py-5 bg-primary" />
    </>
  );
};

export default Portfolio;
