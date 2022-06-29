
import UploadImagePage from '../e2e/PageObjectModel/UploadImagePage'

describe('Test Suite', () => {

  const upObj=new UploadImagePage()


  it('Scenario 1',function(){
    upObj.visit()
    upObj.uploadtxtFile("retest.txt")
    upObj.errorMsg("Sorry, you can't upload that type of file.")
  })

  it('Scenario 2', () => {
    upObj.visit()
    upObj.uploadvalidImage("download.jpg")
  })

  it('Scenario 3', () => {
    upObj.visit()
    upObj.uploadvalidImage("download.jpg")
    upObj.postTitle('Tiny,blurry picture')
    upObj.imageDescription('Tiny, blurry pictures find the limits of computer image recognition')
  })

  it('Scenario 4', () => {
    upObj.visit()
    upObj.uploadvalidImage("download.jpg")
    upObj.postTitle('Tiny,blurry picture')
    upObj.imageDescription('Tiny, blurry pictures find the limits of computer image recognition')
  })


  it('Scenario 5', () => {
    upObj.visit()
    upObj.uploadvalidImage("download.jpg")
    upObj.postTitle('Tiny,blurry picture')
    upObj.imageDescription('Tiny, blurry pictures find the limits of computer image recognition',2)
    upObj.addMoreButton()
    upObj.uploadvalidImage("download.jpg")
    upObj.imageDescription('down hill image recognition',3)

  })
})