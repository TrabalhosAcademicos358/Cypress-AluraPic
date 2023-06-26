describe('Registro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('verifica mensagens validacao', () => {
        cy.register({ });
        ['Email', 'User name', 'Password', 'Full name'].map(field => {
            cy.contains('ap-vmessage', `${field} is required!`).should('be.visible');
        });
    })

    it('verifica mensagens de email invalido', () => {
        cy.register({ 'email' : 'emailInvalido' });
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagens de senha com menos de 8 caracteres', () => {
        cy.register({ "password" : "123" });
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    const listUser = require("../../fixtures/user.json");
    listUser.forEach(user => {
        it(`Registra novo usuário ${user.userName} com sucesso`, () => {
            cy.register(user)
        })
    })
    
})