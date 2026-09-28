import React from 'react'
import Header from './Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Footer'
import Loader from './Loader'
import Navigator from './Navigaotr'
import ScrollToTop from './Scroll'

const AppLayout = () => {
  const navigation = useNavigation();

  
    return (
      <>
     
        <ScrollToTop/>
        <Header />
        {navigation.state==='loading'?<Loader/>:<Outlet/>}
        <Navigator/>
        <Footer />
      </>
    )
  
}
export default AppLayout