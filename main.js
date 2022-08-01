let aviso = alert("Usa Mayusculas y si te cansas escribi ESC");
let entrada =  prompt("Cuales son las 5 mejores ciudades segun TIME OUT");

while (entrada != 'ESC') {
    switch (entrada) {
        case "EDIMBURGO":
            alert("Puesto Nº1");
            break;
        case "CHICAGO":
            alert("Puesto Nº2");
            break;
        case "MEDELLIN":
            alert("Puesto Nº3");
            break;
        case "GLASGOW":
            alert("Puesto Nº4");
            break;
        case "AMSTERDAM":
            alert("Puesto Nº5");
            break;
        default:
            alert("No esta en el TOP 5");
            break;
    }
    entrada = prompt("Cuales son las 5 mejores ciudades segun TIME OUT");
}
