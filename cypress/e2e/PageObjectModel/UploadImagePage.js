class UploadImagePage{
    visit(){
        cy.visit('https://imgur.com/')
        cy.get('[class=newPostLabel]').should('be.visible').should('have.text','New post').click()
    }

    uploadtxtFile(value){
        const field= cy.get("input[type=file]")
        field.attachFile(value)
    }

    errorMsg(value){
        const field1=cy.get("[class=UploadError-text]")
        field1.should("have.text",value)
    }

    uploadvalidImage(value){
        const field=cy.get("input[type=file]")
        field.attachFile(value)
    }

    postTitle(value){
        const field=cy.get('[class=UploadPost-postTitle]>span')
        field.should('be.visible')
        field.type(value)
    }

    
    addMoreButton(){
        const field=cy.get('[class=upload-add]')
        field.should('be.visible')
        field.click()
    }

    imageDescription(value,i){
        const field=cy.get('[class=UploadPost-files]>div:nth-child('+ i +')>div:nth-child(2)>div.ImageDescription-editable')
        field.should('be.visible')
        field.type(value)
    }
}

export default UploadImagePage