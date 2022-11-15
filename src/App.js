import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/loginPage/Login"
import Registracion from "./pages/loginPage/Registracion"
import Today from "./pages/today/Hoje"
import ResetStyle from "./styles/ResetStyle"

export default function App(){
    return(
    <BrowserRouter>
        <ResetStyle />
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<Registracion />}></Route>
            <Route path="/hoje" element={<Today/>}></Route>
        </Routes>
    </BrowserRouter>)
}