import dynamic from "next/dynamic";
import Head from "next/head";
import apiRequest from "../components/Axios/api-request";

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

const ContactUs = ({ allContacts }: { allContacts: AllContacts[] }) => {
  return (
    <section className="bg-white ">
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Gripas Marketing was established back in 2020 during the Pandemic. With digitalization we began making name in the Digital Marketing field. Till now we have served 100+ clients and counting. We specialize on 'Social Media Marketing' with three package available, currently. Further, we believe in driving business through creativity. Our Mission is to help SMEs to achieve their Sales and Marketing objective via Social Media Marketing. Our Vision is to empower youngsters and bring latest automation technologies."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
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
            {allContacts.map((location, index) => (
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
      <Freelancer />
    </section>
  );
};

export default ContactUs;

export async function getStaticProps() {
  const allContactResponse = await apiRequest(`contacts/`);

  const [allContacts] = await Promise.all([allContactResponse]);

  return {
    props: {
      allContacts,
    },
  };
}
