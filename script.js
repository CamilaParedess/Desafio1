let numeroRandom = Math.round(Math.random()*50);  

let numeroElegido = 0;
let probabilidad = 0; 

juego();

function juego() {
  do {
    numeroElegido = Number(prompt("Adivina un número del 0 al 50"));
  
    if(numeroRandom > numeroElegido) {
      alert("Más grande");
    }
    
    if(numeroRandom < numeroElegido) {
      alert("Más pequeño");
    }
    probabilidad++;
  
  } while(numeroRandom != numeroElegido);
  
  alert(`¡Ganaste! El número es ${numeroRandom} - Lo has encontrado en ${probabilidad} intentos`);
}