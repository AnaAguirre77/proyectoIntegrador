import React from "react";
import { Saludo, Presentacion } from "./components/actividad4";

const App = () => {
  return (
    <div>
      <Saludo nombre="Martin" />
      <Presentacion nombre="Ana" edad={24} profesion="Manager" />
    </div>
  );
};

export default App;
