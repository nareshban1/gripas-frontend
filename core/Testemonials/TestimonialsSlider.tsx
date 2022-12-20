import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

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

const data = [
  {
    id: 1,
    title: "Awesome Services",
    description:
      " We specialize on Social Media Marketing with three package available, currently. Further, we believe in driving business through creativity.",
    reviewer: {
      name: "Naresh Ban",
      company: "AscendDevs",
      designation: "Developer",
    },
  },
  {
    id: 2,
    title: "Awesome Services",
    description:
      " We specialize on Social Media Marketing with three package available, currently. Further, we believe in driving business through creativity.",
    reviewer: {
      name: "Naresh Ban",
      company: "AscendDevs",
      designation: "Developer",
    },
  },
  {
    id: 3,
    title: "Awesome Services",
    description:
      " We specialize on Social Media Marketing with three package available, currently. Further, we believe in driving business through creativity.We specialize on Social Media Marketing with three package available, currently. Further, we believe in driving business through creativity.",
    reviewer: {
      name: "Naresh Ban",
      company: "AscendDevs",
      designation: "Developer",
    },
  },
];

const TestimonialsSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const reviewIndex = wrap(0, data.length, page);

  const paginate: any = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
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
                {data[reviewIndex].title}
              </h3>
              <p className="fs-4">{data[reviewIndex].description}</p>
              <p className="fs-5 mb-0 fw-medium">
                {data[reviewIndex].reviewer.name}
              </p>
              <em className="fs-5">
                <>{data[reviewIndex].reviewer.designation}</>,{" "}
                {data[reviewIndex].reviewer.company}
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
