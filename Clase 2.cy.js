describe ('Login',() =>{
     it('Casos exitosos',() => {    
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
     cy.get('[data-cy="input-nombres"]').type('juan Pedro')
     cy.get('[data-cy="input-apellido"]').type('Coso')  

     }) 