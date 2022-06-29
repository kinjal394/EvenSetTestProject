class CalculatorPage{
    
    visit(){
        cy.visit("https://www.calculatorsoup.com/")
        cy.get("[class=homeRow]> div>ul>li:nth-child(3)").should('be.visible').contains('Algebra').click()
        cy.get("[id=contentBlock]>div.indexPage>p:nth-child(45)>a").should('be.visible').should('have.text','Quadratic Formula Calculator').click()

    }

    blankValue(){
        cy.get('[id=a]').should('be.empty')
        cy.get('[id=b]').should('be.empty')
        cy.get('[id=c]').should('be.empty')
        this.CalculatorButton()
    }

    spaceValue(){
        cy.get('[id=a]').type(' ').should('have.value', ' ')
        cy.get('[id=b]').type(' ').should('have.value', ' ')
        cy.get('[id=c]').type(' ').should('have.value', ' ')
        this.CalculatorButton()
        cy.get("[id=answer]>div.calc_error").should('have.text','a cannot be 0')
        return this
    }

    fillA(value){
        const field=cy.get("[id=a]")
        if(value>0){
            field.clear()
            field.type(value)
            field.invoke('val')
            field.should(value => {
                expect(Number.isNaN(+value), 'input should be a number').to.eq(false)    // passes
            })
        }else{
            field.should('not.be.value', 0)
        }
        return this
        
    }

    fillB(value){
        const field=cy.get("[id=b]")
        field.clear()
        field.type(value)
        field.invoke('val')
        field .should(value => {
            expect(Number.isNaN(+value), 'input should be a number').to.eq(false)    // passes
        })
        return this
    }

    fillC(value){
        const field=cy.get("[id=c]")
        field.clear()
        field.type(value)
        field.invoke('val')
        field .should(value => {
            expect(Number.isNaN(+value), 'input should be a number').to.eq(false)    // passes
        })
        return this
    }


    CalculatorButton(){
       const button=cy.get("[id=calculateButton]")
       button.should('be.visible')
       button.should('have.value','Calculate')
       button.click()
    }

    verifyResult(){
        const result= cy.get("[id=answer]>div.calc_error")
        result.should('be.visible')
        result.should('have.text','a cannot be 0')
    }

    verifyResultTest(value1,value2,dis){
        if(dis==0){ //1,2,1

        const result= cy.get("[id=MathJax-Span-15]")
        result.should('not.have.text',value1)

        }else if(dis>0){ //1,3,1
            const result= cy.get("[id=MathJax-Span-30]")
            result.should('not.have.text',value1)

            const result1= cy.get("[id=MathJax-Span-30]")
            result1.should('not.have.text',value2)
        }else{ //1,2,3
          
        const result= cy.get("[id=MathJax-Span-27]")
        result.should('not.have.text',value1)

        const result1= cy.get("[id=MathJax-Span-36]")
        result1.should('not.have.text',value2)
        }
        
    }

}

export default CalculatorPage