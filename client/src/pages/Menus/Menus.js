import React, { useEffect } from "react";
import Banner from "./Components/Banner";
import Items from "./Components/Items";
import data from "./data";

import food13 from "../../assets/gallery/food13.jpg";

function Menus() {
  const smoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  };
  useEffect(() => {
    smoothScrolling();
  });
  smoothScrolling();
  console.log(data);
  return (
    <div>
      <Banner pic={food13} link="#menus" />
      <div id="menus" className="[&>*]:my-4">
        {data.map((e, key) => {
          return (
            <div key={key}>
              <h1 className="text-center text-primary font-bold text-4xl">
                {e.title}
              </h1>
              <div className="grid md:grid-cols-2 2xl:grid-cols-3 lg:grid-cols-3 m-4">
                {e.items.map((x, key) => {
                  return (
                    <Items
                      key={key}
                      name={x.name}
                      ingred={x.ingred}
                      price={x.price}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menus;
