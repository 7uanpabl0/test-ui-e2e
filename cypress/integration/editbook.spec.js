let bookName ="";
let bookAuthor ="";
describe('when the user wants to edit a book',()=>{

  

    before(()=> {
        cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
        cy.get(':nth-child(1) > :nth-child(4) > .ant-btn > .anticon > svg').click();

        cy.get('#name')
        .invoke('val') 
        .then(text => {
            bookName = text+"";
              cy.log(bookName)
      });

      cy.get('#author')
      .invoke('val')  
      .then(text => {
          bookAuthor = text+"";
          cy.log(bookAuthor);
    });

        cy.get('#name').wait(200).click();
        cy.get('#name').type(bookName+ " EDIT");
        cy.get('#author').wait(200).click();
        cy.get('#author').type(bookAuthor+" EDIT");
        cy.get('.ant-modal-footer > .ant-btn-primary > .ng-star-inserted').click();
     
    })


    it("then the book should be listed with the new right name and author",() =>{
        
    cy.contains(bookName+" EDIT").should("have.text", bookName+" EDIT");
    });

   

    afterEach(()=> {

        cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
        cy.get(':nth-child(1) > :nth-child(4) > .ant-btn > .anticon > svg').click();
        cy.get('#name').wait(200).click().clear();
        cy.get('#name').wait(200).type(bookName);
        cy.get('#author').wait(200).click().clear();
        cy.get('#author').wait(200).type(bookAuthor);
        cy.get('.ant-modal-footer > .ant-btn-primary > .ng-star-inserted').click();
        


    })
  });

  describe('when the user wants to edit a book when the user wants to edit a book, but in the end cancels the action.',()=>{

   

    before(()=> {
        cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
        cy.get(':nth-child(1) > :nth-child(4) > .ant-btn > .anticon > svg').click();
        cy.get('#name')
          .invoke('val') 
          .then(text => {
                bookName = text;
                cy.log(bookName)
        });

        cy.get('#author')
        .invoke('val')  
        .then(text => {
            bookAuthor = text;
            cy.log(bookAuthor);
      });
        cy.get('#name').wait(200).click().clear();
        cy.get('#name').wait(200).type("BOOK EDIT");
        cy.get('#author').wait(200).click().clear();
        cy.get('#author').wait(200).type("AUTHOR EDIT");
        cy.get('.ant-modal-footer > [nztype="default"] > .ng-star-inserted').click();
     
    })


    it("then the book should appear with the old name and author ",() =>{
        
    cy.contains(bookName).should("have.text", bookName);
    });

    
  });
  
describe('when the user wants to edit a book without its author',()=>{



    before(()=> {
        cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
        cy.get('.ant-btn-primary > .ng-star-inserted').click().
        get('#name').wait(200).click().type(bookName);

      
    })


    it("then the button cannot be selected",() =>{
        
     
      cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");
     
    });


});
  


   