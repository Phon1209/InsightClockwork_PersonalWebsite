import React from "react";
import Head from "next/head";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 | Page Not Found</title>
      </Head>
      <section className="fullpage-item flex flex-col justify-center items-center">
        <h1 className="text-display-lg text-white mb-12">
          404 | This page doesn&apos;t exist
        </h1>
        <Link href="/">
          <div className=" text-black py-4 px-6 bg-white rounded-md flex gap-4 items-center cursor-pointer">
            <IoMdArrowBack />
            <p className="text-button-lg">Back to Home Page</p>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Custom404;
