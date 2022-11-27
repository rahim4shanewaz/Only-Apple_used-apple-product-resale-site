import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../admiRroute/AdminRoute";
import ShowErrorPage from "../components/showErrorPage/ShowErrorPage";
import Main from "../main/Main";
import AddProducts from "../pages/Dashboard/AddProducts";
import Admin from "../pages/Dashboard/Admin";
import AllBuyres from "../pages/Dashboard/AllBuyres";
import Allproducts from "../pages/Dashboard/Allproducts";
import AllSellers from "../pages/Dashboard/AllSellers";

import Dashboard from "../pages/Dashboard/Dashboard";


import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<ShowErrorPage></ShowErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
            

        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        errorElement:<ShowErrorPage></ShowErrorPage>,
        children: [

            {
                path: '/dashboard',
                element: <AdminRoute><Admin></Admin></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyres></AllBuyres>
            },
            {
                path: '/dashboard/allsellers/',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/sellers/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/sellers/allproducts',
                element: <Allproducts></Allproducts>
            }

        ]
    }
  
]);

export default router;