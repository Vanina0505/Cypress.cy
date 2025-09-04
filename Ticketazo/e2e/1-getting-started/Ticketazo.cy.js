describe ('Login',() =>{
     it('Casos exitosos',() => {
    
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    
     cy.get('[data-cy="input-nombres"]').type('juan Pedro')
     cy.get('[data-cy="input-apellido"]').type('Coso')
     cy.get('[data-cy="input-telefono"]').type('0123456789')
     cy.get('[data-cy="input-dni"]').type('10045678')
     cy.get('[data-cy="select-provincia"]').click().type('Entre Rios{enter}')
     cy.get('[data-cy="select-localidad"]').click().type('Concordia{enter}')
     cy.contains('dd').type('05')
     cy.contains('mm').type('08')
     cy.contains('aaaa').type('1990')
     cy.get('[data-cy="input-email"]').type ('algo@gm.com')
     cy.get('[data-cy="input-confirmar-email"]').type('algo@gm.com')
     cy.get('[data-cy="input-password"]').type('1234Abcd/')
     cy.get('[data-cy="input-repetir-password"]').type('1234Abcd/')
     cy.get('[data-cy="btn-registrarse"]').click()
       

    })
})

    
       
     




