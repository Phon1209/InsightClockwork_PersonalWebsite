import React, { useEffect } from "react";
import Bubble from "../bubble/bubble";

const Frontpage = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col lg:flex-row">
        <section className=" text-white text-center p-16 flex justify-center items-center flex-col min-h-[400px] lg:items-start lg:text-left">
          <h1 className="text-display-lg">Patiphon Loetsuthakun</h1>
          <h3 className="text-headline-sm">Frontend Developer</h3>
        </section>
        <section className="flex-grow flex justify-center items-center">
          <h3 className="text-display-md text-orange-400">Portfolio</h3>
        </section>
      </div>
    </>
  );
};

export default Frontpage;
