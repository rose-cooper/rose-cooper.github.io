import React from "react";
import "./App.css";

import TopPicture from "./Components/TopPicture";
import MenuBar from "./Components/MenuBar/MenuBar";
import AMBackground from "./Components/AboutMe/AMBackground";
import ResBackground from "./Components/Research/ResBackground";
import PubBackground from "./Components/Publications/PubBackground";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <TopPicture />
      <MenuBar />
      <AMBackground />
      <ResBackground />
      <PubBackground />
      <Footer />
    </div>
  );
}

export default App;
