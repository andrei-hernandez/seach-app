'use client'
import React, { useState } from 'react'
import algoliaSearch from 'algoliasearch/lite'

import { IPokemon } from '@/app/types'

const APPLICATION_ID = process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID as string
const SEARCH_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY as string
const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME as string

const client = algoliaSearch(APPLICATION_ID, SEARCH_API_KEY)
const index = client.initIndex(INDEX_NAME)

export const AlgoliaSearch: React.FC = () => {

  const [results, setResults] = useState<Array<IPokemon> | null>(null)

  const performSearch = async (value: string): Promise<void> => {
    const { hits } = await index.search<IPokemon>(value, {
      hitsPerPage:8
    })

    const results = hits.map((hit: IPokemon) => {
      return {
        name: hit.name,
        type_1: hit.type_1,
        type_2: hit.type_2
      }
    })

    setResults(results)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target

    value === '' ? setResults(null) : performSearch(value)
  }

  return (
    <div className="pokedex-algolia-container">
      <h2>Firebase & Algolia integration example</h2>
      <div className="w-[80%] sm:w-[70%] lg:w-[50%] flex flex-col items-center">
        <form className="flex items-center w-full mx-auto">
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="w-full">
            <input
              onChange={handleChange}
              type="text" id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search in the pokedex" required />
          </div>
          <button
            type="button"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg
              className="w-4 h-4" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <div className="w-full flex flex-col items-start justify-start ml-8 h-[250px]">
          {results === null ? null : (
            <ul className="max-w-md mt-6 space-y-2 text-gray-500 list-none list-inside dark:text-gray-400">
              {results.map(result => (
                <li key={result.name}>
                  <h3 className="text-[20px]">{result.name}</h3>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
