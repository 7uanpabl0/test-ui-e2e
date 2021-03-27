
describe('When the user wants to delete a book', () =>{
    let bookname = "";
    let bookAuthor = "";
    before(()=>{
        cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
        cy.get(':nth-child(1) > :nth-child(4) > .ant-btn').click();

        cy.get('#name')
          .invoke('val') 
          .then(text => {
                bookname = text;
                cy.log(bookname)
        });

        cy.get('#author')
        .invoke('val')  
        .then(text => {
            bookAuthor = text;
            cy.log(bookAuthor);
      });
      cy.get('.ant-modal-footer > [nztype="default"]').click();
      cy.get(':nth-child(1) > .ant-table-selection-column > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click().wait(2);
      cy.get('[nztype="default"]').wait(200).click().wait(2);
      cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
    })
    it("Then the book not should be listed with the right name and author", ()=>{
        
        
           cy.contains(bookAuthor).should('not.exist');
           
           
        
        
    });

    after(()=>{
       
        cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
        cy.get('.ant-btn-primary > .ng-star-inserted').click();
        cy.get('#name').wait(200).click().type(bookname);
        cy.get('#author').wait(200).click().type(bookAuthor);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
    })



});
describe('when the user wants to delete a book without selecting it ',()=>{



    before(()=> {
        cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
    
    })


    it("then the button cannot be selected",() =>{
        
     
        cy.get('[nztype="default"]').should("be.disabled");
     

    });


  });




