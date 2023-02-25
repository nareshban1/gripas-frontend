import Image from "next/image";
import HtmlParser from "../../components/HtmlParser/HtmlParser";

export interface IPortfolioItem {
  id: number;
  image: string;
  name: string;
  slug: string;
  details: string;
  is_active: boolean;
  is_featured: boolean;
}

const PortfolioItem = (props: { item: IPortfolioItem }) => {
  const { item } = props;
  return (
    <div className="masnory-item">
      <div className="masnory-item-image">
        <Image src={item.image} alt={item.name} fill />
      </div>
      <div className="masnory-item-description mt-3">
        <h4 className="spaced-text fw-bold">{item.name}</h4>
        <p className="service-info fw-md-medium text-dark my-2">
          <HtmlParser content={item?.details} />
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
