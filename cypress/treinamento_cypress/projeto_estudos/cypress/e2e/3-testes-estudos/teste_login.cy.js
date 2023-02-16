describe('Teste de Login', () => {
    it('Deve fazer login com sucesso', () => {
      cy.visit('https://hom-prod-20.playservicos.com.br/entrar') // Visita a página de login
  
      cy.get('[type="text"]') // Seleciona o campo de usuário
        .type('02792595140') // Insere o nome de usuário
  
      cy.get('[type="password"]') // Seleciona o campo de senha
        .type('12345678') // Insere a senha
  
      cy.get('button').contains('Entrar') // Seleciona o botão de login
        .click() // Clica no botão de login
  
      cy.url() // Verifica se a URL foi alterada para a página de destino
        .should('include', '/comprar') // A URL deve conter "/comprar"
  
      cy.get('#welcome-message') // Verifica se o usuário é redirecionado para a página de destino
        .should('contain', 'Bem-vindo, 02792595140!') // O usuário deve ser recebido com uma mensagem de boas-vindas
    })
  
    it('Deve exibir mensagem de erro com credenciais inválidas', () => {
      cy.visit('https://hom-prod-20.playservicos.com.br/entrar') // Visita a página de login
  
      cy.get('[type="text"]') // Seleciona o campo de usuário
        .type('027925') // Insere um nome de usuário inválido
  
      cy.get('[type="password"]') // Seleciona o campo de senha
        .type('2345') // Insere uma senha inválida
  
      cy.get('button').contains('Entrar') // Seleciona o botão de login
        .click() // Clica no botão de login
  
      cy.get('#error-message') // Verifica se a mensagem de erro é exibida
        .should('be.visible') // A mensagem de erro deve estar visível
        .and('contain', 'Credenciais inválidas. Por favor, tente novamente.') // A mensagem de erro deve ser exibida corretamente
    })
  })
  