import React from "react";
import { useMediaQuery } from 'react-responsive';
import "./App.css";

import TopPicture from "./Components/TopPicture";
import MenuBar from "./Components/MenuBar/MenuBar";
import AMBackground from "./Components/AboutMe/AMBackground";
import ResBackground from "./Components/Research/ResBackground";
import PubBackground from "./Components/Publications/PubBackground";
import Footer from "./Components/Footer";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";

function App() {
  const isMobile = useMediaQuery({
      query: '(max-width: 1024px)'
    });
  const isBig = useMediaQuery({
        query: '(min-width: 2048px)'
    });
  return (
    <div className="App">
      <TopPicture />
      {isMobile ? <BurgerMenu /> : <MenuBar />}
      <AMBackground bigScreen={isBig} mobile={isMobile}/>
      <ResBackground bigScreen={isBig} mobile={isMobile}/>
      <PubBackground bigScreen={isBig} mobile={isMobile}/>
      <Footer />
    </div>
  );
}

export default App;
