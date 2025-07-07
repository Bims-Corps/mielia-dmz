import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <p>Home Screen</p>
            },
            {
                path: "about-us",
                element: <p>Lorem Ipsum</p>
            },
            {
                path: "menus",
                element: <p>Lorem Ipsum</p>
            },
            {
                path: "blogs",
                element: <p>Lorem Ipsum</p>
            },
        ]
    }
]);