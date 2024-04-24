import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import WhyUS from "../Pages/WhyUS/WhyUS";




const router =createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/why',element :<WhyUS></WhyUS>}
    ]}
])

export default router;