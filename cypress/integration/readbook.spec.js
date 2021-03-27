
describe('when the user wants to view a book on the page ',()=>{
    const bookname="Patterns of Enterprise Application Architecture";
    before(()=> {
        cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
    
        cy.get('.ant-select-arrow > .anticon > svg').wait(200).click();
        cy.get('[title="50 / page"] > .ant-select-item-option-content').click();
    })


    it("then the book will be on page",() =>{
        
     
        cy.contains(bookname).should('exist');

    });


  });

  describe('when the user wants to see a book that does not exist on the page. ',()=>{
    const bookname="NoobMaster69";
    before(()=> {
        cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
    
        cy.get('.ant-select-arrow > .anticon > svg').click();
        cy.get('[title="50 / page"] > .ant-select-item-option-content').click();
    })


    it("then the book will not be on the page",() =>{
        
     
        cy.contains(bookname).should('not.exist');

    });


  });
