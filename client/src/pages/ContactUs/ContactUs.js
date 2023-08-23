import React from "react";
import Detail from "./Components/Detail";

function ContactUs() {
  return (
    <div className="text-white">
      <div className="flex justify-center items-center my-3">
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
        <p className="text-2xl px-1">Contact Us</p>
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
      </div>
      <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 lg:px-10 2xl:px-10">
        <div className="flex justify-center items-center  px-6">
          <div className="lg:w-96 2xl:w-96 [&>*]:my-6">
            <Detail
              title="Address"
              content="10/68 Nelson St, Wallsend
              NSW 2287, Australia"
              link="https://www.google.com/maps/place/The+Indian+table/@-32.9001426,151.6665429,17z/data=!3m1!4b1!4m5!3m4!1s0x6b733fd111ae9fbf:0x999426709f73273b!8m2!3d-32.9001841!4d151.668693"
            />
            <Detail
              title="Number"
              content="+61 02 4950 0621"
              link="tel:0249500621"
            />
            <Detail
              title="Email"
              content="theindiantable2021@gmail.com"
              link="mailto:theindiantable2021@gmail.com"
            />
            <hr className="text-primary" />
            <div className="text-3xl flex justify-center text-primary [&>*]:mx-6 [&>*]:mb-6">
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
        <div className="flex justify-center items-center my-4">
          <div className="border-2 border-primary rounded-2xl">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.9253239012733!2d151.6687316!3d-32.900142599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b733fd111ae9fbf%3A0x999426709f73273b!2sThe%20Indian%20table!5e0!3m2!1sen!2sin!4v1667351857621!5m2!1sen!2sin"
              style={{
                filter: "invert(90%)",
                border: "0",
                translate: "-3% -3%",
                animation: "bounce 1.5s ease-in-out infinite alternate both",
              }}
              className="h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] 2xl:h-[500px] 2xl:w-[500px] rounded-2xl"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
