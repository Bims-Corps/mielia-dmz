import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/Header";

export default function AppLayout() {
  return (
    <section>
      <HeaderComponent />
      <Outlet />
    </section>
  )
}
