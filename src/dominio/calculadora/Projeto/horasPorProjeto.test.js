const { calcularHorasDeProjeto } = require("./horasPorProjeto");

test('deve retornar 16 quando é apenas um formulário', () => {
    const funcionalidades = ['formulario'];
    const esperado = 16;
    const retornado = calcularHorasDeProjeto(funcionalidades);

    expect(esperado).toBe(retornado);

});