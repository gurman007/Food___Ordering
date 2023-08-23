import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/header/logo.png";
import Dot from "./Components/Dot";
import "./Navbar.css";

function Navbar() {
  let route = useLocation().pathname;
  const displayMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
    menu.classList.toggle("menu");
  };
  return (
    <header>
      <nav className="flex justify-between items-center  lg:px-10 2xl:px-10">
        <div className="nav__left">
          <img className="h-20" src={logo} alt="" />
        </div>
        {/* <div className="nav__mid flex justify-between items-center [&>*]:mx-2">
          <NavLink
            className={
              route === "/"
                ? "[&>*]:bg-primary [&>*]:h-5 [&>*]:w-5"
                : "[&>*]:bg-black"
            }
            to="/"
          >
            <Dot />
          </NavLink>
          <NavLink
            className={
              route === "/menus"
                ? "[&>*]:bg-primary [&>*]:h-5 [&>*]:w-5"
                : "[&>*]:bg-black"
            }
            to="/menus"
          >
            <Dot />
          </NavLink>

          <NavLink
            className={
              route === "/gallery"
                ? "[&>*]:bg-primary [&>*]:h-5 [&>*]:w-5"
                : "[&>*]:bg-black"
            }
            to="/gallery"
          >
            <Dot />
          </NavLink>
          <NavLink
            className={
              route === "/about"
                ? "[&>*]:bg-primary [&>*]:h-5 [&>*]:w-5"
                : "[&>*]:bg-black"
            }
            to="/about"
          >
            <Dot />
          </NavLink>
          <NavLink
            className={
              route === "/contactus"
                ? "[&>*]:bg-primary [&>*]:h-5 [&>*]:w-5"
                : "[&>*]:bg-black"
            }
            to="/contactus"
          >
            <Dot />
          </NavLink>
        </div> */}
        <div className="nav__right text-white [&>*]:mx-4 ">
          <NavLink className="hover:text-primary" to="/">
            Home
          </NavLink>
          <NavLink className="hover:text-primary" to="/menus">
            Menus
          </NavLink>

          <NavLink className="hover:text-primary" to="/gallery">
            Gallery
          </NavLink>
          <NavLink className="hover:text-primary" to="/about">
            About Us
          </NavLink>
          <NavLink className="hover:text-primary" to="/contactus">
            Conatct Us
          </NavLink>
        </div>
      </nav>
      <div
        id="menu"
        className="hidden text-white [&>a]:my-4 [&>a]:px-4 hover:text-primary"
      >
        <NavLink
          onClick={() => {
            displayMenu();
          }}
          to="/"
        >
          Home
        </NavLink>
        <hr className="text-primary mx-4" />
        <NavLink
          onClick={() => {
            displayMenu();
          }}
          to="/menus"
        >
          Menus
        </NavLink>
        <hr className="text-primary mx-4" />
        <NavLink
          onClick={() => {
            displayMenu();
          }}
          to="/gallery"
        >
          Gallery
        </NavLink>
        <hr className="text-primary mx-4" />
        <NavLink
          onClick={() => {
            displayMenu();
          }}
          to="/about"
        >
          About Us
        </NavLink>
        <hr className="text-primary mx-4" />
        <NavLink
          onClick={() => {
            displayMenu();
          }}
          to="/contactus"
        >
          ContactUs
        </NavLink>
        <hr className="text-primary mx-4" />
      </div>
      <div className="menuIcon">
        <i
          className="text-primary text-2xl px-4 py-4 fa-solid fa-bars-staggered"
          onClick={() => {
            displayMenu();
          }}
        ></i>
      </div>
    </header>
  );
}

export default Navbar;
