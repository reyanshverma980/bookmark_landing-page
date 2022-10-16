import React, { useState } from "react";
import Feature1 from "./features/Feature1";
import Feature2 from "./features/Feature2";
import Feature3 from "./features/Feature3";

const Main = () => {
  const [featureNum, setFeatureNum] = useState(1);
  const setFeature1 = () => {
    setFeatureNum(1);
  };

  const setFeature2 = () => {
    setFeatureNum(2);
  };

  const setFeature3 = () => {
    setFeatureNum(3);
  };

  return (
    <main className="mb-10">
      <div className=" text-center lg:w-2/5 w-10/12 mx-auto">
        <h2 className=" lg:text-4xl text-3xl font-medium">Features</h2>
        <p className=" text-lg text-grayish-blue mt-5">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className=" mt-16 lg:w-1/2 w-10/12 mx-auto lg:border-b-2 pb-5">
        <ul className="flex lg:flex-row flex-col w-full text-lg  text-grayish-blue items-center justify-around  cursor-pointer">
          <li
            onClick={setFeature1}
            className={`${
              featureNum === 1
                ? "feature-border text-very-dark-blue"
                : "hover:text-soft-red"
            } relative py-2 border-y-2 w-full lg:w-fit lg:py-0 lg:border-y-0 text-center`}
          >
            Simple Bookmarking
          </li>
          <li
            onClick={setFeature2}
            className={`${
              featureNum === 2
                ? "feature-border text-very-dark-blue"
                : "hover:text-soft-red"
            } relative py-2 border-b-2 w-full lg:w-fit lg:py-0 lg:border-y-0 text-center `}
          >
            Speedy Searching
          </li>
          <li
            onClick={setFeature3}
            className={`${
              featureNum === 3
                ? "feature-border text-very-dark-blue"
                : "hover:text-soft-red"
            } relative py-2 border-b-2 w-full lg:w-fit lg:py-0 lg:border-y-0 text-center `}
          >
            Easy Sharing
          </li>
        </ul>
      </div>

      {featureNum === 1 && <Feature1 />}
      {featureNum === 2 && <Feature2 />}
      {featureNum === 3 && <Feature3 />}
    </main>
  );
};

export default Main;
