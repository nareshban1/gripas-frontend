import { ReactNode } from "react";

type propsType = {
  title: string;
  subContent: string;
  children?: ReactNode;
};

const InfoCard = (props: propsType) => {
  const { title, subContent, children } = props;
  return (
    <div className="rounded-4 bg-primary text-center p-5 my-5">
      <h2 className="text-white fw-bold">{title}</h2>
      <p className="text-white">{subContent}</p>
      <>{children}</>
    </div>
  );
};

export default InfoCard;
