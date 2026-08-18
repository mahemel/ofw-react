import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Errorpage from "../pages/errorpage/Errorpage";
import JoinOurCause from "../pages/join-our-cause/JoinOurCause";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: "join-our-cause",
                Component: JoinOurCause,
            },
        ],
        errorElement: <Errorpage></Errorpage>,
    },
]);
