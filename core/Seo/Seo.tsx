import { NextSeo } from "next-seo";
import React from "react";
import { PageData } from "../../lib/app.interface";

export interface PageContentData {
  pageTitle: string;
  pageDescription: string;
  pageKeywords?: string;
  content: string;
  pageImage?: string;
  pageUrl?: string;
}

const Seo = ({ pageContent }: { pageContent: PageContentData }) => {
  return (
    <>
      {pageContent && (
        <NextSeo
          title={pageContent.pageTitle}
          description={pageContent.pageDescription}
          additionalMetaTags={[
            {
              name: "keywords",
              content: pageContent.pageKeywords ?? "",
            },
            {
              name: "author",
              content: "Gripas Marketing",
            },
          ]}
          openGraph={{
            url: "https://gripas.ascenddevs.com",
            title: pageContent.pageTitle,
            description: pageContent.pageDescription,
            images: [
              {
                url: pageContent.pageImage ?? "",
                width: 800,
                height: 600,
                alt: pageContent.pageTitle,
                type: "image/*",
              },
            ],
            siteName: "Gripas Marketing",
          }}
        />
      )}
    </>
  );
};

export default Seo;
