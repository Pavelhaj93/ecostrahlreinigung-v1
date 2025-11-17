'use client'

import {useState} from 'react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import {toast} from 'sonner'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Nachricht erfolgreich gesendet!', {
          description: 'Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.',
        })
        setFormData({name: '', email: '', message: '', privacyAccepted: false})
      } else {
        toast.error('Fehler beim Senden', {
          description: data.error || 'Bitte versuchen Sie es später erneut.',
        })
      }
    } catch (error) {
      toast.error('Fehler beim Senden', {
        description: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.',
      })
    }

    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value, type} = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
      <h3 className="text-xl font-bold mb-6 text-white">Nachricht senden</h3>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Ihr Name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          E-Mail-Adresse *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="ihre.email@beispiel.de"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Ihre Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Beschreiben Sie Ihr Anliegen..."
        />
      </div>

      <div className="mb-6">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacyAccepted"
            checked={formData.privacyAccepted}
            onChange={handleInputChange}
            required
            className="mt-1 w-4 h-4 text-primary bg-gray-800 border-gray-700 rounded focus:ring-primary focus:ring-2"
          />
          <span className="text-sm text-gray-300">
            Ich habe die{' '}
            <Link href="/datenschutz" target="_blank" className="text-primary hover:underline">
              Datenschutzerklärung
            </Link>{' '}
            zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für
            Rückfragen gespeichert werden. *
          </span>
        </label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !formData.privacyAccepted}
        className="w-full bg-primary hover:bg-primary/90 text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </Button>
    </form>
  )
}
