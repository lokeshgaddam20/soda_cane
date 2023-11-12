import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const navIcons = [
  {src:'/assests/icons/search.svg', alt:'search'},
  {src:'/assests/icons/black-heart.svg', alt:'heart'},
  {src:'/assests/icons/user.svg', alt:'user'},
]

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/' className='flex itm gap-1'>
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />

          <p className='nav-logo'>
            Tech<span className='text-secondary gray-200'>'Price</span>
          </p>
        </Link>

        <div className='flex items-center gap-5'>
          {navIcons.map((icon) => (
            <Image
              src={icon.src}
              width={28}
              height={28}
              alt={icon.alt}
              key={icon.alt}
              className='object-contain'
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar