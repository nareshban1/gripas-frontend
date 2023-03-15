import Link from "next/link";
import React from "react";
import { m } from "framer-motion";
import Image from "next/image";
import * as gtag from "../../lib/gtag";
const CampaignCard = ({ campaignItem }: { campaignItem: any }) => {
  return (
    <Link
      href={`/campaigns/${campaignItem.slug}`}
      onClick={() => {
        gtag.event({
          action: `${campaignItem.title} Viewed`,
          label: campaignItem.title,
          category: "engagement",
          value: "",
        });
      }}
    >
      <m.div
        className="col cursor-pointer"
        whileHover={{ scale: 1.05 }}
        key={campaignItem.id}
      >
        <div className="position-relative  h-100 ">
          <Image
            src={campaignItem?.image}
            alt={campaignItem.title}
            height={350}
            width={400}
            style={{ objectFit: "cover", width: "100%" }}
          />
          <p className="py-3 mb-0 spaced-text fw-bold fs-5 text-dark">
            {campaignItem.title}
          </p>
        </div>
      </m.div>
    </Link>
  );
};

export default CampaignCard;
