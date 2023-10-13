import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

const BaseRoute = () => {
    return (
        <Routes>
            {/*Public routes*/}
            <Route path="/" element={<Home/>} />

            {/*Catch Errors*/}
            {/* <Route path='*' element={<NotFound/>}/> */}
        </Routes>
    )
};

export default BaseRoute;