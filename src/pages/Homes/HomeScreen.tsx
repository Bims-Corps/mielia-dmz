import { HomeHero } from "./HomeHero";
import { HomeMenu } from "./HomeMenu";
import Menu1 from "../../assets/images/menus/menu_bistik.png";
import Menu2 from "../../assets/images/menus/menu_dimsum.png";
import Menu3 from "../../assets/images/menus/menu_chili.png";
import Menu4 from "../../assets/images/menus/menu_dimsum_2.png";
import Menu5 from "../../assets/images/menus/menu_dimsum_3.png";
import Menu6 from "../../assets/images/menus/menu_dimsum_4.png";

export default function HomeScreen() {
  return (
    <>
      <HomeHero />
      <div className="my-8">&nbsp;</div>
      <HomeMenu 
        data={[
          { imageUrl: Menu1, name: "Mie Bistik" },
          { imageUrl: Menu2, name: "Dimsum Mentai" },
          { imageUrl: Menu3, name: "Chilli Oil" },
          { imageUrl: Menu4, name: "Ekado Goreng" },
          { imageUrl: Menu5, name: "Lumpia Goreng" },
          { imageUrl: Menu6, name: "Kuotie Goreng" },
        ]}
      />
      <div className="h-12 my-4">&nbsp;</div>
    </>
  )
}
