//Teorema lui E

function eulerTheorem(V, E, F) {
    return V - E + F === 2;
  }


  const numarV = 8;  // Numărul de vârfuri
  const numarE = 12; // Numărul de muchii
  const numarF = 6;  // Numărul de fețe
  
  const rezultat = eulerTheorem(numarV, numarE, numarF);

  console.log(rezultat); 
  
  // Output: true



// Formula lui Heron

// Lungimile laturilor triunghiului

let a = 5;
let b = 7;
let c = 9;

// Calculul semiperimetrului

let s = (a + b + c) / 2;

// Calculul ariei

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("Aria triunghiului este: " + area);