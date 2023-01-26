/// <reference types="cypress" />

context('LojaWeb20 Demo Produção', () => {

        //1º entender o fluxo manualmente 
        //2º mapear os elementos da tela
        //3º desenvolver os testes automatizados
        //4º adicionar as asserções para validar os resultados dos testes
    // beforeEach(() => {
    //     //ACESSAR A URL DESEJADA
    //     cy.visit('https://hom-prod-20.playservicos.com.br/')
    // })

    // it('Abrir Menu e acessar Login', () => {
    //     //cy.get('#inspire > div > div:nth-child(2) > main > div > header > div > div > div').find('i').click() //class do menu 
    //     cy.get('.flex').find('i').click() //class do menu
    //     cy.get('button').contains('Entrar').click() //botão entrar 
    // })

    // it('Informar CPF incorretos', () => {
    //     cy.get('[type=text]').click() //atributos do campo email
    //     cy.get('[type="text"]').type('02792595')
    //     cy.get('[type="password"]').click() //atributos do campo senha
    //     cy.get('[type="password"]').type('123123123')
    //     cy.get('button').contains('Entrar').click() //botão entrar para fazer login
    //     cy.get('#swal2-content').contains('Usuário ou Senha incorretos') //mensagem de erro
    //     cy.get('button').contains('OK').click() //botão ok
    // })

    it('Fazer login ', () => {

        cy.visit('https://hom-prod-20.playservicos.com.br/entrar')

        
        //REALIZANDO O MAPEAMENTO DOS ELEMENTOS DA TELA
        //cy.get('#inspire > div > div:nth-child(2) > main > div > header > div > div > div').find('i').click() //class do menu 
        //cy.get('.flex').find('i').click() //class do menu
        //cy.get('button').contains('Entrar').click() //botão entrar 
        cy.get('[type=text]').click() //atributos do campo email
        cy.get('[type="text"]').type('02792595140')
        cy.get('[type="password"]').click() //atributos do campo senha
        cy.get('[type="password"]').type('123123123')
        cy.get('button').contains('Entrar').click() //botão entrar para fazer login

        //VALIDANDO OS RESULTADOS DOS TESTES
        cy.get('font-weight-black').contains('ANGELICA') //validando o nome do usuário logado
        //DECREVER AS INTERAÇÕES COM A TELA
        /* 
        .ph-list-light será um clique
        'button' será um clique
        [type="text"] será um clique e digitar um texto
        [type="password"] será um clique e digitar um texto

         */
    });        
});