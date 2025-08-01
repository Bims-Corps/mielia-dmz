import { HomeHero } from "./HomeHero";
import { HomeMenu } from "./HomeMenu";
import Menu1 from "../../assets/images/menus/chili_oil.png";
import Menu2 from "../../assets/images/menus/dm_mentai.png";
import Menu3 from "../../assets/images/menus/ekado_goreng.png";
import Menu4 from "../../assets/images/menus/ekado_goreng2.png";
import Menu5 from "../../assets/images/menus/kentucky.png";
import Menu6 from "../../assets/images/menus/lumpia.png";

export default function HomeScreen() {
  return (
    <>
      <HomeHero />
      <div className="my-8">&nbsp;</div>
      <HomeMenu 
        data={[
          { imageUrl: Menu1, name: "Chili Oil" },
          { imageUrl: Menu2, name: "Dimsum Mentai" },
          { imageUrl: Menu3, name: "Ekado Goreng" },
          { imageUrl: Menu4, name: "Ekado Goreng" },
          { imageUrl: Menu5, name: "Kentucky Noodle" },
          { imageUrl: Menu6, name: "Lumpia Goreng" },
        ]}
      />
      <div className="h-12 my-4">&nbsp;</div>
    </>
  )
}
