"use client";
import Link from "next/link";
import React, { Component } from "react";
import { BiSolidMap } from "react-icons/bi";
interface HeaderState {
  scrolled: boolean;
}

class Header extends Component<{}, HeaderState> {
  constructor(props:{}) {
    super(props);
    this.state = {
      scrolled: false, // Inicialmente, no se ha desplazado
    };
  }

  componentDidMount() {
    // Agrega un event listener para el evento de scroll cuando el componente se monta
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Asegúrate de eliminar el event listener cuando el componente se desmonte para evitar pérdidas de memoria
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // Verifica la posición del scroll para determinar si se ha desplazado cierta cantidad
    const scrollY = window.scrollY;
    const scrollThreshold = 800; // Cambia este valor según tu necesidad

    if (scrollY >= scrollThreshold) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const headerClasses = this.state.scrolled
      ? "bg-white fixed top-0 left-0 z-40 w-full flex items-center text-dark"
      : "bg-transparent fixed top-0 left-0 z-40 w-full flex items-center text-white";

    return (
      <div className={headerClasses}>
        <div className="container mx-auto">
          <div className="flex -mx-4 items-center justify-between relative">
            <div className="px-4 w-60 max-w-full">
              <Link href="/" className="py-5 flex items-center">
                <BiSolidMap className="text-3xl" /> Gonzher
              </Link>
            </div>
            <div className="flex px-4 justify-between items-center w-full">
              <div>
                <button
                  id="navbarToggler"
                  className="block absolute right-4 top-1/2 -translate-y-1/2 lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
                >
                  <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                  <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                  <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full hidden lg:block lg:static lg:shadow-none"
                >
                  <ul className="block lg:flex">
                    {[
                      { href: "#home", text: "Home" },
                      { href: "#about", text: "About" },
                      { href: "#pricing", text: "Pricing" },
                      { href: "#team", text: "Team" },
                      { href: "#contact", text: "Contact" },
                    ].map((item, index) => (
                      <li className="relative group" key={index}>
                        <a
                          href={item.href}
                          className="ud-menu-scroll text-base lg lg:group-hover:opacity-70 lg:group-hover:group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-7 xl:ml-12"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                    <li className="relative group submenu-item">
                      <a
                        href="javascript:void(0)"
                        className="text-base lg lg:group-hover:opacity-70 lg:group-hover:group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12 relative after:absolute after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-current after:rotate-45 lg:after:right-0 after:right-1 after:top-1/2 after:-translate-y-1/2 after:mt-[-2px]"
                      >
                        Pages
                      </a>
                      <div className="submenu hidden relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-sm lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white transition-[top] duration-300">
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
                            href={`${item
                              .toLowerCase()
                              .replace(/\s+/g, "-")}.html`}
                            className="block text-sm text-body-color rounded hover:text-primary py-[10px] px-4"
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
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
