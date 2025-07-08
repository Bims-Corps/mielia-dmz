import HeroPersonImage from "../../assets/images/_hero_person.png";

export default function HomeScreen() {
  return (
    <>
      <section className='grid grid-cols-5 items-center'>
        <div className='col-span-2'>
          <div className='flex flex-col text-end py-8'>
            <h2 className='font-extrabold italic text-5xl'>RASA AUTHENTIKNYA</h2>
            <h5 className='text-xl'>Biking Melayang!</h5>
          </div>
          <div className='flex gap-4 flex-wrap'>
            <button type={"button"} className='bg-secondary-500 text-primary-500 px-8 py-3 text-base rounded-full font-semibold'>LIHAT MENU</button>
            <button type={"button"} className='bg-secondary-500 text-primary-500 px-8 py-3 text-base rounded-full font-semibold'>Info Selengkapnya</button>
          </div>
        </div>
        <div className='col-span-3 flex items-center justify-center'>
          <img src={HeroPersonImage} width={850} className='object-contain aspect-video' alt="hero_person" draggable={false} />
        </div>
      </section>
    </>
  )
}
