import React from "react";
import "./home.css";
import Header from "./components/Header";
import Admin from "./components/Admin";
import Helpline from "./components/Helpline";
import Employee from "./components/Employee";
import Count from "./components/Count";
import Footer from "../FOOTER/FOOTER PAGE/Footer";
import HomeNav from "../NAVBAR/navcompo/HomeNav";

function Home() {
  return (
    <><div>
      <HomeNav/>
      <Header />
      <Admin />
      <Helpline />
      <Employee />
      <Count />
      <Footer/>
    </div>
    </>
  );
}

export default Home;
