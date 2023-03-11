import { Poppins } from "@next/font/google";
import Image from "next/image";
import HtmlParser from "../../components/HtmlParser/HtmlParser";
import { poppins } from "../../lib/app.interface";
import { IPortfolioItem } from "./Portfolio";

const PortfolioItem = (props: { item: IPortfolioItem }) => {
  const { item } = props;
  return (
    <div className="masnory-item">
      <div className="masnory-item-image">
        <Image src={item.image} alt={item.name} fill />
      </div>
      <div className="masnory-item-description mt-3">
        <h4 className="spaced-text fw-bold">{item.name}</h4>
        <div
          className={`service-info fw-md-medium text-dark my-2 ${poppins.className}`}
        >
          <HtmlParser content={item?.shortDescription} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
