let fechaActual = new Date();
let diaActual = fechaActual.getDate();
let mesActual = fechaActual.getMonth() + 1; 
let anyoActual = fechaActual.getFullYear();

let calendario = {
  dia: 12, 
  mes: "Febrero", 
  anyo: 2024 
};

if (diaActual === calendario.dia && mesActual === +calendario.mes && anyoActual === calendario.anyo) {
  console.log("Es hoy");
} else {
  console.log("Aún falta");
}