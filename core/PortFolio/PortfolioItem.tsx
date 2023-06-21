import { Poppins } from "@next/font/google";
import Image from "next/image";
import HtmlParser from "../../components/HtmlParser/HtmlParser";
import { poppins } from "../../lib/app.interface";
import { IPortfolioItem } from "./Portfolio";

const PortfolioItem = (props: { item: IPortfolioItem }) => {
  const { item } = props;
  return (
    <div className="masonry-item  border box-sizing-border">
      <div className="masonry-item-image">
        <Image src={item.image} alt={item.name} fill />
      </div>
      <div className="masonry-item-description p-3">
        <h4 className="spaced-text fw-bold">{item.name}</h4>
        <div
          className={`service-info fw-md-medium text-dark mt-2 ${poppins.className}`}
        >
          <HtmlParser content={item?.shortDescription} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
