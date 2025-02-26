'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function CloseHeader() {
  const router = useRouter()
  return (
    <>
      <header className="fixed z-50 flex h-16 w-full bg-white/80 py-4 text-neutral-950 backdrop-blur-sm">
        <div className="flex w-full items-center justify-between">
          <div onClick={() => router.back()} className="cursor-pointer">
            <ChevronLeft className="size-8 text-neutral-500" />
          </div>
        </div>
      </header>
      <div className="h-14"></div>
    </>
  )
}
