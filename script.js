// pegando o id do numero especifico no html
const numeral = document.getElementById("1");
const numeral2 = document.getElementById("2");
const numeral3 = document.getElementById("3");
const numeral4 = document.getElementById("4");
const numeral5 = document.getElementById("5");
const numeral6 = document.getElementById("6");
const numeral7 = document.getElementById("7");
const numeral8 = document.getElementById("8");
const numeral9 = document.getElementById("9");
const numeral0 = document.getElementById("0");

// pegando os simbolos especificos no html
const simboloMais = document.getElementById("+");
const simboloMenos = document.getElementById("-");
const simboloMult = document.getElementById("x");
const simboloDiv = document.getElementById("/");
const simboloReset = document.getElementById("C");
const simboloVirgula = document.getElementById(",");
const simboloIgual = document.getElementById("=");

// Pegando o id da tela no html para fazer a alteracao dos dados em ela
const telaScream = document.getElementById("tela");


// funcao somar 
function soma() {
  // pegamos a variavel total2 e trocamos a (,) por um (.)
  // assim o programa consegue fazer a operacao com decimal
  resul = parseFloat(total2.replace(",", "."));
  // transmormamos em tipo nunmber
  let evt1 = +resul;
  // fizemos a mesma coisa com a variavel total
  resul2 = parseFloat(total.replace(",", "."));

  let evt2 = +resul2;
  console.log(evt2);
  // somando os valores
  let resultado = (evt1 += evt2);
  telaScream2(resultado);
  console.log(resultado);
  
}

function menos() {
  // pegamos a variavel total2 e trocamos a (,) por um (.)
  // assim o programa consegue fazer a operacao com decimal
  resul = parseFloat(total2.replace(",", "."));
  // transmormamos em tipo nunmber
  let evt1 = +resul;
  // fizemos a mesma coisa com a variavel total
  resul2 = parseFloat(total.replace(",", "."));

  let evt2 = +resul2;
  console.log(evt2);
  //subtraindo os valores
  let resultado = (evt1 -= evt2);
  telaScream2(resultado);

  console.log(resultado);
}

function mult() {
  // pegamos a variavel total2 e trocamos a (,) por um (.)
  // assim o programa consegue fazer a operacao com decimal
  resul = parseFloat(total2.replace(",", "."));
  // transmormamos em tipo nunmber
  let evt1 = +resul;
  // fizemos a mesma coisa com a variavel total
  resul2 = parseFloat(total.replace(",", "."));

  let evt2 = +resul2;
  console.log(evt2);
  //multiplicando os valores
  let resultado = (evt1 *= evt2);
  telaScream2(resultado);

  console.log(resultado);
}

function dividi() {
  // pegamos a variavel total2 e trocamos a (,) por um (.)
  // assim o programa consegue fazer a operacao com decimal
  resul = parseFloat(total2.replace(",", "."));
  // transmormamos em tipo nunmber
  let evt1 = +resul;
  // fizemos a mesma coisa com a variavel total
  resul2 = parseFloat(total.replace(",", "."));
  let evt2 = +resul2;
  console.log(evt2);
  //dividindo os valores
  let resultado = (evt1 /= evt2);
  telaScream2(resultado);

  console.log(resultado);
}
// funcao que carrega a pagina apagando as informacoes
function reset() {
  location.reload();
}

const arraySelecao = []; // array dos primeiros digitos antes dos simbolos
const arraySelecao2 = []; // array dos simbolos
const arraySelecao3 = []; // array dos segundos digitos apos os simbolos
const arraySelecao4 = []; // onde  vamos armazenar a visgula
const arraySelecao5 = []; // onde  vamos armazenar a visgulas apos os simbolos

// variaveis criadas fora dos escopos das funcoes para uso global
let total = 0;
let total2 = 0;
let naTela = 0;

// passanso o valor final pra funcao telaScream
function telaScream2(naTela) {
  naTela;
  console.log(naTela);
  console.log(telaScream.value = naTela);

  // se o numero comecar indefinido ele imprimira na tela o zero
  // caso o contrario ele imprimira o numero digitado
  if(telaScream.value == undefined){  
    document.getElementById('tela').innerHTML = 0
  }else {
    document.getElementById('tela').innerHTML = telaScream.value;
  }
   telaScream.value;
}

// numero selecionado e trazendo o evt
function numSelecionado(evt) {
  // se o id for igual a (C) reload
  if (evt.target.id == "C") {
    reset();
    // eliminamos o erro do usuario digitar primeiramente a (,) sem numeros
  } else if (evt.target.id == "," && arraySelecao.length == 0) {
    
    reset();
    // impede que colocamos o sinal de menos primeiro
  } else if (evt.target.id == "-" && arraySelecao.length == 0) {
    reset();
    // impede que coloquemos o (x) antes de numeros
  } else if (evt.target.id == "x" && arraySelecao.length == 0) {
    reset();
  }
  // impede que coloquemos (+) antes de  numeros
  else if (evt.target.id == "+" && arraySelecao.length == 0) {
    reset();
  }
  // impede que usemos(/) antes de numeros
  else if (evt.target.id == "/" && arraySelecao.length == 0) {
    reset();
  }

  // quando os numeros passarem a tela
  if(arraySelecao.length >= 33 || arraySelecao3.length >= 33){
    // executa duas funcoes
   alert("sintax erro")// nao cabem mais numeros na tela
   reset()// reseta logo em seguida
  }

  // se o array4 das primeiras virgulas estiver vazio e
  // array2 dos simbolos vazio e 
  // o id for uma virgula
  // sera true
  if(arraySelecao4.length > 0 && arraySelecao2.length > 0 && evt.target.id == ","){
     // colocando as virgulas  no arraySelecao5
     console.log(arraySelecao5.length);
     //pegando o id
     const selecao = evt.target.id;
     //colocando o id dentro do array
     arraySelecao5.push(selecao);
     console.log(selecao);
     console.log(arraySelecao5);
 // jogango pro html o resultado final
     document.getElementById('tela').innerHTML = arraySelecao4
  }else if(evt.target.id == ','){
    // a primeira virgula vai pro array4
     // colocando as virgulas  no arraySelecao4
     console.log(arraySelecao4.length);
     //pegando o id
     const selecao = evt.target.id;
     //colocando o id dentro do array
     arraySelecao4.push(selecao);
     console.log(selecao);
     console.log(arraySelecao4);
 // jogango pro html o resultado final
     document.getElementById('tela').innerHTML = arraySelecao4
  }

  // se o arra4 for maior que um i e o id for virgula
  // true
  if( arraySelecao4.length > 1 &&  evt.target.id == ','){
    console.log(arraySelecao4.length);

   reset()

  }

  // se o arra5 for maior que um i e o id for virgula
  // true
   if( arraySelecao5.length > 1 &&  evt.target.id == ','){
    console.log(arraySelecao5.length);

   reset()

  }
  
  //se o arraySelecao2 for menor que 0 e os digitos forem de o a 0
  // todo digito de 0 a 9 vai pro arraySelecao1
  //primeiramente. depois que o usuario digitar qualquer simbolo matematico
  // o arraySelecao1 nao recebe mais digitos. assim apos os simbolos
  // os proximos numeros serao armazenados no arraSelecao1
// os simbolos so sao armazenados no arraySelecao2
  if (arraySelecao2.length > [0] &&   evt.target.id == "0" ||
  arraySelecao2.length > [0] &&   evt.target.id == "1" ||
  arraySelecao2.length > [0] &&   evt.target.id == "2" ||
  arraySelecao2.length > [0] &&   evt.target.id == "3" ||
  arraySelecao2.length > [0] &&   evt.target.id == "4" ||
  arraySelecao2.length > [0] &&   evt.target.id == "5" ||
  arraySelecao2.length > [0] &&   evt.target.id == "6" ||
  arraySelecao2.length > [0] &&   evt.target.id == "7" ||
  arraySelecao2.length > [0] &&   evt.target.id == "8" ||
  arraySelecao2.length > [0] &&   evt.target.id == "9" ||
  arraySelecao2.length > [0] &&   evt.target.id == ","
  ) {
    // colocando os numeros no arraySelecao3
    console.log(arraySelecao3.length);
    //pegando o id
    const selecao = evt.target.id;
    //colocando o id dentro do array
    arraySelecao3.push(selecao);
    console.log(selecao);
    console.log(arraySelecao3);
// jogango pro html o resultado final
    document.getElementById('tela').innerHTML = arraySelecao3
  } else if (
    //se o id for diferente dessas operacoes matematicas
    //salva no arraySelecao
    // se for igual ele salva no arraySelecao2
    evt.target.id !== "+" &&
    evt.target.id !== "-" &&
    evt.target.id !== "x" &&
    evt.target.id !== "/"
  ) {
    const selecao = evt.target.id;
    arraySelecao.push(selecao);
    console.log(selecao);
    console.log(arraySelecao); 
    // jogango pro html o resultado final
    document.getElementById('tela').innerHTML = arraySelecao
  } else {
    const selecao = evt.target.id;
    arraySelecao2.push(selecao);
// caso seja digitado duas vezes qualquer simbolo apos a primeira leva de digitos
// o programa reseta
    if(arraySelecao2.length == [2]){
     reset()
    }
    console.log(selecao);
    console.log(arraySelecao2);
    // jogango pro html o resultado final
    document.getElementById('tela').innerHTML = arraySelecao2

  }
}

// faz a operacao funcionsar
function igual() {
  arraySelecao; // segundo numeral
  arraySelecao3; // primeiro numeral
  arraySelecao2; // simbolos

  // varrendo o arra3
  for (var i = 0; i < arraySelecao3.length; i++) {
    toString(total);
    // add no array as string concatenada
    total = total + arraySelecao3[i];
    console.log(total);
  }

  for (var i = 0; i < arraySelecao.length; i++) {
    toString(total2);
    total2 = total2 + arraySelecao[i];
  }
  //executa a funcao dependendo do simbolo selecionado
  if (arraySelecao2 == "+") {
    soma(total, total2);
  } else if (arraySelecao2 == "-") {
    menos(total, total2);
  } else if (arraySelecao2 == "x") {
    mult(total, total2);
  } else if (arraySelecao2 == "/") {
    dividi(total, total2);
  }
}


// esse evento dispara uma funcao como segungo parametro depois de um click
// os numeros recebendo o evento
numeral.addEventListener("click", numSelecionado);
numeral2.addEventListener("click", numSelecionado);
numeral3.addEventListener("click", numSelecionado);
numeral4.addEventListener("click", numSelecionado);
numeral5.addEventListener("click", numSelecionado);
numeral6.addEventListener("click", numSelecionado);
numeral7.addEventListener("click", numSelecionado);
numeral8.addEventListener("click", numSelecionado);
numeral9.addEventListener("click", numSelecionado);
numeral0.addEventListener("click", numSelecionado);

// os simbolos recebendo o evento
simboloMais.addEventListener("click", numSelecionado);
simboloMenos.addEventListener("click", numSelecionado);
simboloMult.addEventListener("click", numSelecionado);
simboloDiv.addEventListener("click", numSelecionado);
simboloReset.addEventListener("click", numSelecionado);
simboloIgual.addEventListener("click", igual);
simboloVirgula.addEventListener("click", numSelecionado);


// esse evento dispara uma funcao como segungo parametro depois de uma mudanca uma alteracao
// tela recebendo um evento
telaScream.addEventListener("change", telaScream2());
