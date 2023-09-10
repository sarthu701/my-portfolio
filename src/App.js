import React, { useEffect } from "react";
import Aos from "aos";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />

      <Home />
      <Services />
      <Portfolio />

      <Contact />

      <Footer />
    </>
  );
};

export default App;
