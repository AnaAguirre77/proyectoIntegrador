import React from "react";

// 1er componente: saludo, con funcion flecha
const Saludo = ({ nombre }) => {
  return <h2>Hola {nombre}</h2>;
};

// 2do componente: presentacion
const Presentacion = ({ nombre, edad, profesion }) => {
  return (
    <p>
      Mi nombre es {nombre}, tengo {edad} años y soy {profesion}.
    </p>
  );
};

// exporto ambos componentes
export { Saludo, Presentacion };
