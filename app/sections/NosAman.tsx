import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: 'Transportes THT',
    username: '@Transportes THT',
    body: 'El control de flotas GPS es preciso, la plataforma de software de gestión de flotas es sencilla y de fácil acceso.',
    img: 'https://avatar.vercel.sh/carlos',
  },
  {
    name: 'Legs',
    username: '@Legs',
    body: 'La facturación combustible para flotillas es fácil de usar, nos ha salvado un montón de tiempo con los papeleos del sistema de facturación CFDI.',
    img: 'https://avatar.vercel.sh/luisa',
  },
  {
    name: 'Autoexpress Guzmán',
    username: '@miguel',
    body: 'El monitoreo de flotas con control de flotas GPS gratis ahora es más fácil que nunca.',
    img: 'https://avatar.vercel.sh/miguel',
  },
  {
    name: 'Gabriel',
    username: '@Gabriel',
    body: 'Este software de gestión de flotas es una joya, el control GPS flotas y la facturación gasolina para flotillas se llevan de maravilla.',
    img: 'https://avatar.vercel.sh/ana',
  },
  {
    name: 'Santiago',
    username: '@Santiago',
    body: 'El software control de flotas con monitoreo en tiempo real es de otro nivel. ¡Nos ha hecho tomar decisiones a una velocidad impresionante!',
    img: 'https://avatar.vercel.sh/santiago',
  },
  {
    name: 'Fovi',
    username: '@Fovi',
    body: 'Este software para gestión de flotas ha mejorado mucho nuestra logística. Es una pieza clave en nuestro negocio, completamente recomendado.',
    img: 'https://avatar.vercel.sh/maria',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15] shadow"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const NosAman = () => {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-44 md:shadow-xl lazo">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[600px] text-pretty">
            <h2 className="animate-fade-up font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-title">
              Los transportistas aman nuestro Software de Gestión de Flotas
            </h2>
            <p className=" text-lg sm:text-xl leading-relaxed sm:leading-relaxed text-body-color ">
              Los transportistas elogian cómo nuestro control de flotas GPS y facturación combustible para flotillas ha transformado sus operaciones y mejorado su eficiencia logística.
            </p>
          </div>
        </div>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 lg:bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 lg:bg-gradient-to-l from-white"></div>
    </section>
  );
};

export default NosAman;
