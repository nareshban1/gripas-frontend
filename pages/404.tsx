import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomPageNotFound = () => {
  return (
    <section className="mt-5 text-center">
      <Image
        src="/connection.svg"
        alt="Gripas Marketing"
        width={400}
        height={250}
      />
      <div className="text-center mt-5">
        <p className="fs-1 fw-bold">404 Not Found</p>
        <p className="m-4 ">
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore
          on the home page.{" "}
        </p>
        <div className="flex justify-content-center w-100 text-center">
          <Link href={"/"} className="btn btn-primary rounded-pill px-4">
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomPageNotFound;
