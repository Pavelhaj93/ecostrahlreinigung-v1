import type {Metadata} from 'next'
import PageBuilderPage from '@/app/components/PageBuilder'
import {sanityFetch} from '@/sanity/lib/live'
import {getHomepageQuery} from '@/sanity/lib/queries'
import {GetPageQueryResult} from '@/sanity.types'

export const metadata: Metadata = {
  title: 'Ecostrahlreinigung',
  description: 'Professionelle Reinigungslösungen für Industrie und Gewerbe',
}

export default async function Page() {
  // Fetch the homepage from Sanity (slug: "home")
  const [{data: page}] = await Promise.all([
    sanityFetch({
      query: getHomepageQuery,
    }),
  ])

  // If page exists in Sanity with page builder content, use it
  if (page?._id && page?.pageBuilder && page.pageBuilder.length > 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <PageBuilderPage page={page as GetPageQueryResult} />
      </div>
    )
  }
}
