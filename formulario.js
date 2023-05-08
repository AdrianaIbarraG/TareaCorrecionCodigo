/* El código permite registrar invitados para una fiesta, una vez que se ingresan los datos, 
en la parte "Lista de invitados" se mostrarán los asistente y estos contarán con un botón de "eliminar invitado"
para remover a los asistentes que se requieran*/

let formulario = document.querySelector(".formulario");
//Se trae la clase del formulario
//Se cambian var por let

formulario.onsubmit = function(event) {
  event.preventDefault(); 
  //Se corrije e por event y se corrije el preventDefault
  
  //Se cambian nombre de variables para trabajar más fácil con ellas 
  let txtNombre = formulario.elements.names;
  let txtEdad = formulario.elements.age;
  let txtNacionalidad = formulario.elements.nationality;
  //Se borran brakets con el número del elemento del arreglo y se pone el nombre de los id

  let nombre = txtNombre.value;
  let edad = parseInt(txtEdad.value); // Se convierte edad a número
  let nacionalidad = txtNacionalidad.value;
  //Se eliminan los pasos extra de nacionalidad 

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    txtNombre.classList.add("error");
    alert("Ingresa tu nombre")
  }else{
    txtNombre.classList.remove("error");
  } // if nombre === 0

  if (edad < 18 || edad > 120 || isNaN(edad)) {//se agrega evaluación para que no se deje en blanco la edad
    txtEdad.classList.add("error");
    alert ("La edad debe ser en número, mayor a 18 y menor a 120")
  }else {
    txtEdad.classList.remove("error");
  }// if edad 

  if (txtNombre.classList.value === "" && txtEdad.classList.value === "") {
    agregarInvitado(nombre, edad, nacionalidad);
    names.value="";
    age.value="";
    nationality.value=""; 
  }// if de campos; se cambiaron signos del if para que cumpla con los pasos establecidos y se agrega claassList
}//formulario onsubmit


function agregarInvitado(nombre, edad, nacionalidad) {

  let lista = document.getElementById("lista-de-invitados");
  let elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  //Se corrige added por add
  lista.appendChild(elementoLista);

  // Se elimina código repetido
  function crearElemento(descripcion, valor) {
  let span = document.createElement("span");
  span.textContent = descripcion + ": " + valor; //Se agrega valor para que muestre datos
  elementoLista.appendChild(span);
  elementoLista.appendChild(document.createElement("br"));
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
  // this.parentNode.style.display = 'none';
  botonBorrar.parentNode.remove();
    }//btn Borrar
}//agregar invitado