import { menuItems } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="m-5">
      <div className="flex items-center justify-between p-5 border-b border-[#808080] w-full">
        <img className="cursor-pointer" src="/assets/icons/search.svg" />

        <h1 className="text-[#22202E] text-2xl cursor-pointer">
          <Link href="/">Avion</Link>
        </h1>

        <div className="flex items-center lg:gap-5 md:gap-8 gap-2">
          <img className="cursor-pointer" src="/assets/icons/cart.svg" />
          <img className="cursor-pointer" src="/assets/icons/user.svg" />
        </div>
      </div>

      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center lg:gap-[44px] md:gap-[33px] gap-[25px] p-5">
        {menuItems.map((item, index) => (
          <p
            key={index + 1 + item.name}
            className="text-base text-[#726E8D] cursor-pointer font-light"
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Header
