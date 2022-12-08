console.log("estoy linkado");

document.querySelector("form.formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(event.target.name.value);
    console.log(event.target.tlf.value);
    console.log(event.target.email.value);

    const name = event.target.name.value;
    const tlf = event.target.tlf.value;
    const email = event.target.email.value;
    
    let validated = true; 

      if (name.length < 5) {
          alert("Nombre muy corto");
          validated = false; 
      }

      if (!email.includes("@") && !email.endsWith(".com") ) {
          alert("Falta @ email y/o .com al final");
          validated = false; 
      }

      if (tlf < 8) {
          alert("Introduce un telefono correcto");
          validated = false; 
      }

    //    Comprobación final - Todo validado

      if (validated){
          alert("ÉXITO - Formulario correcto y enviado")
          event.target.submit();
      }
    
    
})

console.log("funciono"); 
