import { Routes, Route } from "react-router-dom";
import { Home, Films } from "../pages";

const BaseRoute = () => {
    return (
        <Routes>
            {/*Public routes*/}
            <Route path="/" element={<Home/>} />
            <Route path="/films/:id" element={<Films/>} />

            {/*Catch Errors*/}
            {/* <Route path='*' element={<NotFound/>}/> */}
        </Routes>
    )
};

export default BaseRoute;