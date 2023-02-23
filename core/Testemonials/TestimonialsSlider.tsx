import { useState } from "react";
import Markdown from "../../components/Markdown/Markdown";
import useInterval from "../../hooks/useInterval";
import {
  AnimatePresence,
  CgArrowLongLeft,
  CgArrowLongRight,
  motion,
  wrap,
} from "../Imports/imports";
import { ITestemonials } from "./Testemonials";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      y: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    y: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      y: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const TestimonialsSlider = ({ data }: { data: ITestemonials[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const reviewIndex = wrap(0, data.length, page);

  const paginate: any = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useInterval(() => {
    paginate(1);
  }, 6000);

  return (
    <>
      <div className="position-relative testimonial my-3">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="position-absolute "
          >
            <div>
              <h3 className="text-dark fw-semibold font-size-lg">
                {data[reviewIndex]?.title}
              </h3>
              <p className="fs-5">
                <Markdown markdown={data[reviewIndex]?.comment ?? ""} />
              </p>
              <p className="fs-6 mb-0 fw-medium">
                {data[reviewIndex]?.commentor}
              </p>
              <em className="fs-6">
                <>{data[reviewIndex]?.position}</>, {data[reviewIndex]?.company}
              </em>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

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
