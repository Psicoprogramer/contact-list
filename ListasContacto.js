let listaContacto = [];

function addContacto(name = "Sin nombre") {
  listaContacto.push(name);
  return console.log(
    "Contacto " + listaContacto[listaContacto.length-1]
  );
}

console.log(addContacto("Brayan Cabrera"));
console.log(addContacto("Nicolth sanches"));

console.log(addContacto());

function deleteContacto(name){
   
    const buscarName = listaContacto.indexOf(name);

    if(buscarName !== -1)
    {
       console.log(' Se elimino el contacto ' + listaContacto[buscarName]); 
       listaContacto.splice(buscarName,1);

    }
    else {
        return console.log('Nombre no encontrado ')
    }

}
console.log(listaContacto);
deleteContacto('Brayan Cabrera');


function recorrerArr(arr) {
   return arr.forEach(element => {
        console.log(element);
    });
    
}
recorrerArr(listaContacto);