import { Poppins } from "@next/font/google";

export interface PageData {
  id: number;
  page: string;
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string;
  pageImage: string;
  content: string;
  link: any;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "fallback",
});
