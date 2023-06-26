describe("Testes com a api", () => {

    it("Buscar fotos do flavio", () => {
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then(res => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
        })
    })

    it("Fazer login com usuário Flavio", () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then(res => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
        })
    })
    
})