/// <reference types="cypress-xpath"/>

context('Language switching', () => {
    beforeEach(() => {
        cy.visit('https://me24.meest-group.com')
    })

    it('Switch to english', () => {
        cy.xpath("//span[@class='v-button-caption'][contains(text(),'eng')]").click();
        cy.xpath("//div[@class='v-button v-widget custom v-button-custom round v-button-round']//span[contains(text(),'eng')]")
            .should('be.visible');
        cy.xpath("//span[@class='v-button-caption'][contains(text(),'Login')]")
            .should('be.visible');
        cy.xpath("//span[@class='v-button-caption'][contains(text(),'Do you Forgot password?')]")
            .should('be.visible');
        cy.xpath("//span[@class='v-button-caption']/font[contains(text(),'Register')]")
            .should('be.visible')
    })

    it('Switch to rus', () => {
        cy.xpath("//span[@class='v-button-caption'][contains(text(),'рус')]").click();
        cy.xpath("//div[@class='v-button v-widget custom v-button-custom round v-button-round']//span[contains(text(),'рус')]")
            .should('be.visible');
        cy.xpath("//span[@class='v-button-caption'][contains(text(),'ВОЙТИ')]")
            .should('be.visible');
        cy.xpath("//span[@class='v-button-caption'][contains(text(),'Забыли пароль? ')]")
            .should('be.visible');
        cy.xpath("//span[@class='v-button-caption']/font[contains(text(),'Зарегистрироваться')]")
            .should('be.visible')
    })

    it('Switch to ukr', () => {
        cy.xpath("//span[@class='v-button-caption'][contains(text(),'укр')]").click();
        cy.xpath("//div[@class='v-button v-widget custom v-button-custom round v-button-round']//span[contains(text(),'укр')]")
            .should('be.visible');
        cy.xpath("//span[@class='v-button-caption'][contains(text(),'Увійти')]")
            .should('be.visible');
        cy.xpath("//span[@class='v-button-caption'][contains(text(),'Забули пароль? ')]")
            .should('be.visible');
        cy.xpath("//span[@class='v-button-caption']/font[contains(text(),'Зареєструватись')]")
            .should('be.visible')
    })

    it('second test', () => {
        cy.xpath("//span[@class='v-button-caption'][contains(text(),'Увійти')]").click();
    })

    it('Language switching', () => {
        console.log(cy.xpath("//span[@class='v-button-caption'][contains(text(),'eng')]"))
    })



})