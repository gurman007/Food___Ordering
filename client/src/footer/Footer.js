import React from "react";
import { NavLink } from "react-router-dom";
import OpeningHour from "./Components/OpeningHour";

function Footer() {
  return (
    <div
      className=""
      style={{
        marginTop: "2rem",
      }}
    >
      <div className="h-[2px] bg-primary"></div>
      <div className="bg-black ">
        <div className="text-white grid 2xl:grid-cols-3 lg:grid-cols-3 pt-20 [&>*]:my-5">
          <div className="flex justify-center">
            <div>
              <h1 className="text-2xl text-bold">THE INDIAN TABLE</h1>
              <p className="text-md text-bold text-gray-500 py-2 mb-5">
                The Real Flabours
              </p>
              <a
                target="__blank"
                href="https://theindiantableonline.com.au/order-now#indo-chinese"
                className="px-6 py-2 rounded-md border-2 bg-white text-black"
              >
                <span>
                  <i className="fa-solid fa-pen-to-square"></i> Order Your Food
                </span>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-2xl text-bold">OPENING HOURS</h1>
              <div className="py-2">
                <OpeningHour day="Sunday" hours="9:00 AM to 2:00 PM" />
                <OpeningHour day="Monday" hours="5:00 AM to 9:00 PM" />
                <OpeningHour day="Tuesday" hours="Closed" />
                <OpeningHour day="Wednesday" hours="5:00 AM to 9:00 PM" />
                <OpeningHour day="Thursday" hours="5:00 AM to 9:00 PM" />
                <OpeningHour day="Friday" hours="5:00 AM to 10:00 PM" />
                <OpeningHour day="Saturday" hours="9:00 AM to 2:00 PM" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="text-2xl text-bold">CONTACT US</h1>
              <p className="text-md text-bold text-gray-500 py-2 mb-5">
                <a
                  target="__blank"
                  href="https://www.google.com/maps/place/The+Indian+table/@-32.9001426,151.6665429,17z/data=!3m1!4b1!4m5!3m4!1s0x6b733fd111ae9fbf:0x999426709f73273b!8m2!3d-32.9001841!4d151.668693"
                >
                  10/68 Nelson St, Wallsend <br />
                  NSW 2287, Australia
                </a>
              </p>
              <a
                className="text-md text-bold text-gray-500 py-2 mt-10"
                target="_blank"
                href="mailto:theindiantable2021@gmail.com"
              >
                Email:- theindiantable2021@gmail.com <br />
              </a>
              <a
                className="text-md text-bold text-gray-500"
                target="_blank"
                href="tel:0249500621"
              >
                Phone:- 02 4950 0621
              </a>
            </div>
          </div>
        </div>
        <div className="text-3xl flex justify-center text-white [&>*]:mx-6 [&>*]:mb-6">
          <a
            target="__blank"
            href="https://www.facebook.com/profile.php?id=100057217639268"
          >
            <i className="text-blue-500 fa-brands fa-facebook"></i>
          </a>
          <a
            target="__blank"
            href="https://www.instagram.com/theindiantablerestaurant/?hl=en"
          >
            <i className="text-red-700 fa-brands fa-instagram"></i>
          </a>
          <a
            target="__blank"
            href="https://www.google.com/maps/place/The+Indian+table/@-32.9001426,151.6665429,17z/data=!3m1!4b1!4m5!3m4!1s0x6b733fd111ae9fbf:0x999426709f73273b!8m2!3d-32.9001841!4d151.668693"
          >
            <i className="text-gray-600 fa-solid fa-map-location-dot"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
