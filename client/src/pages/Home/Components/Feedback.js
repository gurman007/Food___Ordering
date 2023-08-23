import React, { useState } from "react";
function Feedback() {
  const data = [
    {
      name: "Jan Sepherd",
      review:
        "I really cannot speak highly enough of this place. Not only is this the best Indian food I've ever experienced but they're a lovely team too. I feel so lucky to live close enough that I can visit whenever I like.",
    },
    {
      name: "Konark Deshpande",
      review:
        "We had our daughter's first year birthday party organized with The Indian Table. Great service! tasty food no doubt! we had last minute guest but Navi and his team took extra efforts to serve them. really appreciate! thanks Navi! definitely recommend this place.",
    },
    {
      name: "Samuel Evans",
      review:
        "We had a delicious dinner tonight and had a really great time.Food was authentic and came out quite quickly. The goat curry was particularly yummy, just be careful of the few bones in there. Rice was done perfectly too.A huge shout out to our server Mahalia who was very polite, fun and attentive. Will definitely be back again!",
    },
  ];
  const [Idx, setIdx] = useState(0);
  const Prev = () => {
    if (Idx < data.length - 1) setIdx(Idx + 1);
    else setIdx(0);
  };
  const Next = () => {
    if (Idx < data.length - 1) setIdx(Idx + 1);
    else setIdx(0);
  };
  return (
    <div>
      <div className="flex justify-center items-center my-6">
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
        <p className="text-2xl px-1">Feedbacks</p>
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
      </div>
      <div className="my-3 mx-3 lg:mx-20 2xl:mx-20 border-2 border-primary rounded-2xl bg-gray">
        <div className=" p-4 rounded-2xl">
          <p className="text-lg">{data[Idx].review}</p>
          <div className="flex justify-center [&>*]:mx-2 text-secondary">
            <button
              onClick={() => {
                Prev();
              }}
              className="text-2xl"
            >
              <i class="fa-regular fa-circle-left"></i>
            </button>
            <h1 className="text-2xl text-center ">{data[Idx].name}</h1>
            <button
              onClick={() => {
                Next();
              }}
              className="text-2xl"
            >
              <i class="fa-regular fa-circle-right"></i>
            </button>
          </div>
          <div className="flex justify-center items-center [&>*]:px-2 text-secondary">
            <p>
              <i class="fa-solid fa-star"></i>
            </p>
            <p>
              <i class="fa-solid fa-star"></i>
            </p>
            <p>
              <i class="fa-solid fa-star"></i>
            </p>
            <p>
              <i class="fa-solid fa-star"></i>
            </p>
            <p>
              <i class="fa-solid fa-star"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
