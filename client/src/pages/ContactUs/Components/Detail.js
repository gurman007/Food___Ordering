import React from "react";
function Detail({ title, content, link }) {
  return (
    <div>
      <div className="flex justify-start items-center">
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
        <p className="text-2xl px-1">{title}</p>
      </div>
      <p className="text-lg">
        <a target="__blank" href={link}>
          {content}
        </a>
      </p>
    </div>
  );
}

export default Detail;
