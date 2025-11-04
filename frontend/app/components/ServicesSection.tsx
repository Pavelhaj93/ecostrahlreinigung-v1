export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Unsere Leistungen</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Laserreinigung */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary transition-colors">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-yellow-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11h14V7l-7-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Laserreinigung</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Hocheffizient, kontaktfrei und höchst präzise – mit dem Laser entfernen wir Lacke,
              Oxidschichten, Zunder, Verschmutzungen oder Beschichtungen, ohne das Grundmaterial zu
              beschädigen.
            </p>
            <p className="text-gray-300 mb-4">
              Ideal für empfindliche Bauteile oder Anwendungen, bei denen Detailgenauigkeit zählt.
            </p>
            <p className="text-sm text-primary font-semibold">
              Vorteile: kein Abrieb, keine Rückstände, automatisierbar, geringer Wartungsaufwand.
            </p>
          </div>

          {/* Trockeneisreinigung */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary transition-colors">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11h14V7l-7-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Trockeneisreinigung</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Sanft, trocken und umweltfreundlich – wir verwenden feste CO₂ Pellets, die beim
              Aufprall sublimieren und Schmutz entfernen, ohne Sekundärmüll zu erzeugen.
            </p>
            <p className="text-gray-300 mb-4">
              Perfekt geeignet für elektrische Bauteile, Getriebe, Türen, Werkzeuge und viele
              weitere Anwendungen.
            </p>
            <p className="text-sm text-primary font-semibold">
              Vorteile: chemiefrei, kein Wasser, keine Rückstände, hohe Reinigungsleistung.
            </p>
          </div>

          {/* Sandstrahlen */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary transition-colors">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11h14V7l-7-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sandstrahlen</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Leistungsstark, flexibel und gründlich – mit verschiedenen Strahlmitteln wie
              Glasperlen, Korund oder Granatsand entfernen wir Rost, Farbe und Verunreinigungen
              effizient.
            </p>
            <p className="text-gray-300 mb-4">
              Ideal zur Oberflächenvorbereitung von Metall, Holz oder Stein – überall dort, wo
              Haftung und Präzision zählen.
            </p>
            <p className="text-sm text-primary font-semibold">
              Vorteile: hohe Reinigungsleistung, vielseitig, materialschonend, optimal für
              Beschichtungen.
            </p>
          </div>
        </div>

        {/* What We Clean */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            Wir reinigen zum Beispiel:
          </h3>
          <div className="text-center text-gray-300 leading-relaxed">
            <p className="text-lg">
              Metalloberflächen · Aluminium · Edelstahl · Holz · Stein · Beton · Fassaden ·
              Maschinen und Anlagen · Werkzeuge · Formen · Karosserien · Oldtimer · Felgen · Motoren
              · Getriebe · Produktionsanlagen · Lackierte Teile · Graffiti · Brandschäden ·
              Denkmäler · Skulpturen · Zäune · Tore · Bodenplatten
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
