import HeroPersonImage from "../../assets/images/_hero_person.png";
import { Button } from "../../components/Buttons/Button";

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
            <Button color="primary" size="lg" className="rounded-full! font-semibold" children="LIHAT MENU" />
            <Button color="secondary" size="lg" variant="ghost" className="rounded-full! font-semibold" children="Info Selengkapnya" />
          </div>
        </div>
        <div className='col-span-3 flex items-center justify-center'>
          <img src={HeroPersonImage} width={750} className='object-contain aspect-auto' alt="hero_person" draggable={false} />
        </div>
      </section>
      <div className="my-8">&nbsp;</div>
      <section className="py-4 text-center w-3/4 mx-auto">
        <h4 className="text-2xl text-secondary-500 font-bold italic mb-4">PESEN JUGA MENU TERBARU KITA YUK!</h4>
        <ul className="flex gap-4 items-center border-t-[.75rem] border-t-white px-12">
          <li className="p-8 h-52 flex-1 border-white border-8 border-t-0 rounded-b-[4rem]">Menu1</li>
          <li className="p-8 h-52 flex-1 border-white border-8 border-t-0 rounded-b-[4rem]">Menu2</li>
          <li className="p-8 h-52 flex-1 border-white border-8 border-t-0 rounded-b-[4rem]">Menu3</li>
        </ul>
      </section>
    </>
  )
}
