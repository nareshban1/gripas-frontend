import AnimateInView from "../../components/AnimateInView/AnimateInView";

const InfoSection = () => {
  return (
    <section className=" bg-primary">
      <AnimateInView className="container">
        <div className="info-section ">
          <h3 className="font-size-lg fw-bold lh-1 mb-3 text-white lh-base ">
            Established back in 2020, till now we have collaborated with{" "}
            <span className="text-secondary text-decoration-underline font-size-xl fw-bold">
              100+ clients
            </span>{" "}
            to achieve their Sales and Marketing objective via{" "}
            <span className="text-secondary text-decoration-underline font-size-xl fw-bold">
              Social Media Marketing
            </span>
          </h3>
        </div>
      </AnimateInView>
    </section>
  );
};

export default InfoSection;
