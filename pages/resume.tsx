import React, { useState, FC } from "react";
import { MdCheck, MdViewSidebar } from "react-icons/md";
import { motion } from "framer-motion";

interface Language {
  name: string;
  checked: boolean;
}

const languageList = ["English", "Thai"];

const Resume: FC = () => {
  const [languageState, setLanguageState] = useState<Array<Language>>(
    languageList.map((lang, i) => {
      return {
        name: lang,
        checked: i == 0,
      };
    })
  );

  const changeLang: (lang: string) => void = (lang) => {
    const newState: Array<Language> = languageList.map((elem) => {
      return {
        name: elem,
        checked: elem === lang,
      };
    });

    setLanguageState(newState);
  };

  return (
    <div className="grow flex flex-row gap-20 px-10 py-12 fullpage-item">
      <iframe className="w-[60%] h-full" src="/docs/resume.pdf" />

      <div className="flex flex-col">
        <h2 className="text-display-md text-white mb-10">Résumé</h2>
        <div className="flex flex-col gap-20">
          <div className="grid grid-flow-row gap-3">
            <h4 className="text-title-md text-white">Language</h4>
            <div className="flex gap-7">
              {languageState.map((lang) => {
                return (
                  <motion.div
                    layout
                    key={lang.name}
                    className={`cursor-pointer py-2 px-4 border-2 border-teal-200 flex gap-3 text-button-lg font-bold rounded-xl text-white items-center ${
                      lang.checked ? "bg-teal-800" : "bg-transparent"
                    }`}
                    onClick={() => changeLang(lang.name)}
                  >
                    {lang.checked && <MdCheck className="w-6 h-6" />}
                    <motion.p layout="position">{lang.name}</motion.p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col self-start gap-6">
            <div
              onClick={() => {
                window.open("/docs/resume.pdf");
              }}
              className="cursor-pointer py-2 px-4 border-2 border-indigo-300 flex gap-3 text-button-lg font-bold rounded-xl text-black items-center bg-white"
            >
              <MdViewSidebar className="w-6 h-6" />
              View PDF
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
