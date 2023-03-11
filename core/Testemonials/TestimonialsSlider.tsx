import { useState } from "react";
import { Carousel } from "react-bootstrap";
import HtmlParser from "../../components/HtmlParser/HtmlParser";
import { CgArrowLongLeft, CgArrowLongRight } from "../Imports/imports";
import { ITestemonials } from "./Testemonials";

const TestimonialsSlider = ({ reviews }: { reviews: ITestemonials[] }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };
  const paginate: any = (newDirection: number) => {
    if (index === reviews.length - 1) setIndex(0);
    else if (index === 0) setIndex(reviews.length - 1);
    else {
      setIndex(index + newDirection);
    }
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        wrap={true}
        touch={true}
        controls={false}
        className="my-3"
      >
        {reviews.map((review) => (
          <Carousel.Item key={review.id} interval={6000}>
            <div>
              <h4 className="text-dark fw-medium font-size-md">
                {review.title}
              </h4>
              <div className="fs-5 fw-light">
                <HtmlParser content={review.comment ?? ""} />
              </div>
              <p className="fs-6 mb-0 fw-medium">{review.commentor}</p>
              <em className="fs-6">
                <>{review.position}</>, {review.company}
              </em>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="d-flex align-vertical justify-content-end">
        <CgArrowLongLeft
          size={32}
          className=" m-0 cursor-pointer"
          onClick={() => paginate(-1)}
        />
        <CgArrowLongRight
          size={32}
          className="ms-5 cursor-pointer"
          onClick={() => paginate(1)}
        />
      </div>
    </>
  );
};

export default TestimonialsSlider;
