import React from "react";
import MarkDownToJsx from "markdown-to-jsx";
const Markdown = (props: { markdown: string }) => {
  const { markdown } = props;
  return <MarkDownToJsx>{markdown}</MarkDownToJsx>;
};

export default Markdown;
