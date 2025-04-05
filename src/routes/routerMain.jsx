import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";


export function RouterMain(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/*" element={<h1>Home</h1>} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}