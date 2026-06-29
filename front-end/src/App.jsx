import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Funcionarios from "./pages/Funcionarios";

function App() {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/funcionarios" element={<Funcionarios />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;