import React from "react";
import ReactHtmlParser from "html-react-parser";
const HtmlParser = ({ content }: { content: string }) => {
  return <>{ReactHtmlParser(content)}</>;
};

export default HtmlParser;
