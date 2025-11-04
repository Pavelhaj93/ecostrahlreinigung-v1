import Link from 'next/link'

export const metadata = {
  title: 'Datenschutzerklärung | Ecostrahlreinigung',
  description: 'Datenschutzerklärung für Ecostrahlreinigung',
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold text-white mb-3">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-xl font-semibold text-white mb-3">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h3>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Wie erfassen wir Ihre Daten?</h3>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
              kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
              Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Wofür nutzen wir Ihre Daten?</h3>
            <p className="mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
              werden. Die über das Kontaktformular übermittelten Daten werden ausschließlich zur
              Bearbeitung Ihrer Anfrage verwendet.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h3>
            <p className="mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
              jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
              Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Kontaktformular</h2>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
            <p className="mb-4">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
              zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
              für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer
              Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen –
              bleiben unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Ihre Rechte</h2>
            <p className="mb-4">Sie haben folgende Rechte:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
              <li>Recht auf Berichtigung unrichtiger Daten</li>
              <li>Recht auf Löschung Ihrer Daten</li>
              <li>Recht auf Einschränkung der Datenverarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Widerspruch gegen die Datenverarbeitung</li>
              <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Kontakt</h2>
            <p className="mb-4">
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
            </p>
            <p className="mb-2">
              <strong className="text-white">Ecostrahlreinigung</strong>
            </p>
            <p className="mb-2">Riedäcker 19</p>
            <p className="mb-2">93489 Schorndorf</p>
            <p className="mb-2">
              E-Mail:{' '}
              <a href="mailto:info@ecostrahlreinigung.de" className="text-primary hover:underline">
                info@ecostrahlreinigung.de
              </a>
            </p>
            <p className="mb-4">Telefon: +49 (0) 123 456 789</p>
          </section>

          <section>
            <p className="text-sm text-gray-500">Stand: November 2025</p>
          </section>
        </div>
      </div>
    </div>
  )
}
