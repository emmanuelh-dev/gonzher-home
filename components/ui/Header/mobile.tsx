import Link from "next/link";
import React, { useState } from "react";
import { BiSolidMap } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { buttonVariants } from "../button";
const LINKS = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#pricing", text: "Pricing" },
  { href: "#team", text: "Team" },
  { href: "#contact", text: "Contact" },
];
const Mobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="flex -mx-4 items-center justify-between  ">
        <div className="px-4 w-60 max-w-full">
          <Link href="/" className="py-5 flex items-center">
            <BiSolidMap className="text-3xl" /> Gonzher
          </Link>
        </div>
        <div className="flex px-4 justify-between items-center w-full">
          <button
            id="navbarToggler"
            className="block absolute right-4 top-1/2 -translate-y-1/2 lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <AiOutlineClose className="text-3xl" />
            ) : (
              <AiOutlineMenu className="text-3xl" />
            )}
          </button>

          <nav>
            <ul className="block lg:flex items-center gap-8">
              {LINKS.map((item, index) => (
                <li className="group" key={index}>
                  <a href={item.href} className="">
                    {item.text}
                  </a>
                </li>
              ))}
              <li className=" ">
                <a
                  href=""
                  className="text-base lg lg:group-hover:opacity-70 lg:hover:group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12   after:absolute after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-current after:rotate-45 lg:after:right-0 after:right-1 after:top-1/2 after:-translate-y-1/2 after:mt-[-2px]"
                >
                  Pages
                </a>
                <div className="submenu hidden   lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-sm lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white transition-[top] duration-300">
                  {[
                    "About Page",
                    "Pricing Page",
                    "Contact Page",
                    "Blog Grid Page",
                    "Blog Details Page",
                    "Sign Up Page",
                    "Sign In Page",
                    "404 Page",
                  ].map((item, index) => (
                    <a
                      href={`${item.toLowerCase().replace(/\s+/g, "-")}.html`}
                      className="block text-sm rounded hover:text-primary py-[10px] px-4"
                      key={index}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="sm:flex justify-end hidden pr-16 lg:pr-0">
          <a
            href="signin.html"
            className="text-base font-medium hover:opacity-70 py-3 px-7 loginBtn"
          >
            Sign In
          </a>
          <a
            href="signup.html"
            className="text-base font-medium bg-white bg-opacity-20 rounded-lg py-3 px-6 hover:bg-opacity-100 hover:text-dark signUpBtn duration-300 ease-in-out"
          >
            Sign Up
          </a>
        </div>
      </div>
      {open ? (
        <div>
          {LINKS.map((item, index) => (
            <li className="" key={index}>
              <a href={item.href} className="">
                {item.text}
              </a>
            </li>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Mobile;
