import React from 'react'
import Slider from "react-slick";
import { Client } from './Portfolio';
import PortfolioItem from './PortfolioItem';
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
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
const PortfolioSlider = (props: { featuredPortfolios: IPortfolioItem[] }) => {
  const{featuredPortfolios}=props
  return (
      <div>
        <Slider {...settings}>
           {featuredPortfolios.map((item) => (
          <div key={item.id}>
            <PortfolioItem item={item} />
          </div>
          ))}
        </Slider>
      </div>
  )
}

export default PortfolioSlider



