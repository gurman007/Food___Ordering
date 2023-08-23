import React from "react";
function Banner({ pic, title, content, orderChange, isBorderLeft }) {
  return (
    <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 [&>*]:my-6">
      <div
        className={`flex justify-center items-center ${
          orderChange ? `2xl:order-2 lg:order-2` : ``
        }`}
      >
        <div className="flex justify-center items-center px-6">
          <div className="lg:w-96 2xl:w-96">
            <div className="flex justify-start items-center my-3">
              <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
              <p className="text-2xl px-1">{title}</p>
            </div>
            <p className="text-2xl">{content}</p>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center items-center m-4 ${
          orderChange ? `2xl:order-1 lg:order-1` : ``
        }`}
      >
        <img className=" rounded-2xl" src={pic} alt="" />
      </div>
    </div>
  );
}

export default Banner;
