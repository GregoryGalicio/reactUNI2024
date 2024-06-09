// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import MainHeader from "./common/MainHeader";
import MainFooter from "./common/MainFooter";
import Nosotros from "./home/Nosotros";
import Noticias from "./home/Noticias";
import "./App.css";
import MainBanner1 from "./home/MainBanner1";
import Envios from "./home/Envios";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MainHeader></MainHeader>
      <MainBanner1/>
      <Nosotros></Nosotros>
      <Noticias />
      <Envios/>
      <MainFooter></MainFooter>
    </>
  );
}

export default App;
