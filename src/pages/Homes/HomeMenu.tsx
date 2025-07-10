import clsx from "clsx";
import type { FC } from "react";
import { BsStarFill } from "react-icons/bs";


export const HomeMenu: FC<{data: MenuItemProps[]}> = (props) => {
  const {data} = props;
  return (
    <section className="py-4 text-center w-5/6 mx-auto">
      <h4 className="text-2xl text-secondary-500 font-bold italic mb-4">PESEN JUGA MENU TERBARU KITA YUK!</h4>
      <div className="my-2">&nbsp;</div>
      <ul className="flex gap-4 items-center justify-center border-t-[.75rem] border-t-white px-12">
        { 
          data.map((item, index) => (
            <MenuItem imageUrl={item.imageUrl} name={item.name} key={index} />
          )) 
        }
      </ul>
    </section>
  )
}


type MenuItemProps = {
  imageUrl: string,
  name: string,
}
const MenuItem: FC<MenuItemProps> = (props) => {
  const { imageUrl, name } = props;
  return (
    <>
      <li className="min-h-32 flex-1 max-w-52 border-white border-8 border-t-0 rounded-b-[4rem] flex justify-center items-center">
        <div 
          className={clsx(
            "group transition-all duration-300 relative",
            "outline-transparent outline-4 outline-offset-4",
            "hover:bg-white hover:scale-150 hover:outline-white",
            "hover:-translate-y-8"
          )} 
          style={{
            borderRadius: "5rem 5rem 3rem 3rem "
          }}
        >
          <img 
            src={imageUrl} 
            alt="menu1" 
            className="w-3/4 scale-75 min-w-40 max-w-60 aspect-square m-auto transition-all duration-500 group-hover:scale-100 delay-100" 
            draggable={false} 
          />
          <div className="absolute bottom-0 end-0 translate-1/4 transition-all duration-500 rotate-0 scale-90 group-hover:-rotate-12 group-hover:scale-100 opacity-0 group-hover:opacity-100">
            <BsStarFill size={100} color="#FDC904" />
            <p className={clsx(
              "absolute top-1/2 start-1/2 -translate-1/2",
              "leading-5 tracking-tight text-center",
              "text-white font-bold italic"
            )}>{name}</p>
          </div>
        </div>
      </li>
    </>
  )
}