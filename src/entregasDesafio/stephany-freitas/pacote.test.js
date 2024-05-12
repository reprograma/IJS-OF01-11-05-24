const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular valor total do projeto', () => {
    test('deve retornar pacote_basico quando a duração do projeto é de 49 horas', () => {
        const esperado = 'pacote_basico';
        const retornado = calcularPacote(49);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar pacote_basico quando a duração do projeto é de 50 horas', () => {
        const esperado = 'pacote_basico';
        const retornado = calcularPacote(50);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar pacote_premium quando a duração do projeto é de 101 horas', () => {
        const esperado = 'pacote_premium'
        const retornado = calcularPacote(101);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar pacote_intermediario quando a duração do projeto é de 100 horas', () => {
        const esperado = 'pacote_intermediario'
        const retornado = calcularPacote(100);
        expect(esperado).toBe(retornado);
    });

    test('deve retornar Error quando o valor informado do projeto é negativo', () => {
        expect(()=>{
            calcularPacote(-10);
        }).toThrow('O total de horas do projeto não pode ser negativo');
    });

    test('deve retornar pacote_nao_econtrado quando a duração do projeto for maior que 200 horas', () => {
        expect(()=>{
            calcularPacote(201);
        }).toThrow('projeto_nao_encontrado');
    });
});
