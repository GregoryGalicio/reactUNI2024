// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import MainHeader from "./common/MainHeader";
import MainFooter from "./common/MainFooter";
import "./App.css";
import MainNav from "./common/MainNav";
import Inicio from "./pages/Inicio";
import Proveedores from "./pages/Proveedores";
import Empleados from "./pages/Empleados";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <MainHeader/>
      <MainNav />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/proveedores" element={<Proveedores />}></Route>
          <Route path="/empleados" element={<Empleados />}></Route>
        </Routes>
      </main>
      <MainFooter></MainFooter>
    </BrowserRouter>
  );
}

export default App;
