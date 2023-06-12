const Nota = require('../../src/models/nota');

// testes e2e com cypress

describe('Calculo da média final', () => {
    it('a media é zero se não tem notas', () => {
        cy.visit('/nota');
        cy.get('#a1').type(0);
        cy.get('#a2').type(0);
        cy.get('#a3').type(0);
        cy.get('#calcular').click();
        cy.get('#media').should('contain', 0);
    });

    it('a média é (0.4 * a1) + (0.6 * a2) se tem apenas a1 e a2', () => {
        cy.visit('/nota');
        cy.get('#a1').type(3);
        cy.get('#a2').type(5);
        cy.get('#a3').type(0);
        cy.get('#calcular').click();
        cy.get('#media').should('contain', 0.4 * 3 + 0.6 * 5);
    });

    it('a média é (0.4 * a3) + (0.6 * a2) se a3 substitui a1', () => {
        cy.visit('/nota');
        cy.get('#a1').type(0);
        cy.get('#a2').type(5);
        cy.get('#a3').type(3);
        cy.get('#calcular').click();
        cy.get('#media').should('contain', 0.4 * 3 + 0.6 * 5);
    });

    it('a média é (0.4 * a1) + (0.6 * a3) se a3 substitui a2', () => {
        cy.visit('/nota');
        cy.get('#a1').type(6);
        cy.get('#a2').type(0);
        cy.get('#a3').type(5);
        cy.get('#calcular').click();
        cy.get('#media').should('contain', 0.4 * 6 + 0.6 * 5);
    });
})
describe('Calculo da média CA', () => {
    it('a media CA é SS se a media final é maior ou igual a 9', () => {
        cy.visit('/nota');
        cy.get('#a1').type(10);
        cy.get('#a2').type(10);
        cy.get('#a3').type(10);
        cy.get('#calcular').click();
        cy.get('#mediaCA').should('contain', 'SS');
    });

    it('a media CA é MS se a media final é maior ou igual a 7', () => {
        cy.visit('/nota');
        cy.get('#a1').type(7);
        cy.get('#a2').type(7);
        cy.get('#a3').type(7);
        cy.get('#calcular').click();
        cy.get('#mediaCA').should('contain', 'MS');
    });

    it('a media CA é MM se a media final é maior ou igual a 5', () => {
        cy.visit('/nota');
        cy.get('#a1').type(5);
        cy.get('#a2').type(5);
        cy.get('#a3').type(5);
        cy.get('#calcular').click();
        cy.get('#mediaCA').should('contain', 'MM');
    });

    it('a media CA é MI se a media final é maior ou igual a 3', () => {
        cy.visit('/nota');
        cy.get('#a1').type(3);
        cy.get('#a2').type(3);
        cy.get('#a3').type(3);
        cy.get('#calcular').click();
        cy.get('#mediaCA').should('contain', 'MI');
    });

    it('a media CA é II se a media final é maior ou igual a 1', () => {
        cy.visit('/nota');
        cy.get('#a1').type(1);
        cy.get('#a2').type(1);
        cy.get('#a3').type(1);
        cy.get('#calcular').click();
        cy.get('#mediaCA').should('contain', 'II');
    });

    it('a media CA é SR se a media final é maior ou igual a 0', () => {
        cy.visit('/nota');
        cy.get('#a1').type(0);
        cy.get('#a2').type(0);
        cy.get('#a3').type(0);
        cy.get('#calcular').click();
        cy.get('#mediaCA').should('contain', 'SR');
    });
})