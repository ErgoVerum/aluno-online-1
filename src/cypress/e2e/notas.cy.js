// testes e2e com cypress

const matricula = '2023100'
const senha = 'senha123'

describe('Calculo da média final', () => {
  // Entrar no sistema e acessar notas
  it('Deve entrar no sistema', async () => {
    cy.visit('http://localhost:3000/login')
    cy.get('#inputMatricula').type(matricula)
    cy.get('#inputSenha').type(senha)
    cy.get('form').submit()
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(4) > :nth-child(5)').should('contain', '4.96')
    cy.get(':nth-child(5) > :nth-child(5)').should('contain', '5.08')
    cy.get(':nth-child(6) > :nth-child(5)').should('contain', '5.1')
    cy.get(':nth-child(7) > :nth-child(5)').should('contain', '0.76')

    cy.get(':nth-child(4) > :nth-child(6)').should('contain', 'MI')
    cy.get(':nth-child(5) > :nth-child(6)').should('contain', 'MM')
    cy.get(':nth-child(6) > :nth-child(6)').should('contain', 'MM')
    cy.get(':nth-child(7) > :nth-child(6)').should('contain', 'SR')
  })
})