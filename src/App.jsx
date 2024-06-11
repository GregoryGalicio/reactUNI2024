// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import MainHeader from "./common/MainHeader";
import MainFooter from "./common/MainFooter";
import Nosotros from "./home/Nosotros";
import Noticias from "./home/Noticias";
import "./App.css";
import MainBanner from "./home/MainBanner";
import Envios from "./home/Envios";
import Cards from "./home/Cards";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MainHeader></MainHeader>
      <MainBanner/>
      <Nosotros></Nosotros>
      <Noticias />
      <Envios/>
      <Cards/>
      <MainFooter></MainFooter>
    </>
  );
}

export default App;
