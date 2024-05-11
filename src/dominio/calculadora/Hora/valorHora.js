const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES,
} = require("../constantes/constantes");

const calcularValorPorHora = (rendaMensal) => {
  const horasTrabalhadasPorMes = HORAS_POR_DIA * DIAS_UTEIS_NO_MES; //176
  const valorPorHora = rendaMensal / horasTrabalhadasPorMes;

  return Math.ceil(valorPorHora);
};

exports.calcularValorPorHora = calcularValorPorHora;
