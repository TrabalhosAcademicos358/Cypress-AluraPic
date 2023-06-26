describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Fazer login com usuário valido', () => {
        const user = Cypress.env();
        cy.login(user.userName, user.password);
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        });
    })

    it('Fazer login com usuário invalido', () => {
        cy.login('Paulo', '8452')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

})

