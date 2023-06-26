Cypress.Commands.add('login', (name, password) => {
    cy.get('input[formcontrolname="userName"]').type(name);
    cy.get('input[formcontrolname="password"]').type(password, { log: false });
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('register', (user) => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    for (const field in user) {
        cy.get(`input[formcontrolname="${field}"]`).type(user[field]);
    }
    cy.contains('button', 'Register').click();
})