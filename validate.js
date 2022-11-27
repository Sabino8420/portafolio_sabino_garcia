//Seu JavaScript de validação aqui

const botonEnviar = document.querySelector('[data-boton]');

const enviarDatos=(evento)=>{
    evento.preventDefault();
    const txtNombre = document.querySelector("[data-nombre]");
    alert(txtNombre.value);
}

botonEnviar.addEventListener('click', enviarDatos);