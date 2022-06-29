
import MenuPage from '../e2e/PageObjectModel/ManuPage'

describe('Menu Themes', () => {

  const menuObj=new MenuPage()

  before(function(){
    menuObj.visit()
  })


  it('Scenario 1', () => {
    menuObj.dartThemes()
    menuObj.lightThemes()
  })

  it('Scenario 2', () => {
   menuObj.navigationOne()
   menuObj.navigationTwo()
  })

  it('Scenario 3',function(){
   menuObj.navigationThree()
   menuObj.closeNavigationFour()
   menuObj.closeNavigationThree()
   menuObj.NavigationFour()
  })

  
})