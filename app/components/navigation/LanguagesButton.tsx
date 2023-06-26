import { Listbox } from "@headlessui/react";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const LanguagesButton = () => {
  const appLanguages = ["EN", "VI", "FR"];
  const [currentLanguage, setCurrentLanguage] = useState(appLanguages[0]);

  return (
    <Listbox
      as="li"
      className="
        relative 
        w-fit 
        lg:text-base 
        text-4xl"
      value={currentLanguage}
    >
      <Listbox.Button
        className="
            flex 
            gap-1 
            items-center
            text-gray 
            font-semibold "
      >
        {currentLanguage}
        <FaAngleDown />
      </Listbox.Button>
      <Listbox.Options
        className="
            absolute 
            gap-2 
            py-2 
            border 
            border-gray 
            w-full 
            flex 
            flex-col 
            justify-between 
            items-center
            bg-background"
      >
        {appLanguages
          .filter((item) => item !== currentLanguage)
          .map((language, id) => (
            <Listbox.Option
              value={currentLanguage}
              onClick={() => setCurrentLanguage(language)}
              key={id}
              className="
                text-center
                w-full
                text-gray
                hover:text-white
                transition
                duration-300
                cursor-pointer"
            >
              {language}
            </Listbox.Option>
          ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default LanguagesButton;
