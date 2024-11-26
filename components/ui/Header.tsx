import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiSolidMap } from "react-icons/bi";
import {
  FaPhoneAlt,
  FaFileInvoiceDollar,
  FaTruck,
  FaMapMarkerAlt,
  FaDownload,
  FaBook,
  FaUsers,
  FaMobile,
} from "react-icons/fa";

import MobileNav from "./MobileNav";
import { Button, buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Container from "./container";
import { navigationSections } from "@/data/navigation";

const validPathsNames = [
  "/app-operadores",
  "/",
  "/gonzher-transports",
  "/factura-electronica-sat",
];

interface HeaderProps {
  pathName: string;
}

const Header = ({ pathName }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = scrolled
    ? "bg-white text-black"
    : validPathsNames.includes(pathName)
    ? "bg-transparent text-white"
    : "bg-white text-black";

  const textColor = scrolled
    ? "text-black"
    : validPathsNames.includes(pathName)
    ? "text-white"
    : "text-dark";

  const renderNavigationItem = (section: any) => {
    if (section.type === "dropdown") {
      return (
        <NavigationMenuItem key={section.id}>
          <NavigationMenuTrigger className={textColor}>
            {section.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={`grid gap-3 p-4 w-[500px] grid-cols-2`}>
              {section.sections &&
                section.sections.map((subSection: any) => (
                  <div key={subSection.title}>
                    <h3 className="ml-4 font-semibold text-white/90">{subSection.title}</h3>
                    {subSection.items.map((item: any) => (
                      <ListItem
                        key={item.href}
                        href={item.href}
                        title={item.title}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </div>
                ))}
              {section.items &&
                section.items.map((item: any) => (
                  <ListItem
                    key={item.href}
                    href={item.href}
                    title={item.title}
                    icon={item.icon}
                  >
                    {item.description}
                  </ListItem>
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    }

    if (section.type === "links") {
      return (
        <NavigationMenuItem key={section.id}>
          {section.items.map((link: any) => (
            <NavigationMenuLink
              key={link.href}
              href={link.href}
              className={`${buttonVariants({
                variant: link.variant,
              })} ${textColor}`}
            >
              {link.title}
            </NavigationMenuLink>
          ))}
        </NavigationMenuItem>
      );
    }
  };

  return (
    <div
      className={`transition-all fixed top-0 left-0 z-40 w-screen ${headerClasses}`}
    >
      <Container>
        <div
          className={`${
            scrolled ? "h-0 overflow-hidden" : "h-12"
          } container justify-end flex items-center gap-4 transition-all duration-300`}
        >
          <a
            href="tel:+528112918108"
            className="justify-end flex items-center py-4"
            title="Número de teléfono de Gonzher"
          >
            <FaPhoneAlt className="mr-2" title="Icono de teléfono" />
            +52 8112918108
          </a>
          <a href="https://system.gonzher.com/login" title="Sistemas Gonzher">
            Iniciar sesión
          </a>
        </div>
      </Container>

      <hr className="container" />
      <Container>
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="py-5 flex items-center font-title">
            <BiSolidMap className="text-3xl" /> GONZHER
          </Link>

          <div className="md:hidden">
            <MobileNav />
          </div>

          <div className="md:flex -mx-4 items-center justify-between hidden">
            <div className="flex px-4 justify-between items-center w-full">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationSections.map((section) =>
                    renderNavigationItem(section)
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ComponentType<any> }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {Icon && (
              <div className="p-2 border border-teal-300 rounded-md">
                <Icon className="text-lg" />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-semibold">{title}</div>
              </div>
              {children && (
                <p className="line-clamp-2 text-[0.8rem] leading-snug text-muted-foreground font-light">
                  {children}
                </p>
              )}
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
