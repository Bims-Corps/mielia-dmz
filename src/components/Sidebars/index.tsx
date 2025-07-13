import clsx from 'clsx';
import React from 'react'
import { HeaderBrandImage } from '../Header/HeaderBrandImage';
import { SideLink } from './SideLink';
import { Link } from 'react-router-dom';

import Insta from "../../assets/logos/instagram.svg";
import Phone from "../../assets/logos/phone.svg";
import Location from "../../assets/logos/location.svg";

interface SidebarProps {
  isActive: boolean
}

const classes = {
  open: "translate-x-0",
  close: "translate-x-full",
}
export const Sidebar: React.FC<SidebarProps> = (props) => {
  const {isActive} = props;

  return (
    <div className={clsx(
      "bg-secondary-500 fixed end-0 top-0 z-50",
      "w-80 h-screen transition-all duration-300 overflow-hidden",
      isActive ? classes.open : classes.close,
    )}>
      <nav className='pt-8 flex flex-col items-center text-slate-900 w-full h-full gap-4'>
        <header className='px-9'>
          <HeaderBrandImage />
        </header>
        <div className='relative w-full'>
          <ul className='flex flex-col text-center'>
            <SideLink text='Home' link='/' isActive={true} />
            <SideLink text='About Us' link='/about' />
            <SideLink text='Menu' link='/menus' />
            <SideLink text='Blog' link='/blogs' />
          </ul>
          <div className='absolute top-0 end-0 h-full w-2 rounded-s-4xl bg-primary-500'></div>
        </div>
        <div className='flex-1'></div>
        <footer className='text-center'>
          <div className='py-4 flex flex-wrap gap-2 justify-center items-center'>
            <Link to="" target='_blank' 
              children={<img src={Insta} width={40} draggable={false} />}
            />
            <Link to="" target='_blank' 
              children={<img src={Phone} width={40} draggable={false} />}
            />
            <Link to="" target='_blank' 
              children={<img src={Location} width={40} draggable={false} />}
            />
          </div>
          <div className='bg-primary-500 text-secondary-500 p-4 text-sm'>
            <p className='mb-2 leading-tight'>Mielia | Jl. Pesantren No.116, Cibabat, Kec. Cimahi Utara, Kota Cimahi, Jawa Barat 40513</p>
            <strong className='font-bold italic tracking-tight'>Senin - Minggu, 10.00 - 22.00 WIB</strong>
          </div>
        </footer>
      </nav>
    </div>
  )
}
