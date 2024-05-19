import React from "react";
import { lang } from "./LanguageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const PreferredLangKey = useSelector(
    (store) => store.config.PreferredLanguage,
  );

  return (
    <div className=" pt-[20%] flex justify-center ">
      <form className=" w-2/3 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[PreferredLangKey].searchplaceholder} //we have to write the Preferredlang inside [] to dynamically assign its value because it won't be find inside lang
        />
        <button className="p-2 m-4 col-span-3 bg-red-700 rounded-md ">
          {lang[PreferredLangKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
