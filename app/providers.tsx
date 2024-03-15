'use client'
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'

export const Providers: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <NextUIProvider className="h-full">
      {children}
    </NextUIProvider>
  )
}
