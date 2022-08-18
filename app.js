let piedra = document.querySelector("#piedra");
let papel = document.querySelector("#papel");
let tijera = document.querySelector("#tijera");
let humano = piedra.checked ? "piedra" : papel.checked ? "papel" : "tijera";
let container = document.querySelector(".containerHijo");
let piedra1 = document.querySelector(".piedra1");
let papel1 = document.querySelector(".papel1");
let tijera1 = document.querySelector(".tijera1");

let compu;
let suma = 1;
let segundos;

let pi = 1;
let pa = 2;
let tj = 3;

function cuentaRegresiva() {
  segundos = setInterval(() => {
    if (suma === 1) {
      pi = "piedra";
      container.classList.add("puto");
      piedra1.classList.remove("piedra1");

      console.log(pi);
    } else if (suma === 2) {
      pa = "papel";
      piedra1.classList.add("piedra1");
      papel1.classList.remove("papel1");
      console.log(pa);
    } else if (suma === 3) {
      tj = "tijera";
      papel1.classList.add("papel1");
      tijera1.classList.remove("tijera1");
      console.log(tj);
    } else if (suma) {
      tijera1.classList.add("tijera1");
    }
    contador();
  }, 1000);
}

function contador() {
  suma++;
  console.log(suma);
  if (suma >= 4) {
    clearInterval(segundos);
    suma = 0;
  }
}

piedra.addEventListener("click", function () {
  if (piedra.checked) {
    compu = Math.floor(Math.random() * 3);
    cuentaRegresiva();
    if (compu == 0) {
      console.log("empate");
    } else if (compu == 1) {
      console.log("perdiste");
    } else {
      console.log("ganaste");
    }
  }
});

papel.addEventListener("click", function () {
  if (papel.checked) {
    compu = Math.floor(Math.random() * 3);
    cuentaRegresiva();
  }
  if (compu == 0) {
    alert("ganaste");
  } else if (compu == 1) {
    alert("empate");
  } else {
    alert("perdiste");
  }
});
tijera.addEventListener("click", function () {
  if (tijera.checked) {
    compu = Math.floor(Math.random() * 3);
    cuentaRegresiva();
  }
  if (compu == 0) {
    alert("perdiste");
  } else if (compu == 1) {
    alert("ganaste");
  } else {
    alert("empate");
  }
});
