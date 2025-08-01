import { useEffect, useState, type ReactNode } from "react";
import { DimsumIcon, DrinkIcon, MieIcon } from "../../components/Icons";
import clsx from "clsx";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Person from "../../assets/images/_half_person_menu.png";
import Dimsum1 from "../../assets/images/menus/ekado_goreng.png";
import Dimsum2 from "../../assets/images/menus/display_hakao.png";
import Dimsum3 from "../../assets/images/menus/display_kuotie.png";
import Dimsum4 from "../../assets/images/menus/display_lumpia_udang.png";
import Dimsum5 from "../../assets/images/menus/display_pangsit_ayam.png";
import Dimsum6 from "../../assets/images/menus/display_siomay_moza.png";
import Dimsum7 from "../../assets/images/menus/display_dm_mentai.png";
import Mie1 from "../../assets/images/menus/display_mie_manis1.png";
import Mie2 from "../../assets/images/menus/display_mie_asin1.png";
import Mie3 from "../../assets/images/menus/display_mie_mistik.png";
import Drink1 from "../../assets/images/menus/display_lemon_mojito.png";
import Drink2 from "../../assets/images/menus/display_orange_mojito.png";
import Drink3 from "../../assets/images/menus/display_orange_squash.png";

const Menu = [
  {
    type: "mie",
    name: "Mie Manis (Level 0-5)",
    price: "Rp 10.500,-",
    image: Mie1
  },
  {
    type: "mie",
    name: "Mie Manis (Level 6-10)",
    price: "Rp 13.000,-",
    image: Mie1
  },
  {
    type: "mie",
    name: "Mie Asin (Level 0-5)",
    price: "Rp 10.500,-",
    image: Mie2
  },
  {
    type: "mie",
    name: "Mie Asin (Level 6-10)",
    price: "Rp 10.500,-",
    image: Mie2
  },
  {
    type: "mie",
    name: "Mie Bistik (Level 1-5)",
    price: "Rp 25.000,-",
    image: Mie3
  },
  {
    type: "dimsum",
    name: "Ekado",
    price: "Rp 10.500,-",
    image: Dimsum1  
  },
  {
    type: "dimsum",
    name: "Hakao",
    price: "Rp 12.500,-",
    image: Dimsum2  
  },
  {
    type: "dimsum",
    name: "Kuotie",
    price: "Rp 10.500,-",
    image: Dimsum3  
  },
  {
    type: "dimsum",
    name: "Lumpia Udang",
    price: "Rp 10.500,-",
    image: Dimsum4  
  },
  {
    type: "dimsum",
    name: "Pangsit Ayam",
    price: "Rp 10.500,-",
    image: Dimsum5  
  },
  {
    type: "dimsum",
    name: "Siomay Mozarella",
    price: "Rp 10.500,-",
    image: Dimsum6  
  },
  {
    type: "dimsum",
    name: "Dimsum Mentai",
    price: "Rp 14.000,-",
    image: Dimsum7  
  },
  {
    type: "drink",
    name: "Lemon Mojito",
    price: "Rp 6.500,-",
    image: Drink1
  },
  {
    type: "drink",
    name: "Orange Mojito",
    price: "Rp 6.500,-",
    image: Drink2
  },
  {
    type: "drink",
    name: "Orange Squash",
    price: "Rp 6.500,-",
    image: Drink3
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
        <h1 className="text-center font-bold italic mb-4 animate__animated animate__fadeInDown">
          <span className="text-8xl">OUR</span><br />
          <span className="text-6xl">MENU</span>
        </h1>
        <div className="w-2/4 mx-auto p-4">
          <p className="text-sm animate__animated animate__fadeIn">Lapar? Tenang. Di sini ada mie yang kenyalnya bikin lupa mantan, dan dimsum yang lumer kayak janji-janji indah. Yuk, pilih menu yang paling cocok buat mood kamu hari ini!</p>
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
              className="cursor-pointer p-4 transition duration-300 hover:bg-white hover:text-primary-500 rounded-4xl"
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
              className="cursor-pointer p-4 transition duration-300 hover:bg-white hover:text-primary-500 rounded-4xl"
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