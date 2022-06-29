
import CalculatorPage from '../e2e/PageObjectModel/CalculatorPage'


describe('Calculator TestSuite',function(){

    before(function(){
        //runs once before all tests in the block
        calObj.visit()
    })

    const calObj=new CalculatorPage()
    it('Scenario 1',function(){
        calObj.blankValue()
    })

    it('sScenario 2',function(){
        calObj.spaceValue()
    })

     //b2−4ac=0
     it('Scenario 3',function(){ //dis==0
        
        let a=1,b=2,c=1
        calObj.fillA(a)
        calObj.fillB(b)
        calObj.fillC(c)
        calObj.CalculatorButton()
        cy.title().should('be.equal','Quadratic Formula Calculator')
        cy.QuadraticCalculation(a,b,c)
       
    })

    // b2−4ac>0
    it('Scenario 4',function(){ //dis>0
        
        let a=1,b=3,c=1
        calObj.fillA(a)
        calObj.fillB(b)
        calObj.fillC(c)
        calObj.CalculatorButton()
        cy.title().should('be.equal','Quadratic Formula Calculator')
        cy.QuadraticCalculation(a,b,c)
       
    })

    //b2−4ac<0
    it('Scenario 5',function(){//dis<0
        
        let a=1,b=2,c=3
        calObj.fillA(a)
        calObj.fillB(b)
        calObj.fillC(c)
        calObj.CalculatorButton()
        cy.title().should('be.equal','Quadratic Formula Calculator')
        cy.QuadraticCalculation(a,b,c)
       
    })
    

})