import Link from "next/link";
import React from "react";
import { m } from "framer-motion";
import Image from "next/image";
import * as gtag from "../../lib/gtag";
import { Campaign } from "./campaigns.interface";
const CampaignCard = ({ campaignItem }: { campaignItem: Campaign }) => {
  return (
    <Link
      href={`/campaigns/${campaignItem.slug}`}
      onClick={() => {
        gtag.event({
          action: `${campaignItem.name} Viewed`,
          label: campaignItem.name,
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
            alt={campaignItem.name}
            height={350}
            width={400}
            style={{ objectFit: "cover", width: "100%" }}
          />
          <p className="py-3 mb-0 spaced-text fw-bold fs-5 text-dark">
            {campaignItem.name}
          </p>
        </div>
      </m.div>
    </Link>
  );
};

export default CampaignCard;
