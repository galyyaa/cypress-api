/// <reference types="cypress" />
import user from '../fixtures/user'

describe('Intercept', () => {

    it('Profile test', () => {
        cy.intercept('GET', 'https://qauto.forstudy.space/panel/profile').as('user');
            cy.visit('https://qauto.forstudy.space/', {
                auth: {
                    username: 'guest',
                    password: 'welcome2qauto'
                },
            });    
            cy.contains('Sign In').click();
            cy.get('#signinEmail').type('morgun.galya22+1@gmail.com');
            cy.get('#signinPassword').type('Qwer1234');
            cy.contains('Login').click();
            cy.get('.sidebar_btn-group').click();
            cy.contains('Polar Bear').should('be.visible');
            })
    })
