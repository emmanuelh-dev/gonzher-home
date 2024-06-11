import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';

const reviews = [
  {
    name: 'Carlos',
    username: '@carlos',
    body: 'El sistema de GPS es increíblemente preciso. Ha mejorado la eficiencia de nuestra flota significativamente.',
    img: 'https://avatar.vercel.sh/carlos',
  },
  {
    name: 'Luisa',
    username: '@luisa',
    body: 'La herramienta de facturación es muy intuitiva y nos ha ahorrado mucho tiempo en la gestión de documentos.',
    img: 'https://avatar.vercel.sh/luisa',
  },
  {
    name: 'Miguel',
    username: '@miguel',
    body: 'Poder monitorear todo el flujo de la flota desde una única plataforma ha revolucionado nuestra operación logística.',
    img: 'https://avatar.vercel.sh/miguel',
  },
  {
    name: 'Ana',
    username: '@ana',
    body: 'Nunca había visto un software de logística tan completo. El GPS y la facturación están perfectamente integrados.',
    img: 'https://avatar.vercel.sh/ana',
  },
  {
    name: 'Santiago',
    username: '@santiago',
    body: 'El sistema de monitoreo en tiempo real es impresionante. Ahora podemos tomar decisiones más rápidas y efectivas.',
    img: 'https://avatar.vercel.sh/santiago',
  },
  {
    name: 'María',
    username: '@maria',
    body: 'El software ha mejorado nuestra logística de una manera que no imaginábamos. Es indispensable para nuestro negocio.',
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
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{username}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm'>{body}</blockquote>
    </figure>
  );
};

const NosAman = () => {
  return (
    <section className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl'>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-full px-4'>
          <div className='text-center mx-auto mb-[60px] lg:mb-20 max-w-[600px] text-pretty'>
            <h2 className='animate-fade-up font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-title'>
              Los transportistas nos aman
            </h2>
            <p className=' text-lg sm:text-xl leading-relaxed sm:leading-relaxed text-body-color '>
              Los transportistas elogian cómo ha transformado sus operaciones y
              mejorado su eficiencia.
            </p>
          </div>
        </div>
      </div>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </section>
  );
};

export default NosAman;
