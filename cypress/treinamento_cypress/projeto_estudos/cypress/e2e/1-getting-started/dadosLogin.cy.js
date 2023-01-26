/// <reference types="cypress" />

context('LojaWeb20 Demo Produção', () => {
    it('Fazer login ', () => {
        //1º entender o fluxo manualmente 
        //2º mapear os elementos da tela
        //3º desenvolver os testes automatizados
        //4º adicionar as asserções para validar os resultados dos testes
        
        //ACESSAR A URL DESEJADA
        cy.visit('https://hom-prod-20.playservicos.com.br/')

        //REALIZANDO O MAPEAMENTO DOS ELEMENTOS DA TELA
        cy.get('.flex .items-center').find('i').click() //class do menu 
        cy.get('button').contains('Entrar').click() //botão entrar 
        cy.get('[type=text]').click() //atributos do campo email
        cy.get('[type="text"]').type('02792595140')
        cy.get('[type="password"]').click() //atributos do campo senha
        cy.get('[type="password"]').type('123123123')
        cy.get('button').contains('Entrar').click() //botão entrar para fazer login

        //DECREVER AS INTERAÇÕES COM A TELA
        /* 
        .ph-list-light será um clique
        'button' será um clique
        [type="text"] será um clique e digitar um texto
        [type="password"] será um clique e digitar um texto

         */
    });    

    
});