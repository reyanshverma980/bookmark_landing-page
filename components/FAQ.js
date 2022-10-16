import React, { useState } from "react";

const FAQ = () => {
  const [para, setPara] = useState(0);
  const showPara1 = () => {
    setPara((prevState) => {
      if (prevState === 1) {
        return 0;
      } else {
        return 1;
      }
    });
  };
  const showPara2 = () => {
    setPara((prevState) => {
      if (prevState === 2) {
        return 0;
      } else {
        return 2;
      }
    });
  };
  const showPara3 = () => {
    setPara((prevState) => {
      if (prevState === 3) {
        return 0;
      } else {
        return 3;
      }
    });
  };
  const showPara4 = () => {
    setPara((prevState) => {
      if (prevState === 4) {
        return 0;
      } else {
        return 4;
      }
    });
  };

  return (
    <section className="flex flex-col items-center mt-48">
      <div className="text-center md:w-2/5 w-10/12 mx-auto">
        <h2 className="md:text-4xl text-3xl font-medium">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-grayish-blue mt-5">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="md:w-2/5 w-10/12 mx-auto my-14">
        {/* first question */}
        <div className="flex flex-col border-y py-5">
          <div
            className={`flex items-center justify-between ${
              para === 1 ? "" : "hover:text-soft-red"
            }`}
          >
            <span className=" text-xl">What is Bookmark?</span>
            <img
              src="/images/icon-arrow.svg"
              alt=""
              onClick={showPara1}
              className={`${para === 1 ? "arrow rotate-180" : ""}`}
            />
          </div>
          {para === 1 && (
            <p className=" text-grayish-blue text-lg pt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </p>
          )}
        </div>
        {/* second question */}
        <div className="flex flex-col border-b py-5">
          <div
            className={`flex items-center justify-between ${
              para === 2 ? "" : "hover:text-soft-red"
            }`}
          >
            <span className=" text-xl">How can I request a new browser?</span>
            <img
              src="/images/icon-arrow.svg"
              alt=""
              onClick={showPara2}
              className={`${para === 2 ? "arrow rotate-180" : ""}`}
            />
          </div>
          {para === 2 && (
            <p className="text-grayish-blue text-lg pt-6">
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </p>
          )}
        </div>
        {/* third question */}
        <div className="flex flex-col border-b py-5">
          <div
            className={`flex items-center justify-between ${
              para === 3 ? "" : "hover:text-soft-red"
            }`}
          >
            <span className=" text-xl">Is there a mobile app?</span>
            <img
              src="/images/icon-arrow.svg"
              alt=""
              onClick={showPara3}
              className={`${para === 3 ? "arrow rotate-180" : ""}`}
            />
          </div>
          {para === 3 && (
            <p className="text-grayish-blue text-lg pt-6">
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </p>
          )}
        </div>
        {/* fourth question */}
        <div className="flex flex-col border-b py-5">
          <div
            className={`flex items-center justify-between ${
              para === 4 ? "" : "hover:text-soft-red"
            }`}
          >
            <span className=" text-xl">
              What about other Chromium browsers?
            </span>
            <img
              src="/images/icon-arrow.svg"
              alt=""
              onClick={showPara4}
              className={`${para === 4 ? "arrow rotate-180" : ""}`}
            />
          </div>
          {para === 4 && (
            <p className="text-grayish-blue text-lg pt-6">
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </p>
          )}
        </div>
        {/* End of question */}
      </div>
      <button className="bg-soft-blue text-white font-medium  text-sm shadow-md tracking-widest px-7 py-4 rounded">
        More Info
      </button>
    </section>
  );
};

export default FAQ;
