// actividad dos: desestructuración y objetos

// punto uno

const persona = {
  nombre: "Lucía",
  edad: 28,
  profesion: "Diseñadora",
};

const { nombre, edad, profesion } = persona;

console.log(`${nombre} tiene ${edad} años y trabaja como ${profesion}.`);

// punto dos

// utilizando spread

const personaActualizada = {
  ...persona,
  ciudad: "Rosario",
};

console.log(personaActualizada);
