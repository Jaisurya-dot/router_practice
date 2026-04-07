import {
    createBrowserRouter,
} from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layout/MainLayout";

let router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { index:true, Component: Home },
            { path: "about", Component: About },
            
        ]
         
    },
    
]);

export default router