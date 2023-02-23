import dynamic from "next/dynamic";
import Head from "next/head";
import { useContext } from "react";
import apiRequest from "../components/Axios/api-request";
import { OverlayContext } from "../context/OverlayContext";
import { PackageDetail } from "../core/Packages/Packages";

const AnimateInView = dynamic(
  () => import("../components/AnimateInView/AnimateInView")
);
const InfoComponent = dynamic(
  () => import("../components/InfoComponent/InfoComponent")
);
const PackageCard = dynamic(() => import("../core/Packages/PackageCard"));

const Packages = ({ packages }: { packages: PackageDetail[] }) => {
  const { toggleCustomForm } = useContext(OverlayContext);
  return (
    <>
      <section className="bg-white">
        <Head>
          <title>Our Packages</title>
          <meta
            name="description"
            content="Gripas Marketing was established back in 2020 during the Pandemic. With digitalization we began making name in the Digital Marketing field. Till now we have served 100+ clients and counting. We specialize on 'Social Media Marketing' with three package available, currently. Further, we believe in driving business through creativity. Our Mission is to help SMEs to achieve their Sales and Marketing objective via Social Media Marketing. Our Vision is to empower youngsters and bring latest automation technologies."
          />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <AnimateInView className="container py-5 d-flex flex-column justify-content-start ">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            Awesome Packages with Flexible Pricing
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            Packages
          </h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {packages?.map((pack, index) => (
              <div className="col " key={index}>
                <PackageCard pack={pack} />
              </div>
            ))}
          </div>
        </AnimateInView>
      </section>
      <InfoComponent
        subtitle="Customization"
        title="Did not find any packages that fits your requirements?"
        info="Contact us to discuss a package that fits your needs."
        label="Custom Package"
        onButtonClick={toggleCustomForm}
      />
    </>
  );
};

export async function getServerSideProps() {
  const packagesResponse = await apiRequest(
    `${process.env.API_ENDPOINT}packages/`
  );

  const [packages] = await Promise.all([packagesResponse]);
  return {
    props: {
      packages,
    },
  };
}

export default Packages;
