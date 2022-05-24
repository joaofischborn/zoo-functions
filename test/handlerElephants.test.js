const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função retorna undefined caso não receba nenhum valor como parâmetro', () => {
    const actual = handlerElephants();
    const expected = undefined;

    expect(actual).toBe(expected);
  });

  it('Verifica se o parâmetro recebido é do tipo string', () => {
    const actual = handlerElephants(2);
    const expected = 'Parâmetro inválido, é necessário uma string';

    expect(actual).toEqual(expected);
  });

  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;

    expect(actual).toBe(expected);
  });

  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson;', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];

    expect(actual).toEqual(expected);
  });

  it('Para o argumento count deve retornar o número inteiro 4', () => {
    const actual = handlerElephants('count');
    const expected = 4;

    expect(actual).toEqual(expected);
  });
});
