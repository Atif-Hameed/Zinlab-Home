'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Menu from '/public/assets/menu.svg'
import SearchIcon from '/public/assets/search.svg'
import SearchField from '@/components/shared/searchField'
import Link from 'next/link'
import BrandLogo from '@/components/shared/common/BrandLogo'
import Navbar from '../navbar'

const Header = () => {

  const [openNav, setOpenNav] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  const handleOpenNav = () => {
    setOpenNav((prev) => !prev)
  }

  const handleOpenSearch = () => {
    setOpenSearch((prev) => !prev)
  }

  return (
    <>
      <div className='sm:px-8 px-4 py-3 shadow-md'>
        <div className='bg-white w-full flex items-center z-50 '>

          <div className='w-[68%] lg:flex hidden justify-between items-center'>
            <div className='w-[30%]'>
              <BrandLogo />
            </div>
            <div className='w-[55%]'>
              <SearchField />
            </div>
          </div>

          <div className='w-[32%] lg:flex hidden justify-end'>
            <div className='flex gap-6 items-center'>
              <div>
                <h1 className='font-medium text-lg'>Log in</h1>
              </div>
              <button className='bg-[#4866e2] py-3 px-6 rounded-full text-white'>
                Sign up
              </button>
            </div>
          </div>

          <div className='lg:hidden flex items-center justify-between w-full bg-white'>
            <div>
              <Image onClick={handleOpenNav} src={Menu} className='sm:w-10 sm:h-10 w-8 h-8' alt='' />
            </div>
            <div>
              <BrandLogo />
            </div>
            <div>
              <Image onClick={handleOpenSearch} src={SearchIcon} className='w-9 h-9' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className={`lg:block shadow-md lg:pt-8 pt-0 bg-white  ${openNav ? 'block absolute top-0' : 'hidden'}`}>
        <Navbar openNav={openNav} handleOpenNav={handleOpenNav} />
      </div>
      {openNav && <div className="fixed inset-0 bg-black opacity-50 z-10"></div>}
      
      {openSearch &&
        <div className="fixed inset-0 bg-white flex gap-2 py-3 px-2 z-40">
          <input type="text" className='h-10 w-full px-3 border-2 self-start border-green-500' placeholder='Search' name="" id="" />
          <button onClick={handleOpenSearch} className='text-black pt-2 self-start'>cancel</button>
        </div>
      }

    </>
  )
}

export default Header
