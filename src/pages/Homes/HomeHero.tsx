import HeroPersonImage from "../../assets/images/_hero_person_red.png";
import { Button } from '../../components/Buttons/Button'

export const HomeHero = () => {
  return (
    <>
      <div className="my-4">&nbsp;</div>
      <div className="py-12 relative">
        <div className="container mx-auto">
          <section className='grid grid-cols-5 items-center relative z-20'>
            <div className='col-span-2'>
              <div className='flex flex-col text-end py-8 text-primary-500'>
                <h2 className='font-extrabold italic text-5xl'>RASA AUTHENTIKNYA</h2>
                <h5 className='text-xl'>Biking Melayang!</h5>
              </div>
              <div className='flex gap-4 flex-wrap'>
                <Button color="secondary" size="lg" className="rounded-full! font-semibold" children="LIHAT MENU" />
                <Button color="secondary" size="lg" variant="ghost" className="rounded-full! font-semibold !text-primary-500" children="Info Selengkapnya" />
              </div>
            </div>
            <div className='col-span-3 flex items-center justify-center'>
              <img src={HeroPersonImage} width={500} className='object-contain aspect-auto' alt="hero_person" draggable={false} />
            </div>
          </section>
        </div>
        <div className="absolute top-0 left-0 w-screen bg-secondary-500 block h-full z-10">Lorem</div>
      </div>
    </>
  )
}
