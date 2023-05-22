//crear lista de contactos//

const ListaNombres = ["Carlos Lopez", "Camila Cifuentes", "Maximiliano Valencia", "Melek Valencia", "Juan Guerra"]

for (const Nombres of ListaNombres) {
  console.log(Nombres)
}

//Añadir nuevo contacto//

function AgregarNombre() {
  console.log("Mariana Palacio")
}

AgregarNombre(ListaNombres);


//Borrar contacto existente//

ListaNombres.splice(4,2)
  
console.log(ListaNombres);


//Imprimir contactos actuales//

function ImprimirContactos(nombres) {

    console.log(ListaNombres);
}

ImprimirContactos(ListaNombres);
