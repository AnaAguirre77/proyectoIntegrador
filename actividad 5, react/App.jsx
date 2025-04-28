import React from "react";
import { Saludo, Presentacion } from "./components/actividad4";
import Boton from "./components/actividad5";

const App = () => {
  return (
    <div>
      <Saludo nombre="Martin" />
      <Presentacion nombre="Ana" edad={24} profesion="Manager" />
      <Boton />
    </div>
  );
};

export default App;
