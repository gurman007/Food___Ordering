import React from "react";
import Feedback from "./Components/Feedback";
import Card from "./Components/Card";

import food10 from "../../assets/gallery/food10.jpg";
import food1 from "../../assets/gallery/food1.jpg";
import food2 from "../../assets/gallery/food2.jpg";
import food3 from "../../assets/gallery/food3.jpg";

function Home() {
  return (
    <div className="text-white">
      <div className="flex justify-center items-center my-3">
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
        <p className="text-2xl px-1">Feel the vibe</p>
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
      </div>
      <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 lg:px-10 2xl:px-10">
        <div className="flex justify-center items-center  px-6">
          <div className="lg:w-96 2xl:w-96">
            <h1 className="text-center text-3xl font-bold text-primary my-2">
              The Indian Table
            </h1>
            <p className="text-2xl">
              "All great deeds and all great thoughts have a ridiculous
              beginning. Great works are often born on a street corner or in a
              restaurant's revolving door."
            </p>
            <div className="py-2 flex justify-center items-center [&>*]:mx-4 [&>*]:text-xl my-2">
              <a
                target="__blank"
                href="https://theindiantableonline.com.au/order-now#indo-chinese"
                className="font-bold px-6 py-2 rounded-md border-2 text-primary border-primary  hover:bg-primary hover:text-white"
              >
                <p>Order Now</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center m-4">
          <img className="rounded-2xl" src={food10} alt="" />
        </div>
      </div>
      {/* Dishes */}
      <div className="flex justify-center items-center my-3">
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
        <p className="text-2xl px-1">Popular Dishes</p>
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
      </div>
      <div className="grid lg:grid-cols-3 2xl:grid-cols-3 [&>*]:p-4 [&>*]:my-2 items-center">
        <Card
          title="ALOO KI CHATPATI CHAAT"
          content="Lightly spiced potato cutlets finished with chickpeas & topped
          with a combination of yoghurt, mint & tamarind chutney."
          price="$13.59"
          pic={food1}
        />
        <Card
          title="PUNJABI PAKORA (V)"
          content="Crisp deep fried croquets of onion, mix-veggies & spinach made in traditional Punjabi style."
          price="$17.90"
          pic={food2}
        />
        <Card
          title="CHICKEN 65"
          content="A tangy street speciality from South India, chicken chunks flavoured with spices & tossed with shallots & curry leaves."
          price="$16.59"
          pic={food3}
        />
      </div>
      <Feedback />
    </div>
  );
}

export default Home;
