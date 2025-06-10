import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software para Control de Flotas GPS - Sistema Gonzher',
  description: 'Software líder para control de flotas con GPS en tiempo real. Administración de flotillas, seguimiento vehicular y control de combustible. Solución integral para gestión de flotas.',
  keywords: 'software para control de flotas, control de flotillas software, administración de flota gps, software control de flota, seguimiento de la flota en tiempo real, software para administración de flotas',
  openGraph: {
    title: 'Software para Control de Flotas GPS - Gonzher',
    description: 'Software líder para control de flotas con GPS en tiempo real.',
    url: 'https://www.gonzher.com/software-control-flotas',
  },
  alternates: {
    canonical: 'https://www.gonzher.com/software-control-flotas',
  },
};

export default function SoftwareControlFlotas() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schema markup para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Software para Control de Flotas",
            "description": "Software especializado para control y administración de flotas vehiculares con GPS",
            "url": "https://www.gonzher.com/software-control-flotas",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Gonzher Control de Flotas",
              "applicationCategory": "Fleet Management Software",
              "description": "Sistema integral para control, seguimiento y administración de flotas vehiculares"
            }
          })
        }}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Software para Control de Flotas GPS
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            El <strong>software para control de flotas</strong> más completo del mercado. 
            <strong>Administración de flota GPS</strong> en tiempo real con todas las funcionalidades 
            que necesitas para optimizar tu operación.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Control GPS en Tiempo Real</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Seguimiento de la flota en tiempo real</strong></li>
                <li>• Ubicación precisa de vehículos</li>
                <li>• Historial de rutas y trayectos</li>
                <li>• Geocercas y alertas automáticas</li>
                <li>• Monitoreo 24/7</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Administración Completa</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Control de flotillas software</strong> integrado</li>
                <li>• Gestión de conductores</li>
                <li>• Control de combustible</li>
                <li>• Mantenimiento preventivo</li>
                <li>• Reportes ejecutivos</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-teal-600 text-white p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué Gonzher es el mejor Software para Flotas?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Tecnología Avanzada</h3>
                <p>
                  Nuestro <strong>software para gestión de flotas</strong> utiliza tecnología 
                  GPS de última generación para brindar precisión y confiabilidad.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fácil de Usar</h3>
                <p>
                  Interfaz intuitiva que permite a cualquier usuario manejar la 
                  <strong>administración de flotillas software</strong> sin complicaciones.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚛</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Control Total</h3>
              <p className="text-gray-600">
                <strong>Software control de flota</strong> con visibilidad completa 
                de tu operación
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">App Móvil</h3>
              <p className="text-gray-600">
                Acceso desde cualquier dispositivo para 
                <strong>control de flotillas software</strong>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reportes</h3>
              <p className="text-gray-600">
                Análisis detallado para optimizar tu 
                <strong>administración de flota GPS</strong>
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <h3 className="text-lg font-semibold mb-2">Características Principales del Software</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-1 text-sm">
                <li>✓ <strong>Software para administración de flotas</strong> completo</li>
                <li>✓ Seguimiento GPS en tiempo real</li>
                <li>✓ Control de combustible integrado</li>
                <li>✓ Gestión de mantenimientos</li>
              </ul>
              <ul className="space-y-1 text-sm">
                <li>✓ Reportes personalizables</li>
                <li>✓ Alertas automáticas</li>
                <li>✓ Integración con facturación</li>
                <li>✓ Soporte técnico 24/7</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">¿Listo para optimizar tu flota?</h3>
            <p className="text-gray-600 mb-6">
              Descubre por qué somos el <strong>software para control de flotas</strong> preferido 
              por empresas líderes en logística.
            </p>
            <Link 
              href="/#contact" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
            >
              Solicitar Demo Gratuita
            </Link>
            <Link 
              href="/pricing" 
              className="inline-block bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Ver Precios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
