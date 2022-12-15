import AnimateInView from "../../components/AnimateInView/AnimateInView";

const InfoSection = () => {
  return (
    <section className="py-4 bg-primary">
      <AnimateInView className="container">
        <div className="info-section ">
          <h3 className="display-6 fw-bold lh-1 mb-3 text-white lh-base ">
            Established back in 2020, till now we have collaborated with{" "}
            <span className="text-secondary text-decoration-underline displaylg--5 fw-bold">
              100+ clients
            </span>{" "}
            to achieve their Sales and Marketing objective via{" "}
            <span className="text-secondary text-decoration-underline display-lg-5 fw-bold">
              Social Media Marketing
            </span>
          </h3>
        </div>
      </AnimateInView>
    </section>
  );
};

export default InfoSection;
