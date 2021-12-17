/// <reference types="cypress-xpath"/>

context('Validation of the e-mail field on the registration form', () => {
    beforeEach(() => {
        cy.visit('https://me24.meest-group.com')
    })

    it('Absence @ - abc.example.com', () => {
        cy.xpath("//span[@class='v-button-caption']/font").click();
        cy.xpath("//input[@id='gwt-uid-9']").type('abc.example.com{Enter}');
        cy.xpath("//div[@class='err-msg-wrapper']/div").should("be.visible");
    })

    it('Email without domain part - simple@', () => {
        cy.xpath("//span[@class='v-button-caption']/font").click();
        cy.xpath("//input[@id='gwt-uid-9']").type('simple@{Enter}');
        cy.xpath("//div[@class='err-msg-wrapper']/div").should("be.visible");
    })

    it('Email with spaces, quotes and slash in username - this is"not\allowed@example.com', () => {
        cy.xpath("//span[@class='v-button-caption']/font").click();
        cy.xpath("//input[@id='gwt-uid-9']").type('this is"not\allowed@example.com{Enter}');
        cy.xpath("//div[@class='err-msg-wrapper']/div").should("be.visible");
    })

    it('Email with spaces, quotes and slashes in the domain part - simple@ex "a"m\ple.com', () => {
        cy.xpath("//span[@class='v-button-caption']/font").click();
        cy.xpath("//input[@id='gwt-uid-9']").type('simple@ex "a"m\ple.com{Enter}');
        cy.xpath("//div[@class='err-msg-wrapper']/div").should("be.visible");
    })

    it('Email without username - @example.org', () => {
        cy.xpath("//span[@class='v-button-caption']/font").click();
        cy.xpath("//input[@id='gwt-uid-9']").type('@example.org{Enter}');
        cy.xpath("//div[@class='err-msg-wrapper']/div").should("be.visible");
    })

    it('Incorrect first-level domain (2-6 characters after a period are allowed) - simple@example.c', () => {
        cy.xpath("//span[@class='v-button-caption']/font").click();
        cy.xpath("//input[@id='gwt-uid-9']").type('simple@example.c{Enter}');
        cy.xpath("//div[@class='err-msg-wrapper']/div").should("be.visible");
    })


})