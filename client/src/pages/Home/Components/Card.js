import React from "react";

function Card({ pic, title, price, content }) {
  return (
    <div className="box">
      <div className="flex justify-center items-center bg-gray rounded-2xl ">
        <div className="[&>*]:my-4">
          <h1 className="text-xl text-center">{title} </h1>
          <div className="text-xl text-center bg-secondary text-black font-bold rounded-full">
            <span>{price}</span>
          </div>
          <div className="flex justify-center">
            <img
              className="rounded-full h-[200px] w-[200px]"
              src={pic}
              alt=""
            />
          </div>

          <p className="text-lg p-4">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
