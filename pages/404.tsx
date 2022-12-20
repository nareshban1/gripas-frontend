import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomPageNotFound = () => {
  return (
    <section className="py-5 text-center bg-primary">
      <Image
        src="/connection.svg"
        alt="Gripas Marketing"
        width={400}
        height={250}
        className="my-5"
      />
      <div className="text-center  text-white my-5">
        <h1 className="fs-1 fw-bold">404 Not Found</h1>
        <p className="m-4 lead text-white fw-medium hero-sub-text font-size-sm">
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore
          on the home page.{" "}
        </p>
        <div className="text-center">
          <Link
            href={"/"}
            className="btn btn-outline-white my-5 rounded-0 px-4 py-3 nav-link-text "
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomPageNotFound;
