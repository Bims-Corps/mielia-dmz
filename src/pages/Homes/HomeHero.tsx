import HeroPersonImage from "../../assets/images/_hero_person.png";
import { Button } from '../../components/Buttons/Button'

export const HomeHero = () => {
  return (
    <section className='grid grid-cols-5 items-center'>
      <div className='col-span-2'>
        <div className='flex flex-col text-end py-8'>
          <h2 className='font-extrabold italic text-5xl'>RASA AUTHENTIKNYA</h2>
          <h5 className='text-xl'>Biking Melayang!</h5>
        </div>
        <div className='flex gap-4 flex-wrap'>
          <Button color="primary" size="lg" className="rounded-full! font-semibold" children="LIHAT MENU" />
          <Button color="secondary" size="lg" variant="ghost" className="rounded-full! font-semibold" children="Info Selengkapnya" />
        </div>
      </div>
      <div className='col-span-3 flex items-center justify-center'>
        <img src={HeroPersonImage} width={750} className='object-contain aspect-auto' alt="hero_person" draggable={false} />
      </div>
    </section>
  )
}
