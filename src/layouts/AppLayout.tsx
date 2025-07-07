import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <section>
        <h1>Lorem Ipsum</h1>
        <Outlet />
    </section>
  )
}
