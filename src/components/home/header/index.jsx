import Image from 'next/image'
import React from 'react'
import Menu from '/public/assets/menu.svg'
import SearchIcon from '/public/assets/search.svg'
import SearchField from '@/components/shared/searchField'
import Link from 'next/link'
import BrandLogo from '@/components/shared/common/BrandLogo'

const Header = () => {
  return (
    <div className='bg-white w-full flex items-center py-3 sm:px-8 px-4'>

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
          <Image src={Menu} className='sm:w-10 sm:h-10 w-8 h-8' alt='' />
        </div>
        <div>
          <BrandLogo />
        </div>
        <div>
          <Image src={SearchIcon} className='w-9 h-9' alt='' />
        </div>
      </div>

    </div>
  )
}

export default Header
