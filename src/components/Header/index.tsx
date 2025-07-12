import { Link } from 'react-router-dom'
import { HeaderBrandImage } from './HeaderBrandImage'
import { BsList } from 'react-icons/bs';
import { Button } from '../Buttons/Button';
import { Sidebar } from '../Sidebars';
import { useRef, useState } from 'react';
import useOutsideAlerter from '../../helpers/clickOutside';

export const HeaderComponent = () => {
  const [open, setOpen] = useState(false);
  const wrappedRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter(wrappedRef, () => {
    if (!open) return;
    setOpen(false);
  });

  return   (
    <>
      <section className='container mx-auto'>
        <header className="flex gap-4 items-center justify-between p-4">
          <Link to={"/"}>
            <HeaderBrandImage />
          </Link>
          <Button 
            variant='ghost' 
            color='primary' 
            className='!text-3xl' 
            children={<BsList />}
            onClick={() => setOpen(!open)} 
          />
        </header>
      </section>
      <div ref={wrappedRef}>
        <Sidebar isActive={open} />
      </div>
    </>
  )
}
