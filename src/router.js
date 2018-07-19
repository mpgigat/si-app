import HomeTab from './components/tabs/Home'
import ProfileTab from './components/tabs/Profile'
import NewSale from './components/tabs/NewSale'
import SalerTab from './components/tabs/Saler'
import CategoriesTab from './components/tabs/Categories'
import Login from './components/stack/loginScreen'
import SaleDetail from './components/SaleDetail'
import NewSale from './components/tabs/NewSale'
import Register from './components/stack/registerScreen'
import Account from './components/stack/AcountScreen'




const router = {
  Home: HomeTab,
  Profile: ProfileTab,
  Categories: CategoriesTab,
  NewSale,
  Saler: SalerTab,
  NewSale,
  Login,
  Register,
  Account,
  SaleDetail
  
}
const config = {
  navigationOptions: {
    title: 'AppName'
  }
}

export {
  router,
  config
}
