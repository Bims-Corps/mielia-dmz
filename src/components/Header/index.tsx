import { Link } from 'react-router-dom'
import { HeaderBrandImage } from './HeaderBrandImage'
import { BsList } from 'react-icons/bs';
import { Button } from '../Buttons/Button';

export const HeaderComponent = () => {
  return (
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
        />
      </header>
    </section>
  )
}
