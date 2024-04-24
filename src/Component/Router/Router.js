import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import WhyUS from "../Pages/WhyUS/WhyUS";
import OurFaculty from "../Pages/OurFaculty/OurFaculty";
import Web from "../Pages/Web/Web";
import Programming from "../Pages/Programming/Programming";
import Graphic from "../Pages/Graphic/Graphic";




const router =createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/why',element :<WhyUS></WhyUS>},
        {path:'/faculty',element:<OurFaculty></OurFaculty>},
        {path:'/web',element:<Web></Web>},
        {path:'/progamming',element:<Programming></Programming>},
        {path:'/graphic',element:<Graphic></Graphic>},
    ]}
])

export default router;