import React from "react";
import { Expertise } from "./expertise/Expertise";
import { Footer } from "./footer/Footer";
import { Introduction } from "./introduction/Introduction";

export const App = () => {
  return (
    <div>
      <Introduction />
      <Expertise />
      <Footer />
    </div>
  );
};

export default App;
