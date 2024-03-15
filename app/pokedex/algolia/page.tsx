import React from 'react'
import { Metadata } from 'next'
import { AlgoliaSearch } from '@/app/components/algoliaSearch'

export const metadata: Metadata = {
  title: 'Algolia + Firebase Search',
  description: 'A collection of examples of Algolia search'
}
export default function Page(): React.ReactNode {
  return <AlgoliaSearch />
}
