import ContactForm from '@/app/components/ContactForm'
import {MailIcon, MapPinIcon, PhoneIcon} from 'lucide-react'

interface ContactInfo {
  address?: string
  email?: string
  phone?: string
}

interface ContactSectionProps {
  block?: {
    heading?: string
    subheading?: string
    description?: string
    contactInfo?: ContactInfo
    showForm?: boolean
  }
}

const defaultContactInfo: ContactInfo = {
  address: '93489 Schorndorf, Riedäcker 19',
  email: 'info@ecostrahlreinigung.de',
  phone: '+49 (0) 123 456 789',
}

export default function ContactSection({block}: ContactSectionProps = {}) {
  const heading = block?.heading || 'Kontakt'
  const subheading = block?.subheading || 'Kontaktieren Sie uns'
  const description =
    block?.description || 'Per E-Mail, Kontaktformular oder telefonisch. Wir beraten Sie gerne.'
  const contactInfo = block?.contactInfo || defaultContactInfo
  const showForm = block?.showForm !== false

  return (
    <section id="kontakt" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">{heading}</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{subheading}</h3>
            <p className="text-lg text-gray-300 mb-8">{description}</p>

            <div className="space-y-4">
              {contactInfo.address && (
                <div className="flex items-center">
                  <MapPinIcon className="w-6 h-6 text-primary mr-3" />
                  <span className="text-gray-300">{contactInfo.address}</span>
                </div>
              )}

              {contactInfo.email && (
                <div className="flex items-center">
                  <MailIcon className="w-6 h-6 text-primary mr-3" />
                  <span className="text-gray-300">{contactInfo.email}</span>
                </div>
              )}

              {contactInfo.phone && (
                <div className="flex items-center">
                  <PhoneIcon className="w-6 h-6 text-primary mr-3" />
                  <span className="text-gray-300">{contactInfo.phone}</span>
                </div>
              )}
            </div>
          </div>

          {/* Contact Form */}
          {showForm && (
            <div>
              <ContactForm />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
