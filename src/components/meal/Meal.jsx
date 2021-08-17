import React from "react";
import DateSlider from "../ui/DateSlider";
import AddButton from "./AddButton";
import Cals from "./Cals";
import CalsDonuts from "./CalsDonuts";

const Meal = () => {
  return (
    <div>
      <Cals />
      <DateSlider />
      <CalsDonuts />
      <AddButton />
    </div>
  );
};

export default Meal;
