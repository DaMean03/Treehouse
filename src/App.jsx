import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Relax from "./components/Relax";
import Project from "./components/Project";
import Culture from "./components/Culture";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Relax />
      <Project />
      <Culture />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
