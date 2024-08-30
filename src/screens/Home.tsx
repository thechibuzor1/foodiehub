import React from "react";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Header from "../components/header/Header";
import StartOff from "../components/startOff/StartOff";
import RowHome from "../components/RowHomeItems/RowHome";
import Categories from "../components/categories/Categories";
import Recommended from "../components/recommended/Recommended";
import Slider from "../components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <StartOff />
      <Recommended />
      <RowHome
        name="vegetarian"
        backgroundColor="#22a094"
        header="Vegetarian Options"
        subHeader="Exploring Delicious, Plant-Powered Delights"
        iconName={icon({ name: "seedling", style: "solid" })}
      />
      <RowHome
        name="breakfast"
        backgroundColor="#ffb4ed"
        header="Rise and Shine!"
        subHeader="Start Your Day Right with Our Scrumptious Morning Menu"
        iconName={icon({ name: "sun", style: "solid" })}
      />
      <RowHome
        name="dessert"
        backgroundColor="#afe8fb"
        header="Indulge in Sweet Temptations"
        subHeader="Satisfy Your Cravings with Irresistible Desserts"
        iconName={icon({ name: "cake-candles", style: "solid" })}
      />
     
    
    </>
  );
}
