import { useEffect, useState, type ReactNode } from "react";
import { DimsumIcon, DrinkIcon, MieIcon } from "../../components/Icons";
import clsx from "clsx";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MenuMie from "../../assets/images/menus/_menu_mie.png";
import MenuTeh from "../../assets/images/menus/_menu_teh.png";
import MenuKuetie from "../../assets/images/menus/_menu_kuotie.png";
import Person from "../../assets/images/_half_person_menu.png";

const Menu = [
  {
    type: "mie",
    name: "Mie Manis Level 1",
    price: "Rp 10.000,-",
    image: MenuMie
  },
  {
    type: "dimsum",
    name: "Kuetie Goreng",
    price: "Rp 10.000,-",
    image: MenuKuetie
  },
  {
    type: "drink",
    name: "Teh Manis",
    price: "Rp 5.000,-",
    image: MenuTeh
  }
]

export default function MenuScreen() {
  const [tab, setTab] = useState<string>("dimsum");
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    setTab(Menu[id].type);
  }, [id]);

  const findItem = (name: string) => {
    setId(Menu.findIndex((item) => item.type == name));
  }

  return (
    <>
      <section className="container mx-auto px-8 text-center relative z-10">
        <h1 className="text-center font-bold italic mb-4">
          <span className="text-8xl">OUR</span><br />
          <span className="text-6xl">MENU</span>
        </h1>
        <div className="w-2/4 mx-auto p-4">
          <p className="text-sm">Lapar? Tenang. Di sini ada mie yang kenyalnya bikin lupa mantan, dan dimsum yang lumer kayak janji-janji indah. Yuk, pilih menu yang paling cocok buat mood kamu hari ini!</p>
          <ul className="flex gap-4 justify-center items-end border-b-4 my-8">
            <TabItem 
              isActive={tab == "mie"}
              onClick={() => {
                setTab("mie");
                findItem("mie");
              }}
              child={<MieIcon className="text-inherit" />}
            />
            <TabItem 
              isActive={tab == "dimsum"}
              onClick={() => {
                setTab("dimsum");
                findItem("dimsum");
              }}
              child={<DimsumIcon className="text-inherit" />}
            />
            <TabItem 
              isActive={tab == "drink"}
              onClick={() => {
                setTab("drink");
                findItem("drink");
              }}
              child={<DrinkIcon className="text-inherit" />}
            />
          </ul>
          <div className="flex gap-4 justify-between items-center w-full py-8">
            <button 
              type="button" 
              className="cursor-pointer"
              onClick={() => {
                setId(id == 0 ? Menu.length - 1 : id - 1);
              }}
              children={<BsChevronLeft />} 
            />
            <img 
              src={Menu[id].image} 
              className="aspect-auto h-52 object-contain"
              alt="preview-menu" 
              draggable={false}
            />
            <button 
              type="button" 
              className="cursor-pointer"
              onClick={() => {
                setId(id + 1 == Menu.length ? 0 : id + 1);
              }}
              children={<BsChevronRight />} 
            />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-md font-bold">{Menu[id].name}</p>
            <div className="px-12 py-3 bg-secondary-500 rounded-full text-primary-500 text-lg font-bold">{Menu[id].price}</div>
          </div>
        </div>
        <div className="h-96">&nbsp;</div>
      </section>
      <div className="absolute bottom-0 end-0 z-0 w-[65vw]">
        <img src={Person} alt="person-menu" className="w-full aspect-auto object-contain" draggable={false} />
      </div>
    </>
  )
}


const TabItem: React.FC<{isActive: boolean, child: ReactNode, onClick: () => void}> = (props) => {
  const {isActive, child, onClick} = props;
  return <li className={clsx(
      "p-4 cursor-pointer transition-all duration-300",
      isActive ? 'text-red-500 bg-white' : 'text-white bg-transparent'
    )}
    onClick={onClick}>
      {child}
  </li>
}