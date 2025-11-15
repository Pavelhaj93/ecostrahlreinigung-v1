import Link from 'next/link'

export default function FooterSection() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Ecostrahlreinigung. Alle Rechte vorbehalten.</p>

          <div className="flex items-center space-x-6">
            <Link href="/datenschutz" className="hover:text-primary transition-colors">
              Datenschutzerklärung
            </Link>
            <span className="text-gray-600">|</span>
            <span>
              Made by{' '}
              <a
                href="https://www.insidepro.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                INSIDEPRO
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
