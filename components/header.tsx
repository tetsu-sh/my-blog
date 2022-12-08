import Link from 'next/link'

const Header = () => {
  return (
    <header>
    <nav
      className="fixed z-20 w-full bg-gray-700 py-3 text-center font-semibold"
      aria-label="Header navigation"
    >
      <Link
        href="/"
        className="rounded px-5 py-2.5 font-mono tracking-tight no-underline hover:bg-gray-700/50 active:bg-gray-600"
      >
        <span className='test-xs test-gray-100 duration-100'>
        home
        </span>
      </Link>
      <Link
      href="/about"
      className="rounded px-5 py-2.5 font-mono tracking-tight no-underline hover:bg-gray-700/50 active:bg-gray-600">
      
      <span className='test-xs test-gray-100 duration-100'>
        about
        </span> 
      </Link>
    </nav>
  </header>
  )
}

export default Header
