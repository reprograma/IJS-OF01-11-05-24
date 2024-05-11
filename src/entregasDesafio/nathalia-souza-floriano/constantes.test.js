const constantes = require('./constantes');

describe('Constantes do Projeto', () => {
  test('Verificar se as constantes estão definidas corretamente', () => {
    expect(constantes.DIAS_UTEIS_NO_MES).toEqual(22);
    expect(constantes.HORAS_POR_DIA).toEqual(8);
    expect(constantes.MAX_HORAS_POR_PACOTE).toEqual({
      pacote_basico: 50,
      pacote_intermediario: 199,
      pacote_premium: 200
    });
    expect(constantes.TAXAS_CONTRATUAIS_POR_PACOTE).toEqual({
      pacote_basico: 1.1,
      pacote_intermediario: 1.12,
      pacote_premium: 1.15
    });
    expect(constantes.HORAS_POR_FUNCIONALIDADE).toEqual({
      setup: 8,
      formulario: 16,
      responsividade: 16,
      otimizacao_seo: 16,
      construcao_1_pagina: 8,
      integracao_mailchimp: 16,
      ssr: 8,
      integracao_api_propria: 16
    });
  });
});
