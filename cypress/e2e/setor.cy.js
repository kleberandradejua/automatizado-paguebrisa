/// <reference types="cypress" />

describe('Cadastro de setor', function(){
    it('Criar orçamento',()=>{
        cy.viewport(1600, 900)
        cy.visit('https://paguebrisah.brisanet.net.br/')       

        //Acesso ao sistema        

        cy.get('h1').should('have.text', 'Bem-vindo (a), ao Pague Brisa!')

        let login = {
            doc: '05731294364',
            password: 'testea12'
        }

        cy.get('input[placeholder="Informe seu login"]').type(login.doc)
        cy.get('input[placeholder="Informe sua senha"]').type(login.password)
        cy.get('button[data-testid="button-login"]').click()

        //Acesso ao módulo de setor e cadastro de um novo setor

        //cy.get('a[id="Setores"]').click()
        cy.get(':nth-child(1) > .ant-card-actions > li.ng-star-inserted > span > .ng-star-inserted').click()
        cy.get('.botao > .ng-star-inserted').click()

        cy.get('div > h1').should('have.text', 'Cadastro de setores')

        let sectorregistration = {
            name: 'Teste Automatizado',
            supervisor: 'Kleber Andrade',
            
        }

        cy.get('[data-testid="nome"]').type(sectorregistration.name)
        cy.get('#usuario_supervisor_id > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').type(sectorregistration.supervisor)        
        cy.wait(3000).get('.ant-select-dropdown-menu > :nth-child(1)').click()
        //cy.wait(3000).get('#setor > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click()
        

        
        



    })
})