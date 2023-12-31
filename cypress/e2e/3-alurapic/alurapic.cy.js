describe('Login e registro de usuário alura pic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('Verifica mensagens validação', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', "Email is required!").should('be.visible')

        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', "User name is required!").should('be.visible')
        cy.contains('ap-vmessage', "Full name is required!").should('be.visible')
        cy.contains('ap-vmessage', "Password is required!").should('be.visible')
    })

    it('Verifica mensagem de email inválido', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="email"]').type('Mônica')
        cy.contains('ap-vmessage', "Invalid e-mail").should('be.visible')
    })

    it('Verifica mensagem de senha com menos caracteres', () => {
        cy.contains('a', 'Register now').click()
        cy.contains('button', 'Register').click()
        cy.get('input[formcontrolname="password"]').type('123')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', "Mininum length is 8").should('be.visible')
    })

     it('Verifica mensagem de user name inválido', () => {
         cy.contains('a', 'Register now').click()
         cy.contains('button', 'Register').click()
         cy.contains('button', 'Register').click()
         cy.contains('ap-vmessage', "User name is required!").should('be.visible')
     })

     it('Verifica mensagem de full name inválido', () => {
         cy.contains('a', 'Register now').click()
         cy.contains('button', 'Register').click()
         cy.contains('button', 'Register').click()
        //  cy.get('input[formcontrolname="fullName"]').type('Mônica')
         cy.contains('button', 'Register').click()
         cy.contains('ap-vmessage', "Full name is required!").should('be.visible')
     })

     it('Fazer login de usuário válido', () => {
         cy.login('flavio','123')
         cy.contains('a', '(Logout)').should('be.visible');
     })

     it('Fazer login de usuário inválido', () => {
         cy.login('jacquelide', '1234')
         cy.on('window:alert', (srt) => {
            expect(str).to.equal('Invalid user name or password')
         })
     })

     const usuarios = require('../../fixtures/usarios.json');
     usuarios.forEach(usuario => {
        it(`Registra novo usuário ${usuario.userName} `, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
     });
     
})