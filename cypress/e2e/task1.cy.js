/// <reference types="cypress" />
describe('Requests', () => {

    it('GET request from "Photos" using then', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/photos').then((response) => {
            expect(response.status).to.eq(200);
            cy.wrap(response.body[5].title).should('eq', 'accusamus ea aliquid et amet sequi nemo');
            console.log(response);
        })
    })

    it('GET request from "Users" using its', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').its('body[2].name').should('eq', 'Clementine Bauch');
    })

    it('POST request to "Posts"', () => {
        const newPost = {
            title: 'new post from Galinka',
            body: 'test body',
            userId: 22
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost).its('body.id').should('eq', 101);
    })

    it('PUT request for updating existing post', () => {
        const updatePost = {
            id: 1,
            title: 'update post',
            body: 'update body',
            userId: 1
        }
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', updatePost).as('update post');
    })

    it('DELETE request from "Posts"', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            expect(response.status).to.eq(200);
        })
    })
})
