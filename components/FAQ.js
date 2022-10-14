import React from "react";

const FAQ = () => {
  return (
    <section className="flex flex-col items-center mt-48">
      <div className="text-center w-2/5 mx-auto">
        <h2 className="text-4xl font-medium">Frequently Asked Questions</h2>
        <p className="text-lg text-grayish-blue mt-5">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="w-2/5 mx-auto my-14">
        {/* first question */}
        <div className="flex flex-col border-y py-5">
          <div className="flex items-center justify-between hover:text-soft-red">
            <span className=" text-xl">What is Bookmark?</span>
            <img src="/images/icon-arrow.svg" alt="" />
          </div>
          <p className=" text-grayish-blue text-lg pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
        {/* second question */}
        <div className="flex flex-col border-b py-5">
          <div className="flex items-center justify-between hover:text-soft-red">
            <span className=" text-xl">How can I request a new browser?</span>
            <img src="/images/icon-arrow.svg" alt="" />
          </div>
          <p className="text-grayish-blue text-lg pt-6">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
        {/* third question */}
        <div className="flex flex-col border-b py-5">
          <div className="flex items-center justify-between hover:text-soft-red">
            <span className=" text-xl">Is there a mobile app?</span>
            <img src="/images/icon-arrow.svg" alt="" />
          </div>
          <p className="text-grayish-blue text-lg pt-6">
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </div>
        {/* fourth question */}
        <div className="flex flex-col border-b py-5">
          <div className="flex items-center justify-between hover:text-soft-red">
            <span className=" text-xl">
              What about other Chromium browsers?
            </span>
            <img src="/images/icon-arrow.svg" alt="" />
          </div>
          <p className="text-grayish-blue text-lg pt-6">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
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
