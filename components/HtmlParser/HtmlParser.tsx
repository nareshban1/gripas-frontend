import React from "react";
import ReactHtmlParser from "html-react-parser";
import { poppins } from "../../lib/app.interface";
const HtmlParser = ({ content }: { content: string }) => {
  return (
    <div className={`${poppins.className} html-parsed m-0`}>
      {ReactHtmlParser(content)}
    </div>
  );
};

export default HtmlParser;
