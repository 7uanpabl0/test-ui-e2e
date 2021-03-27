
const bookname ="Justice league";
const authorname="Batman";

describe('when the user wants to register a book',()=>{



    before(()=> {
        cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
        cy.get('.ant-btn-primary > .ng-star-inserted').click().
        get('#name').wait(200).click().type(bookname).wait(2).
        get('#author').wait(200).click().type(authorname);
        cy.get('.ant-modal-footer > .ant-btn-primary').wait(2).click();

        cy.get('.ant-select-arrow > .anticon > svg').click();
        cy.get('[title="50 / page"] > .ant-select-item-option-content').click();

      
    })


    it("then the book should be listed with the right name and author",() =>{
        
    cy.contains(bookname).should("have.text", bookname);
    });


  });

  describe('when the user wants to save a book without its name',()=>{



    before(()=> {
        cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
        cy.get('.ant-btn-primary > .ng-star-inserted').click().
        get('#author').wait(200).click().type(authorname);

      
    })


    it("then the button cannot be selected",() =>{
        
     
      cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");
     

    });


  });

  describe('when the user wants to save a book without its author',()=>{



    before(()=> {
        cy.visit("https://books-icesi-munoz-front.herokuapp.com/dashboard");
        cy.get('.ant-btn-primary > .ng-star-inserted').click().
        get('#name').wait(200).click().type(bookname);

      
    })


    it("then the button cannot be selected",() =>{
        
     
      cy.get('.ant-modal-footer > .ant-btn-primary').should("be.disabled");
     

    });


  });



   