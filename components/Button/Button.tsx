import React, { ReactNode } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import * as gtag from "../../lib/gtag";
const Button = ({
  onClick,
  label,
  className,
  action,
  actionlabel,
  actionCategory,
  value,
  hasArrow = true,
  icon,
}: {
  onClick: () => void;
  label?: string;
  className?: string;
  action?: string;
  actionCategory?: string;
  value?: string;
  actionlabel?: string;
  hasArrow?: boolean;
  icon?: ReactNode;
}) => {
  const onButtonClick = () => {
    onClick();
    gtag.event({
      action: action ?? label + " clicked",
      label: actionlabel ?? label,
      category: actionCategory ?? "engagement",
      value: value ?? "",
    });
  };

  return (
    <button className={`${className}`} onClick={onButtonClick}>
      {label ?? null}
      {hasArrow && <CgArrowLongRight className="ms-2 long-arrow" />}
      {icon}
    </button>
  );
};

export default Button;
