'use client';
import Link from 'next/link';
import React, { Component } from 'react';
import { BiSolidMap } from 'react-icons/bi';
import MobileNav from './MobileNav';
import { headerNavLinks } from '@/data/headerNavLinks';
import { buttonVariants } from './button';
import { FaPhoneAlt } from 'react-icons/fa';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useRouter } from 'next/router';

interface HeaderProps {
  pathName: string;
}

interface HeaderState {
  scrolled: boolean;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      scrolled: false, // Inicialmente, no se ha desplazado
    };
  }

  componentDidMount() {
    // Agrega un event listener para el evento de scroll cuando el componente se monta
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Asegúrate de eliminar el event listener cuando el componente se desmonte para evitar pérdidas de memoria
    window.removeEventListener('scroll', this.handleScroll);
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
    const { scrolled } = this.state;
    const { pathName  } = this.props;

    const headerClasses =
      pathName === '/'
        ? scrolled
          ? 'bg-white fixed top-0 left-0 z-40 w-screen text-dark'
          : 'bg-transparent fixed top-0 left-0 z-40 w-screen text-white'
        : 'bg-white fixed top-0 left-0 z-40 w-screen text-dark';
    const hiddePhone = scrolled ? 'h-0 overflow-hidden' : 'h-auto';
    return (
      <div className={`transition-all ${headerClasses}`}>
        <div
          className={`${hiddePhone} container justify-end flex items-center gap-4 transition-all duration-300`}
        >
          <a
            href='tel:+528112918108'
            className='justify-end flex items-center py-4'
            title='Número de teléfono de Gonzher'
          >
            <FaPhoneAlt className='mr-2' title='Icono de teléfono' />
            +52 8112918108
          </a>
          <a href='https://system.gonzher.com/login' title='Sistemas Gonzher'>
            Iniciar sesión
          </a>
        </div>

        <hr className='container' />
        <div className='container mx-auto'>
          <div className='px-4 w-full flex items-center justify-between'>
            <Link href='/' className='py-5 flex items-center font-title'>
              <BiSolidMap className='text-3xl' /> GONZHER
            </Link>
            <div className='md:hidden'>
              <MobileNav />
            </div>
            <div className='md:flex -mx-4 items-center justify-between hidden'>
              <div className='flex px-4 justify-between items-center w-full'>
                <div>
                  <nav
                    id='navbarCollapse'
                    className='absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full hidden lg:block lg:static lg:shadow-none'
                  >
                    <ul className='block lg:flex gap-8'>
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger
                              className={
                                this.state.scrolled ? undefined : 'text-white'
                              }
                            >
                              Productos
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                <li className='row-span-3'>
                                  <NavigationMenuLink asChild>
                                    <a
                                      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                                      href='/'
                                    >
                                      <div className='mb-2 mt-4 text-lg font-medium font-title'>
                                        GONZHER
                                      </div>
                                      <p className='text-sm leading-tight text-muted-foreground'>
                                        Logística y Facturación para
                                        Transportistas
                                      </p>
                                    </a>
                                  </NavigationMenuLink>
                                </li>
                                <ListItem
                                  href='https://system.gonzher.com'
                                  title='Factuación Gonzher'
                                >
                                  Sistema en la nube que facilita tu Facturación
                                  en Línea.
                                </ListItem>
                                <ListItem
                                  href='https://api.gonzher.com'
                                  title='GPS Gonzher'
                                >
                                  Monitorea y administra fácilmente tu fuerza
                                  móvil de trabajadores.
                                </ListItem>
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger
                              className={
                                this.state.scrolled ? undefined : 'text-white'
                              }
                            >
                              Secciones
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className='grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] '>
                                {headerNavLinks.map((link) => (
                                  <ListItem
                                    key={link.title}
                                    title={link.title}
                                    href={link.href}
                                    className={`buttonVariants ${buttonVariants(
                                      {
                                        variant: 'link',
                                      }
                                    )} text-white`}
                                  ></ListItem>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                          <NavigationMenuLink
                            href='https://docs.gonzher.com/docs/intro'
                            className={`buttonVariants ${buttonVariants({
                              variant: 'link',
                            })} ${!this.state.scrolled && 'text-white'}`}
                          >
                            Documentación
                          </NavigationMenuLink>
                          <Link
                            href='/nosotros'
                            className={`buttonVariants ${buttonVariants({
                              variant: 'link',
                            })} ${!this.state.scrolled && 'text-white'}`}
                          >
                            Nosotros
                          </Link>
                        </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
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

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground font-light'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
