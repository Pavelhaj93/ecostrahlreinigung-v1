export default function HeroSection() {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-blue-900 to-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Ecostrahlreinigung</h1>
        <h2 className="text-2xl mb-4">Trockeneisreinigung · Laserreinigung · Strahltechnik</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Mobile und umweltfreundliche Reinigung in Bayern
        </p>
        <p className="text-lg mb-8 max-w-4xl mx-auto">
          Überall in Bayern für Sie da - Cham, Regensburg, Straubing, München, Passau und Nürnberg.
          Abgestimmt auf Oberfläche und Verschmutzung setzen wir die effizienteste Reinigungstechnik
          ein.
        </p>
        <a
          href="#leistungen"
          className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Unsere Leistungen
        </a>
      </div>
    </section>
  )
}
