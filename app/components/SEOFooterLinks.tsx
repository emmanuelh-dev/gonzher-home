import Link from 'next/link';

export default function SEOFooterLinks() {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Control de Flotas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/software-control-flotas" className="text-gray-300 hover:text-white text-sm">
                  Software para Control de Flotas
                </Link>
              </li>
              <li>
                <Link href="/soluciones-de-rastreo-y-seguimiento-en-tiempo-real-para-tu-flota" className="text-gray-300 hover:text-white text-sm">
                  Soluciones de Rastreo
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-300 hover:text-white text-sm">
                  Administración de Flota GPS
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white text-sm">
                  Control de Flotillas Software
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Facturación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/facturacion-combustible-flotas" className="text-gray-300 hover:text-white text-sm">
                  Facturación Combustible Flotas
                </Link>
              </li>
              <li>
                <Link href="/sistema-de-facturacion-para-flotas" className="text-gray-300 hover:text-white text-sm">
                  Sistema Facturación en Línea
                </Link>
              </li>
              <li>
                <Link href="/factura-electronica-sat" className="text-gray-300 hover:text-white text-sm">
                  Factura Electrónica Sistema
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-300 hover:text-white text-sm">
                  Plataforma de Facturación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Software GPS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-gray-300 hover:text-white text-sm">
                  Control GPS Flotas
                </Link>
              </li>
              <li>
                <Link href="/app-operadores" className="text-gray-300 hover:text-white text-sm">
                  Software para Flotas
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white text-sm">
                  Seguimiento Flota Tiempo Real
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-white text-sm">
                  Software Gestión de Flotas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-gray-300 hover:text-white text-sm">
                  Administración Flotillas Software
                </Link>
              </li>
              <li>
                <Link href="/gonzher-transports" className="text-gray-300 hover:text-white text-sm">
                  Software Administración Flotas
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-300 hover:text-white text-sm">
                  Sistemas de Facturación CFDI
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white text-sm">
                  Blog Gonzher
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Palabras Clave Principales:</h4>
              <p className="text-sm text-gray-400">
                Gonzher, facturación combustible flotas, software para control de flotas, 
                control GPS flotas, sistema facturación en línea, administración de flota GPS
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">
                © 2024 Gonzher. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
