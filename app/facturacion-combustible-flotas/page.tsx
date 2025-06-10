import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Facturación Combustible Flotas - Sistema Gonzher GPS',
  description: 'Software especializado para facturación de combustible y gasolina para flotas. Control de consumos, CFDI electrónico y administración completa de combustible para flotillas.',
  keywords: 'facturación combustible flotas, facturación gasolina flotas, control combustible flotillas, sistema facturación combustible, software control gasolina flotas',
  openGraph: {
    title: 'Facturación Combustible Flotas - Gonzher',
    description: 'Software especializado para facturación de combustible y gasolina para flotas.',
    url: 'https://www.gonzher.com/facturacion-combustible-flotas',
  },
  alternates: {
    canonical: 'https://www.gonzher.com/facturacion-combustible-flotas',
  },
};

export default function FacturacionCombustibleFlotas() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schema markup para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Facturación Combustible Flotas",
            "description": "Software especializado para facturación de combustible y gasolina para flotas",
            "url": "https://www.gonzher.com/facturacion-combustible-flotas",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Gonzher Facturación Combustible",
              "applicationCategory": "Fleet Fuel Management Software",
              "description": "Sistema para control y facturación de combustible en flotas vehiculares"
            }
          })
        }}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Facturación Combustible Flotas
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sistema especializado para la <strong>facturación de combustible y gasolina para flotas</strong>, 
            con control completo de consumos y generación automática de CFDI electrónico.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Control de Combustible</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Registro automático de cargas de combustible</li>
                <li>• Control de consumos por vehículo</li>
                <li>• Análisis de eficiencia energética</li>
                <li>• Alertas de consumo anormal</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Facturación Electrónica</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Generación automática de CFDI</li>
                <li>• Cumplimiento fiscal SAT</li>
                <li>• Facturación masiva</li>
                <li>• Reportes detallados</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">¿Por qué elegir Gonzher para Facturación de Combustible?</h2>
            <div className="space-y-4">
              <p>
                Nuestro <strong>software para control de flotas</strong> incluye un módulo especializado 
                para la <strong>facturación de combustible y gasolina para flotas</strong>, permitiendo 
                un control completo desde la carga hasta la facturación electrónica.
              </p>
              <p>
                Con <strong>administración de flota GPS</strong> integrada, puedes correlacionar 
                el consumo de combustible con las rutas realizadas, obteniendo métricas precisas 
                de eficiencia.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⛽</span>
              </div>
              <h3 className="font-semibold mb-2">Control GPS</h3>
              <p className="text-sm text-gray-600">Seguimiento en tiempo real del consumo</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2">Reportes</h3>
              <p className="text-sm text-gray-600">Análisis detallado de consumos</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="font-semibold mb-2">CFDI</h3>
              <p className="text-sm text-gray-600">Facturación electrónica automática</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/#contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Solicitar Demo Gratuita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
