// funciones & callbacks

function transformarArray(array, callback) {
  const nuevoArray = array.map(callback);
  return nuevoArray;
}

const nuevoArray = transformarArray([1, 2, 3], (x) => x * 3);

console.log(nuevoArray);
