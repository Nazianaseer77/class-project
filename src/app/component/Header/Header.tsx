import React from 'react'

import Link from 'next/link';

const Navbar = () => {
  return (
    
      <header className='bg-rose-400 py-6 '>
        <nav className='flex justify-between items-center px-6'>
          <img src="/Brand logo.jpg" alt="" 
          className='w-20 h-20 rounded-full'/>
          <div className='text-5xl m-2 text-purple-800 text-center'>Beauty and Fragrance world</div>
            
<ul className='flex gap-4 m-4 cursor-pointer font-black 1px'>
     < Link  href="/" className='hover:text-blue-700'>Home </Link>
     < Link href="/aboutus"className='hover:text-blue-700'>About us</Link>
     < Link href="/contactus"className='hover:text-blue-700'>contact us</Link>
     < Link href="/login"className='hover:text-blue-700'>login</Link>
     <Link href="/signup"className='hover:text-blue-700'>signUp</Link>

  </ul>

          

        </nav>
    </header>
  )
}

export default Navbar



    
        