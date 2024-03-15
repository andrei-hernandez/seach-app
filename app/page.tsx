'use client'
import React from 'react'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { useRouter } from 'next/navigation'

export default function Page(): React.ReactNode {

  const examples = [
    {
      title: 'Firebase + Algolia Search',
      description: 'A simple search using Cloud Firestore and Algolia',
      path: '/pokedex/algolia',
      image: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*F-OWhFp34eq3q8gMSGj_mg.png'
    }
  ]

  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1>All the options of indexed search</h1>
      <div className="grid grid-cols-4 gap-4 mx-10 my-5">
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {examples.map((example, i) => (
          <Card
            key={i} className="py-4"
            isPressable onPress={() => router.push(example.path)}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{example.title}</p>
              <small className="text-default-500">{example.description}</small>
            </CardHeader>
            <CardBody className="overflow-visible object-fill py-2 mt-3">
              <Image
                alt="Card background"
                className="object-fill rounded-xl"
                style={{ aspectRatio: '2/1' }}
                src={example.image} />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

