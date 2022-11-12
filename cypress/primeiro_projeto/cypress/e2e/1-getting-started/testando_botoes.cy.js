//FUNCAO
describe('fazer login', () =>{
    //primeiro teste abrir o site 
    before(() =>{
        cy.visit('https://hom-loja20.playdepremios.com.br/');
    })

    //segundo iniciar novo caso de teste
    it('abrir menu', () =>{
       //cy.get(':nth-child(2) > .mt-10').should('have.text','titulete');
        cy.get(':nth-child(2) > .mt-5 > .botao').click();
    })
})