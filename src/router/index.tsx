import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import HomeScreen from "../pages/Homes/HomeScreen";
import AboutScreen from "../pages/Abouts/AboutScreen";
import MenuScreen from "../pages/Menus/MenuScreen";
import BlogScreen from "../pages/Blogs/BlogScreen";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <HomeScreen />
            },
            {
                path: "about-us",
                element: <AboutScreen />
            },
            {
                path: "menus",
                element: <MenuScreen />
            },
            {
                path: "blogs",
                element: <BlogScreen />
            },
        ]
    }
]);