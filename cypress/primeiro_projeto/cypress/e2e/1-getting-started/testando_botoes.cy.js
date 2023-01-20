//FUNCAO
describe('fazer login', () =>{
    //primeiro teste abrir o site 
    before(() =>{
        cy.visit('https://hom-loja20.playdepremios.com.br/');
    })

    //segundo iniciar novo caso de teste
    it('abrir menu', () =>{
        cy.get('.cp-topo-component .menu .v-btn').click(); //abrir o menu
        cy.get('v-btn v-btn--contained theme--light v-size--default').click(); //clicar em "entrar"
        
        //INFORMAR DADOS DE LOGIN
        cy.get('#input-113').click(); //clicar no campo "cpf"
        cy.get('#input-113').type('02792595140'); //preencher o campo "cpf"
        cy.get('#input-115').click(); //clicar no campo "senha"
        cy.get('#input-115').type('123123123'); //informar "senha"
    })
})