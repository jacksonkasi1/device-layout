import React from "react";
import IphoneLayout from "./iphone-layout";
import LaptopLayout from "./laptop-layout";
import './assets/css/style.css'

const Layouts = ({ element }) => {
  const Iphone = () => <IphoneLayout element={element} />;
  const Laptop = () => <LaptopLayout element={element} />;

  return { Iphone: Iphone, Laptop: Laptop };
};

export default Layouts;
