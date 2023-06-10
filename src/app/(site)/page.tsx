'use client'

import Link from 'next/link'

import Button from '@/components/Button'
import { spotifyApi } from '../../../utils/spotify'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
      <h1 className="text-7xl font-extrabold text-green-500">Welcome!</h1>

      <a
        href={spotifyApi}
        className="underline tracking-wider text-lg first-letter:capitalize"
      >
        login to spotify
      </a>
    </div>
  )
}
