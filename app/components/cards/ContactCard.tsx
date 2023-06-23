import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactCard = () => {
  return (
    <div className="p-4 border border-gray">
      <div className="font-semibold pb-4">Message me here</div>
      <div className="flex flex-col gap-2 justify-center-center">
        <div className="flex gap-2">
          <AiOutlineMail size={20} /> mhoang.developer@gmail.com
        </div>
        <div className="flex gap-2">
          <BsFillTelephoneFill size={16} /> +84929829783
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
