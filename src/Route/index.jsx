import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Sticker from "../Pages/Sticker";
import Designe from "../Pages/Designe";
import Login from "../auth/Login";
import Registre from "../auth/Registre";

const router =createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/stickers",
        element:<Sticker/>
    },
    {
        path:"/design",
        element:<Designe/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/registre",
        element:<Registre/>
    },
    {
        path:"/*",
        element:"<h2>404 Not Fund</h2>"
    }
])

export default router