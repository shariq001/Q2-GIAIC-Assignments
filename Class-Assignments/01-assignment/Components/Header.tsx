import Link from 'next/link'

import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="flex justify-around bg-[#ff004f] text-white p-[15px]">
        <div>
          <h1 className="text-[25px] leading-[20px]">MUHAMMAD <br /><span className="tracking-[12.8px]">SHARIQ</span></h1>
        </div>

        <div>
          <ul className="flex justify-center gap-[30px] text-[25px]">
            <li className="hover:border-b-[2px] border-white"><Link href='/'>Home</Link></li>
            <li className="hover:border-b-[2px] border-white"><Link href='/About'>About Me</Link></li>
            <li className="hover:border-b-[2px] border-white"><Link href='/Contact'>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header