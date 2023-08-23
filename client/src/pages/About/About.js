import React from "react";
import Banner from "./Components/Banner";
import food8 from "../../assets/gallery/food8.jpg";
import food7 from "../../assets/gallery/food7.jpg";
import food9 from "../../assets/gallery/food9.jpg";

function About() {
  return (
    <div className="text-white">
      <div className="flex justify-center items-center my-3">
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
        <p className="text-2xl px-1">About Us</p>
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
      </div>
      <Banner
        pic={food8}
        title="Why The Indian Table?"
        content="First of all,it is for people who are igue to eat delicious.It is the place for those who want to enjoy amazing atmosphere,relaxing music and unsurpassed taste of our food"
      />
      <Banner
        pic={food7}
        title="Why you should choose?"
        content="It is something tastes better than you expected, you could use the word wow to express your surprise. If you say something tastes amazing, you're saying it tastes even better than great or really good."
        orderChange={true}
      />
      <Banner
        pic={food9}
        title="Reason to try Indian food?"
        content="Indian curries are filled with minerals and vitamins that are fulfilling. Of course, Indian foods are spicy, but they can also improve metabolism. You can definitely feast on Indian dishes on a daily basis. In addition, Indian curries several herbs and different types and colors of spices to add rich flavor."
        orderChange={false}
      />
    </div>
  );
}

export default About;
