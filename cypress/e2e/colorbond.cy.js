Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })
  
  describe('colorbond auto qa', () => {

    let myUrl = Cypress.env('base_url')
    let newUrl = ''
      
    before(() => {
      cy.task('writeLine',`automation test by ${Cypress.env('developer')} version: ${Cypress.env('version')}`)
      cy.visit(myUrl)
      cy.screenshot()
    })

    it('search and open article entitled award',()=>{
        cy.task('writeLine','open search input box')
        cy.get('div.hidden.flex-wrap.justify-end.items-center > div.block.global-search').click()
        cy.screenshot()
        cy.task('writeLine','input keyword')
        cy.get('body > div.min-h-screen > div.top-0.left-0.w-full.h-full.overlay-black.global-search-overlay.z-50 > div.block.relative.w-full.h-full > form > div > input').type('award {enter}')
        cy.url().should('include', '/search')
        cy.screenshot()
        cy.task('writeLine','click article entitle shinta prima')
        cy.get('body > div.min-h-screen > div.flex-col.w-full > main > div.flex.flex-wrap.w-full.my-12.py-12 > div > div > div > a:nth-child(3)').click()
        cy.url().should('include','/inspirations/shinta-prima-feedmill-nganjuk')
        cy.screenshot()
    })

    it('second test',()=>{
        cy.task('writeLine','second test')
    })

  })