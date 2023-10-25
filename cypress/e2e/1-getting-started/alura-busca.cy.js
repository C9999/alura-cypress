describe('Alura busca cursos', () => {
    beforeEach(() => {
        cy.visit('https://www.alura.com.br')
    })

    it('Buscar curso de Java', () => {
        cy.get('.header__nav--busca-form').type('Java');
        cy.get('.header__nav--busca-submit').click();
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Aprenda Java com Orientação a Objetos');
    })
})