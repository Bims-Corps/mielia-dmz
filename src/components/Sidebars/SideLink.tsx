import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'


interface SideLinkProps {
  text: string;
  link: string;
  isActive?: boolean;
}
export const SideLink: React.FC<SideLinkProps> = (props) => {
  const {text, link, isActive} = props;
  return (
    <li>
      <Link to={link} className={clsx(
        "block w-full p-8 relative before:content['']",
        "before:absolute before:bottom-0 before:right-0 before:block",
        "before:transition-all before:duration-300",
        "before:w-0 before:h-[2px] hover:before:bg-primary-500",
        "hover:before:w-3/4 hover:text-red-500",
        isActive && "text-red-500 before:!bg-primary-500 font-bold" 
      )} children={
        <>
          <span>{text}</span>
        </>
      } />
    </li>
  )
}
