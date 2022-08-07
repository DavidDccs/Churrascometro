var input1 = document.getElementById("adultos");
var input2 = document.getElementById("criancas");
var input3 = document.getElementById("horas");

function calculadora() {
  let adultos = input1.value;
  let criancas = input2.value;
  let horas = input3.value;
  let comida = 400 * adultos + (400 / 2) * criancas;
  let cerveja = adultos * 1200;
  let bebida = adultos * 1000 + (1000 / 2) * criancas;
  if (horas >= 6) {
    comida = adultos * 650 + (criancas * 650) / 2.0;
    cerveja = adultos * 2000;
    bebida = adultos * 1500 + (criancas * 1500) / 2.0;
  }
  let textComida = document.getElementById("carne");
  let textBebida = document.getElementById("bebida");
  let textCerveja = document.getElementById("cerveja");
  console.log(input1, input2, input3);
  textComida.innerHTML = "A quantidade de carne necessaria é " + comida + "g";
  textBebida.innerHTML = "A quantidade de bebida necessaria é " + bebida + "ml";
  textCerveja.innerHTML =
    "A quantidade de cerveja necessaria é " + cerveja + "ml";
}
