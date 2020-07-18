import React from "react";
import { useMediaQuery } from 'react-responsive';
import "./App.css";

import TopPicture from "./Components/TopPicture";
import MenuBar from "./Components/MenuBar/MenuBar";
import AMBackground from "./Components/AboutMe/AMBackground";
import ResBackground from "./Components/Research/ResBackground";
import PubBackground from "./Components/Publications/PubBackground";
import Footer from "./Components/Footer";

function App() {
  const isMobile = useMediaQuery({
      query: '(max-width: 768px)'
    });
  return (
    <div className="App">
      <TopPicture />
      <MenuBar />
      <AMBackground mobile={isMobile}/>
      <ResBackground mobile={isMobile}/>
      <PubBackground />
      <Footer />
    </div>
  );
}

export default App;
