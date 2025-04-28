import React from "react";

const productos = [
  { nombre: "Notebook", precio: 1200 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Auriculares", precio: 80 },
];

// actividad uno

const productosMayoresA100 = productos.filter(
  (producto) => producto.precio > 100
);

console.log(productosMayoresA100);

// actividad dos

const NuevoFormatoProductos = productos.map(
  (producto) => `${producto.nombre}: $${producto.precio}`
);

console.log(NuevoFormatoProductos);

// actividad tres

// actividad cuatro

const productosMenoresA100 = productos.filter(
  (producto) => producto.precio < 100
);

console.log(productosMenoresA100);

const Actividad6 = () => {
  return null;
};

export default Actividad6;
