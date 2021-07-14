import React from "react";
// import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Policy from "./Components/Policy";
import Checker from "./Components/Check";
import Testnomails from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Policy />
      <Testnomails />
      <Portfolio />
      <Checker />
      <Footer />
    </div>
  );
};

export default App;
