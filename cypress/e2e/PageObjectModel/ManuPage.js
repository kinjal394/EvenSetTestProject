class ManuPage{
    visit(){
        cy.visit('https://www.antdv.com/')
        cy.get("[alt=Menu]").click()
    }

    dartThemes(){
        //default theme is the “dark” theme
        const field=cy.get("[id=components-menu-demo-theme]>section>div>button>span")
        field.should('be.visible')
        field.should('have.text','Dark')
        field.click()
       
    }

    lightThemes(){
        // I click the theme switch, the selected theme changes to “light
        const field=cy.get("[id=components-menu-demo-theme]>section>div>button>span")
        field.should('be.visible')
        field.should('have.text','Light')
    }

    navigationOne(){
        //default selected menu item is “Navigation One”
        const field=cy.get("#dddddd > li:nth-child(1) > div > span.ant-menu-title-content")
        field.should('be.visible')
        field.should('have.text','Navigation One')
    
    }

    navigationTwo(){
        //I click any other menu item (i.e “Navigation Two”, “Option 3”), that menu item is selected
        const field =cy.get("#dddddd > li:nth-child(2) > div > span.ant-menu-title-content")
        field.should('be.visible')
        field.should('have.text','Navigation Two')
        field.click()
        const field1=cy.get("#dddddd > li:nth-child(2) > ul.ant-menu-sub>li:nth-child(2)>span")
        field1.should('have.text','Option 6')
    }

    navigationThree(){
         //“Navigation Three” submenu is open by default
         const field=cy.get('[id=components-menu-demo-switch-mode]>section>div>ul>li:nth-child(3)>div>span.ant-menu-title-content')
         field.should('be.visible')
         field.should('have.text','Navigation Three')
         const field1=cy.get("[id=components-menu-demo-switch-mode]>section>div>ul>li:nth-child(3)>ul>li:nth-child(1)>span")
         field1.should('have.text','Option 3')
    }

    closeNavigationThree(){
        const field=cy.get('[id=components-menu-demo-switch-mode]>section>div>ul>li:nth-child(3)>div>span.ant-menu-title-content')
        field.should('be.visible')
        field.should('have.text','Navigation Three')
        field.click()
        const field1=cy.get("[id=components-menu-demo-switch-mode]>section>div>ul>li:nth-child(3)>ul")
        field1.should('not.be.visible')
    }

    NavigationFour(){
        //click on Navigation 4 -- open Navigation 4
        const field=cy.get('[id=components-menu-demo-switch-mode]>section>div>ul>li:nth-child(4)>div>span.ant-menu-title-content')
        field.should('be.visible')
        field.should('have.text','Navigation Four')
        field.click()
        const field1=cy.get("[id=components-menu-demo-switch-mode]>section>div>ul>li:nth-child(4)>ul>li:nth-child(1)>span")
        field1.should('have.text','Option 7')
    }

    closeNavigationFour(){
        //“Navigation Four” submenu is close by default
        const field=cy.get("[id=components-menu-demo-switch-mode]>section>div>ul>li:nth-child(4)>div>span.ant-menu-title-content")
        field.should('be.visible')
        field.should('have.text','Navigation Four')
        const field1=cy.get("[id=components-menu-demo-switch-mode]>section>div>ul>li:nth-child(4)>ul")
        field1.should('not.be.visible')
    }
}

export default ManuPage