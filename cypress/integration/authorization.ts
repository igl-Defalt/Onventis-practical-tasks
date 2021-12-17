/// <reference types="cypress-xpath"/>

context('Language switching', () => {
    beforeEach(() => {
        cy.visit('https://me24.meest-group.com');
    })


    it('Authorization with valid data', () =>{
        cy.xpath("//span[@class='v-button-caption'][contains(text(),'eng')]").click();
        cy.wait(3000);
        cy.xpath("//input[@id='gwt-uid-4']").click();
        cy.xpath("//input[@id='gwt-uid-4']").type("qa-webcase2@meta.ua");
        cy.xpath("//input[@id='gwt-uid-6']").type("QWEqwe123");
        cy.xpath("//div[@class='v-button v-widget custom v-button-custom round v-button-round large v-button-large']").click();
        cy.xpath("//div[@class='popupContent']/div[@class='v-window-wrap']").should('be.visible')
        cy.xpath("//div[@class='v-label v-widget h2 v-label-h2 colored v-label-colored v-has-width'][contains(text(),'To get started, please complete this form.')]")
        .should("be.visible");
        cy.xpath("//div[@class='v-label v-widget h2 v-label-h2 colored v-label-colored v-has-width'][contains(text(),'qa-webcase2@meta.ua')]")
        .should('be.visible');


    })

    


})