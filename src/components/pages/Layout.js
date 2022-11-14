import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar" 
import LoginReg from "./auth/LoginReg";

let Layout = () => {
    return (
        <>
        <CssBaseline/>
        <Navbar/>  
        <Outlet/>
        </>
        );
};

export default Layout;