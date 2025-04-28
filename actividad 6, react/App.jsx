import React from "react";
import { Saludo, Presentacion } from "./components/actividad4";
import Boton from "./components/actividad5";
import Actividad6 from "./components/actividad6";

const App = () => {
  return (
    <div>
      <Saludo nombre="Martin" />
      <Presentacion nombre="Ana" edad={24} profesion="Manager" />
      <Boton />
      <Actividad6 />
    </div>
  );
};

export default App;
