let aviso = alert("Usa Mayusculas y si te cansas escribi ESC");

function entradaGrosa() {
  return prompt("Cuales son las 5 mejores ciudades segun TIME OUT").toLowerCase();
}

let entrada = entradaGrosa();

while (entrada != "ESC") {
  switch (entrada) {
    case "edimburgo":
      alert("Puesto Nº1");
      break;
    case "chicago":
      alert("Puesto Nº2");
      console.log(entrada);
      break;
    case "medellin":
      alert("Puesto Nº3");
      break;
    case "glasgow":
      alert("Puesto Nº4");
      break;
    case "amsterdam":
      alert("Puesto Nº5");
      break;
    default:
      alert("No esta en el TOP 5");
      break;
  }
  entrada = entradaGrosa();
}
