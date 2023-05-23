import Link from "next/link";
import Image from "next/image";
import { GrFacebook, GrInstagram, GrLinkedin, GrTwitter } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
import { useEffect, useState } from "react";
import apiRequest from "../../components/Axios/api-request";
import { TiSocialAtCircular } from "react-icons/ti";
import Logo from "../../components/Logo/Logo";
export interface Social {
  id: number;
  platform: string;
  link: string;
  image: string;
}

const Footer = ({ className }: { className: string }) => {
  const [socials, setSocials] = useState<Social[]>([]);

  useEffect(() => {
    const getSocials = async () => {
      const socialsResponse = await apiRequest<Social[]>(`socials/`);
      setSocials(socialsResponse ?? []);
    };
    getSocials();
  }, []);

  const renderIcons = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <GrFacebook size={24} className="me-3" />;
      case "instagram":
        return <GrInstagram size={24} className="me-3" />;
      case "tiktok":
        return <FaTiktok size={24} className="me-3" />;
      case "linkedin":
        return <GrLinkedin size={24} className="me-3" />;
      case "twitter":
        return <GrTwitter size={24} className="me-3" />;
      default:
        return <TiSocialAtCircular size={24} className="me-3" />;
    }
  };

  return (
    <div className={`bg-primary ${className} py-5 border-0 border-top`}>
      <div className="container my-5">
        <div className="row w-100 ">
          <div className="col-12 col-md-6">
            <Link
              className="navbar-brand  hero-sub-text font-size-md fw-bold text-white"
              href="/"
            >
              <Logo color="white" />
              <Image
                src="/logo.svg"
                className=""
                alt="Gripas Marketing"
                width={180}
                height={70}
              />
              {/* Gripas
              <br />
              Marketing */}
            </Link>
            <p className="lh-1 mt-2 text-white lh-base fs-5 ">
              Driving business through creativity
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="text-white my-4 w-100">
              <h6 className="spaced-text fw-bold">Quick Links</h6>
              <ul className="p-0 d-md-flex my-2 flex-wrap list-none">
                <Link className="text-white py-2" href="/aboutus">
                  <li className="pe-md-3 my-2 my-md-0">About Us</li>
                </Link>
                <Link className="text-white py-2" href="/services">
                  <li className="pe-md-3 my-2 my-md-0">Services</li>
                </Link>
                <Link className="text-white py-2" href="/packages">
                  <li className="pe-md-3 my-2 my-md-0">Pricing</li>
                </Link>
                <Link className="text-white py-2" href="/portfolio">
                  <li className="pe-md-3 my-2 my-md-0">Portfolio</li>
                </Link>
                <Link className="text-white py-2" href="/blogs">
                  <li className="pe-md-3 my-2 my-md-0">Blog</li>
                </Link>
                <Link className="text-white py-2" href="/contactus">
                  <li className="pe-md-3 my-2 my-md-0">Contact</li>
                </Link>
                <Link className="text-white py-2" href="/website">
                  <li className="pe-md-3 my-2 my-md-0">Website</li>
                </Link>
                <Link className="text-white py-2" href="/campaigns">
                  <li className="pe-md-3 my-2 my-md-0">Campaigns</li>
                </Link>
                <Link className="text-white py-2" href="/privacypolicy">
                  <li className="pe-md-3 my-2 my-md-0">Privacy Policy</li>
                </Link>
              </ul>
            </div>
            {socials && socials?.length ? (
              <div className="text-white">
                <h6 className="spaced-text fw-bold">Follow Us</h6>
                <div className="d-flex mt-2">
                  {socials?.map((social) => (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={social.link}
                      key={social.id}
                    >
                      {social.image ? (
                        <Image
                          src={social.image}
                          alt={social.platform}
                          height={24}
                          width={24}
                        />
                      ) : (
                        <>{renderIcons(social.platform)}</>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
