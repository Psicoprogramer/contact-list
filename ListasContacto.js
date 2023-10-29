let listaContacto = [];

function addContacto(contacto) {
  const nuevoContacto = {
    id: listaContacto.length + 1,
    nombres: contacto.nombres || "Sin nombre",
    apellidos: contacto.apellidos || "Sin apellidos",
    telefono: contacto.telefono || "Sin teléfono",
    ubicaciones: contacto.ubicaciones || [],
    ciudad: contacto.ciudad || "Sin ciudad",
    direccion: contacto.direccion || "Sin dirección"
  };

  listaContacto.push(nuevoContacto);

  return console.log("Contacto añadido:", nuevoContacto);
}

console.log(addContacto({
  nombres: "Brayan",
  apellidos: "Cabrera",
  telefono: "123456789",
  ubicaciones: ["Casa"],
  ciudad: "Ciudad",
  direccion: "123 Calle Principal"
}));

console.log(addContacto({
  nombres: "Nicolth",
  apellidos: "Sanches",
  telefono: "987654321",
  ubicaciones: ["Oficina"],
  ciudad: "Otra Ciudad",
  direccion: "456 Calle Secundaria"
}));

console.log(addContacto()); // Sin nombre

function deleteContacto(id) {
  const buscarContacto = listaContacto.find(contacto => contacto.id === id);

  if (buscarContacto) {
    console.log('Se eliminó el contacto:', buscarContacto);
    listaContacto = listaContacto.filter(contacto => contacto.id !== id);
  } else {
    console.log('Contacto no encontrado');
  }
}

console.log(listaContacto);

deleteContacto(1);

function recorrerArr(arr) {
  return arr.forEach(element => {
    console.log(element);
  });
}

recorrerArr(listaContacto);

function actualizarContacto(id, nuevoInfo) {
  const contacto = listaContacto.find(contacto => contacto.id === id);

  if (contacto) {
    listaContacto = listaContacto.map(c => {
      if (c.id === id) {
        return {
          ...c,
          ...nuevoInfo
        };
      }
      return c;
    });

    console.log('Contacto actualizado:', listaContacto.find(c => c.id === id));
  } else {
    console.log('Contacto no encontrado');
  }
}

actualizarContacto(1, {
  telefono: "555555555",
  ciudad: "Nueva Ciudad"
});