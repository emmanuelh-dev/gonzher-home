import Link from "next/link"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <TruckIcon className="size-6 text-primary-foreground" />
          <span className="text-primary-foreground font-bold text-lg ml-2">Heavy Cargo Transport</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-primary-foreground font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-primary-foreground font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Trucks
          </Link>
          <Link
            href="#"
            className="text-primary-foreground font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-primary">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-primary-foreground">
                  Heavy Cargo Transport Solutions
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl">
                  Our fleet of heavy-duty trucks and experienced drivers are ready to handle all your cargo
                  transportation needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Reliable and Efficient Cargo Transport
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of cargo transportation services to meet your needs, from local deliveries to
                  long-haul cross-country shipments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Local Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Fast and reliable local deliveries within your city or region.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Long-Haul Transport</h3>
                <p className="text-sm text-muted-foreground">
                  Cross-country and interstate cargo transportation services.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Specialized Hauling</h3>
                <p className="text-sm text-muted-foreground">
                  Oversized, heavy, or fragile cargo transportation solutions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Warehousing</h3>
                <p className="text-sm text-muted-foreground">
                  Secure storage and distribution services for your cargo.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Fleet Management</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive fleet management solutions for your business.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Dedicated customer support available around the clock.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="trucks" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Fleet</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Diverse Fleet of Heavy-Duty Trucks</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our fleet includes a variety of heavy-duty trucks to handle all your cargo transportation needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Semi Truck"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <h3 className="text-lg font-bold mt-4">Semi Truck</h3>
                <p className="text-sm text-muted-foreground">
                  Our fleet of semi-trucks are perfect for long-haul cargo transportation.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Dump Truck"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <h3 className="text-lg font-bold mt-4">Dump Truck</h3>
                <p className="text-sm text-muted-foreground">
                  Ideal for transporting heavy or bulky materials like construction supplies.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Flatbed Truck"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <h3 className="text-lg font-bold mt-4">Flatbed Truck</h3>
                <p className="text-sm text-muted-foreground">
                  Our flatbed trucks can handle oversized or irregularly shaped cargo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get in Touch for Your Cargo Needs
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fill out the form below and one of our representatives will contact you shortly.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-4">
                <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                <Textarea placeholder="Message" className="max-w-lg flex-1" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary">
        <p className="text-xs text-primary-foreground">&copy; 2024 Heavy Cargo Transport. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs text-primary-foreground hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs text-primary-foreground hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}