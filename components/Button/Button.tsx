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
  disabled = false,
  type = "button",
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
  disabled?: boolean;
  type?: string;
}) => {
  const onButtonClick = (e: any) => {
    e.stopPropagation();
    onClick();
    gtag.event({
      action: action ?? label + " clicked",
      label: actionlabel ?? label,
      category: actionCategory ?? "Engagement",
      value: value ?? "",
    });
  };

  return (
    <button
      className={`${className}`}
      onClick={onButtonClick}
      disabled={disabled}
    >
      {label ?? null}
      {hasArrow && <CgArrowLongRight className="ms-2 long-arrow" />}
      {icon}
    </button>
  );
};

export default Button;
