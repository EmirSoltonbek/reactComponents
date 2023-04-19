import React, { useState } from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";


const App = () => {
  const users = [
    {
      name:'Emir',
      lastName:'Soltonbekov',
      age:19,
      id: Date.now(),
    },
    {
      name:'Meder',
      lastName:'Kadyrov',
      age:25,
      id: Date.now(),
    },
    {
      name:'Marlen',
      lastName:'Arzymatov',
      age:22,
      id: Date.now(),
    },
    {
      name:'Mirbek',
      lastName:'Atabekov',
      age:32,
      id: Date.now(),
    },
    {
      name:'Adilet',
      lastName:"Gazybekov",
      age:21,
      id: Date.now(),
    },
    {
      name:'Emil',
      lastName:'Ibraev',
      age:28,
      id: Date.now(),
    },
    {
      name:'Aizhamal',
      lastName:'Batyrbekova',
      age:19,
      id: Date.now(),
    },
    {
      name:'Yryskeldi',
      lastName:'Jakypbekov',
      age:18,
      id: Date.now(),
    },
    {
      name:'Imanbekov',
      lastName:'Aslan',
      age:21,
      id: Date.now(),
    }
  ]
  return (
    <div>
      <Header/>
      <Section users={users}/>
      <Footer/>
    </div>
  );
};

export default App;
