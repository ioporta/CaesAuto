/// <reference types="cypress" />

before('Cargar Data', () => {
    cy.fixture('login').then(function (login) {
        this.login = login;
    })
})

describe('hacer registro en e-commerce', () => {
    
    it('exitoso', function () {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click()
        cy.get('#email_create').type(this.login.correoRegistroExitoso)
        cy.get('#SubmitCreate > span').click()
        cy.wait(2000)
        cy.get('#id_gender1').click()
        cy.get('#customer_firstname').type(this.login.nombre)
        cy.get('#customer_lastname').type(this.login.apellido)
        cy.get('#passwd').type(this.login.clave)
        cy.get('#address1').type(this.login.direccion)
        cy.get('#city').type(this.login.ciudad)
        cy.get('#phone_mobile').type(this.login.telefono)
        cy.get('#id_state').select(this.login.estado)
        cy.get('#postcode').type(this.login.zip)
        cy.get('#submitAccount > span').click()
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').should('be.visible')        
    })

    it('fallido por código postal', function () {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click()
        cy.get('#email_create').type(this.login.correoRegistroExitoso)
        cy.get('#SubmitCreate > span').click()
        cy.wait(2000)
        cy.get('#id_gender1').click()
        cy.get('#customer_firstname').type(this.login.nombre)
        cy.get('#customer_lastname').type(this.login.apellido)
        cy.get('#passwd').type(this.login.clave)
        cy.get('#address1').type(this.login.direccion)
        cy.get('#city').type(this.login.ciudad)
        cy.get('#phone_mobile').type(this.login.telefono)
        cy.get('#id_state').select(this.login.estado)
        cy.get('#postcode').type(this.login.zipIncorrecto)
        cy.get('#submitAccount > span').click()
        cy.get('ol > li').should('contain', 'It must follow this format: 00000')     
    })

    it('hacer login', function () {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click()
        cy.get('#email').type('juanduarte1612@gmail.com')
        cy.get('#passwd').type('Pepito123')
        cy.get('#SubmitLogin > span').click()
        //cy.get('.myaccount-link-list > :nth-child(4) > a > span').should('be.visible')        
    })


    it('hacer login con contraseña incorrecto', function () {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click()
        cy.get('#email').type('juanduarte1612@gmail.com')
        cy.get('#passwd').type('Prueba123')
        cy.get('#SubmitLogin > span').click()
        cy.get('ol > li').should('contain', 'Authentication failed.')     
    })


})
