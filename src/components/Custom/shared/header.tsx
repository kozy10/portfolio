import Link from 'next/link'

import { Hamburger } from './humberger'
export const Header = () => {
  return (
    <header className="mx-auto flex max-w-screen-md items-center justify-between p-4">
      <Link href="/" className="text-2xl font-bold">
        {'K・K'}
      </Link>
      <Hamburger />
    </header>
  )
}
