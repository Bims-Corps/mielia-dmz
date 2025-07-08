import Logo from "../../assets/images/logo_full.png";

export const HeaderBrandImage = () => {
  return (
    <img 
      src={Logo} 
      width={225} 
      className="object-contain aspect-auto" 
      alt="mielia-logo" 
      draggable={false} 
    />
  )
}
