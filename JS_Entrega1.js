
function preventiveCompliance() {

    let nombre = window.prompt("Para cotizar nuestros servicios ingresa tu nombre." +
      " Recuerda que los valores entregados al concluir esta encuesta son solo por hoy. ");
  
    if (!nombre) {
      alert(`Gracias por tu preferencia. Si aún deseas enviar una solicitud de cotización, envía un mail al siguiente correo: mao@gmail.com`);
  
    } else {
  
      alert("Hola " + nombre + ", Para medir el nivel de cumplimiento de tu empresa en materia preventiva, responde la siguiente encuesta.");
  
      let confirmacion = confirm(`${nombre} Responde con SI o NO, a las siguientes preguntas. Si no deseas continuar da click en cancelar`);
  
      if (!confirmacion) {
        alert(`${nombre} Gracias por tu preferencia. Si aún deseas enviar una solicitud de cotización, envía un mail al siguiente correo: mao@gmail.com`);
  
      } else {
  
        let preguntas = [
          "Tu empresa cuenta con reglamento Interno de Orden Higiene y Seguridad",
          "Los trabajadores fueron informados sobre los riesgos inherentes a los que estarán expuestos, al realizar las funciones para las cuales fueron contratados",
          "Tu empresa cuenta con un programa de prevención de riesgos",
          "Tu empresa cuenta con un plan de emergencias actualizado según las nuevas directrices estipuladas en Agosto del 2023",
          "Tu empresa cuenta con una política en prevención de riesgos",
          "Tu empresa cuenta con procedimientos de trabajo seguro"
        ];
  
  
        let opciones = [
          ["1 SI", "2 NO"],
          ["1 SI", "2 NO"],
          ["1 SI", "2 NO"],
          ["1 SI", "2 NO"],
          ["1 SI", "2 NO"],
          ["1 SI", "2 NO"]
        ];
  
  
        let respuestasAfirmativas = 0;
        let valorGestionDocumentos = 0;
  
  
        for (let i = 0; i < preguntas.length; i++) {
          let pregunta = preguntas[i];
          let opcionesRespuesta = opciones[i];
          let respuesta = prompt(pregunta + "\n" + opcionesRespuesta.join("\n"));
  
  
          respuesta = respuesta.toLowerCase();
  
  
          if (respuesta === "si") {
            respuestasAfirmativas++;
          } else if (respuesta === "no") {
            valorGestionDocumentos += 50000;
          } else {
  
            alert(`${nombre} Responde con SI o NO según corresponda`);
  
            i--;
          }
        }
  
  
        let porcentajeCumplimiento = (respuestasAfirmativas / preguntas.length) * 100;
  
        if (respuestasAfirmativas === preguntas.length) {
          alert("Felicitaciones, tu empresa cuenta con la documentación básica para funcionar. Si deseas algún otro documento, contáctanos al siguiente correo: a@gmail.com");
        } else {
          alert("El porcentaje de cumplimiento de tu empresa es de un, " + porcentajeCumplimiento + "%" +
            ". Para evitar multas por parte de la Seremi de Salud te sugerimos tomar nuestra asesoría ");
  
          alert(`${nombre}, El valor por la asesoría y gestión de documentos que declaraste no tener, es de $ ` + valorGestionDocumentos +
            " Pesos. Contáctanos a este número y toma nuestra asesoría, te recordamos que esta oferta es solo por hoy. ");
        }
      }
    }
  }
  //window.addEventListener('load', preventiveCompliance)
  preventiveCompliance() 