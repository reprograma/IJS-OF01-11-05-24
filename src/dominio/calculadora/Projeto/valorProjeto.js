const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../constantes/constantes');
const { calcularHorasDeProjeto } = require('./horasPorProjeto');
const { calcularPacote } = require('./pacote');

const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
  return totalDeHorasPorProjeto * valorHora;
};

const calcularValorTotalProjeto = (funcionalidades, valorHora) => {
  const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
  const pacote = calcularPacote(totalDeHorasPorProjeto);
  const valorBase = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);

  // Obter a taxa contratual correspondente ao pacote escolhido
  const taxaContratual = TAXAS_CONTRATUAIS_POR_PACOTE[pacote];

  // Calcular o valor total do projeto aplicando a taxa contratual
  const valorTotalProjeto = valorBase * taxaContratual;

  // Arredondar o valor total do projeto para o valor mais próximo
  return Math.round(valorTotalProjeto);
};

module.exports = {
  calcularValorTotalProjeto,
};