let $botaocalcular = document.querySelector(".botão-calcular");
let $resultado = document.querySelector(".resultado");
let $altura = document.querySelector("#altura");
let $peso = document.querySelector("#peso");
let $nome = document.querySelector("#nome");

const calcularImc = (peso, altura) => {
  return peso / (altura * altura);
};

const verificarDados = () => {
  let imc = calcularImc($peso.value, $altura.value);
  let imcCalculado = Number(imc.toFixed(1));

  return imcCalculado;
};

const classificacaoImc = () => {
  let nomeValor = $nome.value;
  let imcCalculado = verificarDados();

  if (imcCalculado < 18.5) {
    $resultado.textContent = `${nomeValor} você está abaixo do peso ideal , seu IMC calculado é ${imcCalculado} KG/m²`;
  } else if (imcCalculado >= 18.6 && imcCalculado <= 24.9) {
    $resultado.textContent = `${nomeValor} você está com o peso ideal , seu IMC calculado é ${imcCalculado} KG/m²`;
  } else if (imcCalculado >= 25.0 && imcCalculado <= 29.9) {
    $resultado.textContent = `${nomeValor} você está levemente acima do peso ,seu IMC calculado é ${imcCalculado} KG/m²`;
  } else if (imcCalculado >= 30.0 && imcCalculado <= 34.9) {
    $resultado.textContent = `${nomeValor} você está com obesidade garu 1  ,seu IMC calculado é ${imcCalculado} KG/m²`;
  } else if (imcCalculado >= 35.0 && imcCalculado <= 39.9) {
    $resultado.textContent = `${nomeValor} você está com obesidade garu 2  ,seu IMC calculado é ${imcCalculado} KG/m²`;
  } else if (imcCalculado >= 40.0) {
    $resultado.textContent = `${nomeValor} você está com obesidade mórbida  ,seu IMC calculado é ${imcCalculado} KG/m²`;
  }
};

const removerResultado = () => {
  setTimeout(() => {
    $resultado.textContent = "";
  }, 4000);
};

const removerValorDoInput = () => {
  $altura.value = "";
  $peso.value = "";
  $nome.value = "";
};

$botaocalcular.addEventListener("click", function () {
  classificacaoImc();
  removerResultado();
  removerValorDoInput();
});
