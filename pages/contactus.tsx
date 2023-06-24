import dynamic from "next/dynamic";
import apiRequest from "../components/Axios/api-request";
import Seo from "../core/Seo/Seo";
import { PageData } from "../lib/app.interface";

const Freelancer = dynamic(() => import("../core/Freelancer/Freelancer"));
const ContactForm = dynamic(() => import("../core/Forms/ContactForm"));
const AnimateInView = dynamic(
  () => import("../components/AnimateInView/AnimateInView")
);
interface AllContacts {
  id: number;
  officename: string;
  location: string;
  phoneNo: string;
  email: string;
}

const ContactUs = ({
  allContacts,
  pageContent,
}: {
  allContacts: AllContacts[];
  pageContent: PageData;
}) => {
  return (
    <>
      <Seo pageContent={pageContent} />
      <section className="bg-white ">
        <AnimateInView className="container py-5  d-flex flex-column justify-content-start">
          <h2 className=" fw-bold lh-1 m-0 text-dark lh-base text-start hero-sub-text font-size-sm">
            Get to know us
          </h2>
          <h3 className="font-size-lg fw-bold lh-1 my-3 text-dark lh-base">
            Contact Us
          </h3>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28257.425783987997!2d85.32187871333075!3d27.712380148414404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1672561710670!5m2!1sen!2snp"
              width="100%"
              height="500"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gripas Location Map"
            ></iframe>
          </div>

          <div className="row my-5  w-100 ">
            <div className="order-1 mt-5 mt-md-0 col-md-6">
              <h5 className="fw-semibold text-uppercase mb-4">
                Send Us a Message.
              </h5>
              <ContactForm />
            </div>
            <div className=" order-0 order-md-2  col-md-6">
              <h5 className="fw-semibold text-uppercase mb-4">
                General Information
              </h5>
              {allContacts &&
                allContacts?.map((location, index) => (
                  <div key={index} className="fs-5">
                    <h5 className="fs-5 fw-bold ">{location.officename}</h5>
                    <p className="m-0 fw-medium">{location.location}</p>
                    <p className="m-0 fw-medium">{location.phoneNo}</p>
                    <p className="m-0 fw-medium">{location.email}</p>
                  </div>
                ))}
            </div>
          </div>
        </AnimateInView>
      </section>
      <Freelancer />
    </>
  );
};

export default ContactUs;

export async function getServerSideProps() {
  const allContactResponse = await apiRequest(`contacts/`);
  const pageDetailsResponse = await apiRequest(`pagecontents/contactus`);

  const [allContacts, pageContentData] = await Promise.all([
    allContactResponse,
    pageDetailsResponse,
  ]);

  const pageContent = pageContentData ? pageContentData : {};

  return {
    props: {
      allContacts,
      pageContent,
    },
  };
}
