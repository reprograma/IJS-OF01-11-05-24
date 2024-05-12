const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => {

  if(totalDeHorasPorProjeto < 0){
    throw new Error('O total de horas do projeto não pode ser negativo')
  }

  if(totalDeHorasPorProjeto > 200){
    throw new Error('projeto_nao_encontrado')
  }

  const pacote = Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto);

  if (!pacote) {
    throw new Error('Não há pacote disponível para o total de horas fornecido.');
  }

  return pacote[0];
}
exports.calcularPacote = calcularPacote;
