import InfoComponent from "../../components/InfoComponent/InfoComponent";

const LinkToPackage = () => {
  return (
    <InfoComponent
      subtitle="Packages"
      title="We Have Awesome Packages with Flexible Pricing."
      isLink={true}
      link="/packages"
      label="View All Packages"
      onButtonClick={() => {}}
    />
  );
};

export default LinkToPackage;
