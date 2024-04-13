function enviarFormulario(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del botón de envío que hace que se recarge la pagina si no pasa las validaciones

  let nombreValido = validarNombre();
  let emailValido = validarEmail();
  let asuntoValido = validarAsunto();
  let mensajeValido = validarMensaje();

  if (nombreValido && emailValido && asuntoValido && mensajeValido) {
      // Si todas las validaciones pasan, aquí puedes enviar el formulario
      alert("¡Formulario enviado correctamente!");
      // Recargar la página
      location.reload();
  }
}

function validarNombre() {
  let nombre = document.getElementById("name").value.trim();

  if (nombre === "") {
      alert("Por favor, ingrese su nombre.");
      return false;
  } else if (nombre.length > 50) {
      alert("El nombre no puede exceder los 50 caracteres.");
      return false;
  }

  return true;
}

function validarEmail() {
  let email = document.getElementById("mail").value.trim();

  if (email === "") {
      alert("Por favor, ingrese su correo electrónico.");
      return false;
  } else if (!validarFormatoEmail(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
  }

  return true;
}

function validarFormatoEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validarAsunto() {
  let asunto = document.getElementById("asunto").value.trim();

  if (asunto === "") {
      alert("Por favor, ingrese el asunto.");
      return false;
  }

  return true;
}

function validarMensaje() {
  let mensaje = document.getElementById("mensaje").value.trim();

  if (mensaje === "") {
      alert("Por favor, ingrese su mensaje.");
      return false;
  } else if (mensaje.length > 300) {
      alert("El mensaje no puede exceder los 300 caracteres.");
      return false;
  }

  return true;
}

