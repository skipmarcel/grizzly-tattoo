import PageHead from "@/components/pageHead";
import ContactFormSection from "./ContactFormSection";
import Map from "../homePage/Map";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
  return (
    <>
      <PageHead
        hasBreadCrumb
        title="Contact Us"
        pageName="Contact Us"
        imgSrc="/images/pagehead/grizzlytshirts.jpg"
      />
      <ContactInfo />
      <ContactFormSection />
      <Map />
    </>
  );
};

export default ContactPage;
