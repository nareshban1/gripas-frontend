import Link from 'next/link'
import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'

const Freelancer = () => {
  return (
    <div className="py-5 bg-primary">
    <div className="container py-5">
      <h2 className=" fw-bold lh-1 m-0 text-white lh-base text-start hero-sub-text font-size-sm">
        Opportunity
      </h2>
      <h3 className="font-size-lg fw-bold lh-1 my-3 text-white lh-base">
        Are you a Freelancer?
      </h3>
      <p className="font-size-rg text-white fw-medium mb-5">
        Our Vision is to empower youngsters and bring latest automation
        technologies.
      </p>
      <div className="mt-4 d-flex">
        <Link
          href="/freelancer"
          className="btn btn-outline-white rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
        >
          Contact Us
          <CgArrowLongRight className="ms-2 long-arrow" />
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Freelancer