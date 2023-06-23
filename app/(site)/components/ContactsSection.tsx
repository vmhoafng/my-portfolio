import ContactCard from "@/app/components/cards/ContactCard";
import React from "react";

const ContactsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between text-gray">
      <p className="lg:w-1/2">
        I&#39;m interested in freelance opportunities. However, if you have
        other request or question, don&#39;t hesitate to contact me
      </p>
      <ContactCard/>
    </div>
  );
};

export default ContactsSection;
