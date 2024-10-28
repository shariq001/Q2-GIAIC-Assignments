import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className='bg-[#a36361] text-[#eecc8c] text-[20px] p-[20px] flex justify-around'>
            <div>
                <h1 className=' font-bold leading-[17px]'>MUHAMMAD <br /> <span className='tracking-[11px]'>SHARIQ</span></h1>
            </div>

            <div>
                <ul className='flex justify-center gap-[30px] font-bold'>
                    <li><Link href='/' className='hover:border-b-[3px] border-[#eecc8c]'>Home</Link></li>
                    <li><Link href='/Education' className='hover:border-b-[3px] border-[#eecc8c]'>Education</Link></li>
                    <li><Link href='/Contact' className='hover:border-b-[3px] border-[#eecc8c]'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header