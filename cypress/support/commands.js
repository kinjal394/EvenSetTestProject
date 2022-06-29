
import 'cypress-file-upload';
import CalculatorPage from '../e2e/PageObjectModel/CalculatorPage'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('QuadraticCalculation',(a,b,c)=>{
        const calObj=new CalculatorPage()
        let dis= b * b - 4 * a * c;
        let root1;
        let root2;
        if(dis==0){
            root1=root2=(-b)/(2*a);
            root1=`x=${root1.toFixed(5)}`
            root2=`x=${root2.toFixed(5)}`
        }else if(dis>0){
            root1=((-b)+Math.sqrt(dis))/(2*a);
            root2=((-b)-Math.sqrt(dis))/(2*a);
            root1=`x=${root1.toFixed(5)}`
            root2=`x=${root2.toFixed(5)}`
        }else{
            let real=(-b)/(2*a);
            root1=root2=Math.sqrt(-dis)/(2*a)
            root1=`x=${real}+${root1.toFixed(5)}i`
            root2=`x= ${real}-${root2.toFixed(5)}i`
        }

        calObj.verifyResultTest(root1,root2,dis)
})