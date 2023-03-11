import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import * as gtag from "../../lib/gtag";
import Button from "../Button/Button";

type Props = {
  className?: string;
  isLink?: boolean;
  link?: string;
  subtitle: string;
  title: string;
  info?: string;
  label: string;
  action?: string;
  actionCategory?: string;
  value?: string;
  actionlabel?: string;
  onButtonClick: () => void;
};

const InfoComponent = (props: Props) => {
  const {
    className = "",
    isLink = false,
    link,
    subtitle,
    title,
    label,
    info,
    action,
    actionCategory,
    value,
    actionlabel,
    onButtonClick,
  } = props;
  return (
    <div className={`py-5 bg-white ${className}`}>
      <div className="container py-5">
        <p className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
          {subtitle}
        </p>
        <h3 className="font-size-lg fw-bold lh-1 my-3 text-primary lh-base">
          {title}
        </h3>
        {info && (
          <p className="font-size-rg text-dark fw-medium mb-5">{info}</p>
        )}
        <div className="mt-4 d-flex">
          {isLink && link ? (
            <Link
              href={link}
              className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
              onClick={() => {
                onButtonClick();
                gtag.event({
                  action: action ?? label + " clicked",
                  label: actionlabel ?? label,
                  category: actionCategory ?? "engagement",
                  value: value ?? "",
                });
              }}
            >
              {label}
              <CgArrowLongRight className="ms-2 long-arrow" />
            </Link>
          ) : (
            <Button
              label={label}
              className="btn btn-primary rounded-0 px-4 py-3 nav-link-text d-flex align-items-center"
              onClick={onButtonClick}
              action={action}
              actionlabel={actionlabel}
              actionCategory={actionCategory}
              value={value}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
