import { Link } from 'react-router-dom'
import { HeaderBrandImage } from './HeaderBrandImage'
import ListImage from "../../assets/logos/list.svg";

export const HeaderComponent = () => {
  return (
    <header className="flex gap-4 items-center justify-between p-4">
      <Link to={"/"}>
        <HeaderBrandImage />
      </Link>
      <button>
        <img src={ListImage} width={50} alt="list" draggable={false} />
      </button>
    </header>
  )
}
