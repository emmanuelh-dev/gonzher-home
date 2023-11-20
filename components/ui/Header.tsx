"use client";
import Link from "next/link";
import React, { Component } from "react";
import { BiSolidMap } from "react-icons/bi";
import MobileNav from "./MobileNav";
import { headerNavLinks } from "@/data/headerNavLinks";
import { buttonVariants } from "./button";
interface HeaderState {
  scrolled: boolean;
}

class Header extends Component<{}, HeaderState> {
  constructor(props: {}) {
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
    const scrollThreshold = 100; // Actualiza la altura para cambiar el fondo

    if (scrollY >= scrollThreshold) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const headerClasses = this.state.scrolled
      ? "bg-white fixed top-0 left-0 z-40 w-screen flex items-center text-dark"
      : "bg-transparent fixed top-0 left-0 z-40 w-screen flex items-center text-white";

    return (
      <div className={headerClasses}>
        <div className="container mx-auto">
          <div className="px-4 w-full flex items-center justify-between">
            <Link href="/" className="py-5 flex items-center font-title">
              <BiSolidMap className="text-3xl" /> Gonzher
            </Link>
            <div className="md:hidden">
              <MobileNav />
            </div>
            <div className="md:flex -mx-4 items-center justify-between hidden">
              <div className="flex px-4 justify-between items-center w-full">
                <div>
                  <nav
                    id="navbarCollapse"
                    className="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full hidden lg:block lg:static lg:shadow-none"
                  >
                    <ul className="block lg:flex gap-8">
                      {headerNavLinks.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className={`buttonVariants ${buttonVariants({
                            variant: "link",
                          })} ${!this.state.scrolled && 'text-white'}`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
