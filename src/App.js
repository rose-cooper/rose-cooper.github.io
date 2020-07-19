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
        query: '(min-width: 1600px)'
    });
  const isPortrait = useMediaQuery({
        query: '(orientation: portrait)'
    });

  return (
    <div className="App">
      <TopPicture bigScreen={isBig}/>
      {isMobile ? <BurgerMenu /> : <MenuBar bigScreen={isBig}/>}
      <AMBackground bigScreen={isBig} mobile={isMobile}/>
      <ResBackground portrait={isPortrait} bigScreen={isBig} mobile={isMobile}/>
      <PubBackground bigScreen={isBig} mobile={isMobile}/>
      <Footer />
    </div>
  );
}

export default App;
