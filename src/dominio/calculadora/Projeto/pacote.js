const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

// const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
//   .find(([key, value]) => value >= totalDeHorasPorProjeto)[0];

// exports.calcularPacote = calcularPacote;

// Retorna null se nenhum pacote for encontrado
const calcularPacote = (totalDeHorasPorProjeto) => {
  const resultado = Object.entries(MAX_HORAS_POR_PACOTE)
      .find(([key, value]) => value >= totalDeHorasPorProjeto);

  return resultado ? resultado[0] : null; 
};

exports.calcularPacote = calcularPacote;