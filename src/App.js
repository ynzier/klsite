import React, { useState } from "react";
// import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Policy from "./Components/Policy";
import Checker from "./Components/Check";
import Testnomails from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

const App = () => {
  const [resumeData, setresumeData] = useState({});

  // ReactGA.initialize("UA-110570651-1");
  // ReactGA.pageview(window.location.pathname);
  if (!resumeData) {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setresumeData(data);
      }.bind(),
      error: function (xhr, status, err) {
        console.log(err);
      },
    });
  }

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Policy data={resumeData.policy} />
      <Portfolio data={resumeData.portfolio} />
      <Checker data={resumeData.main} />
      <Testnomails data={resumeData.testmonials} />
<<<<<<< HEAD
      <Portfolio data={resumeData.portfolio} />
=======
>>>>>>> b68269d4eab9301ff121ee78b6cbfd411cf388d3
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;