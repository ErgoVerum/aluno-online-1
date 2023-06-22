const Nota = require('../models/nota');

describe('Calculo da média final', () => {
  it('Deve calcular a média final', async () => {
    const notas = new Nota('Disciplina', 5.2, 3.8, 4.8);
    expect(notas.mediaFinal()).toBe(4.96);
    expect(notas.mediaCA()).toBe('MI');
  });

  it('Deve calcular a média CA', async () => {
    const notas = new Nota('Disciplina', 6.4, 4.2, 0);
    expect(notas.mediaCA()).toBe('MM');
  })

  it('Deve calcular a média CA', async () => {
    const notas = new Nota('Disciplina', 5.2, 3.8, 4.96);
    expect(notas.mediaFinal()).toBe(5.056);
    expect(notas.mediaCA()).toBe('MM');
  })

  it('Deve calcular a média CA', async () => {
    const notas = new Nota('Disciplina', 1.5, 6.5, 3);
    expect(notas.mediaFinal()).toBe(5.1);
    expect(notas.mediaCA()).toBe('MM');
  })

  it('Deve calcular a média CA', async () => {
    const notas = new Nota('Disciplina', 0, 0, 0);
    expect(notas.mediaFinal()).toBe(0);
    expect(notas.mediaCA()).toBe('SR');
  })

  it('Deve calcular a média CA', async () => {
    const notas = new Nota('Disciplina', 0, 0, 1);
    expect(notas.mediaFinal()).toBe(0.6);
    expect(notas.mediaCA()).toBe('II');
  })

  it('Deve calcular a média CA', async () => {
    const notas = new Nota('Disciplina', 0, 0, 3);
    expect(notas.mediaFinal()).toBe(1.8);
    expect(notas.mediaCA()).toBe('MI');
  })
});
