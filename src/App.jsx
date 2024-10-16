import React, { useEffect } from 'react'
import Header from './components/header-footer/Header'
import Routing from './utils/Routing'
import Footer from './components/header-footer/Footer'


const App = () => {
  // useEffect(() => {
  //   document.addEventListener('contextmenu', (event) => {
  //     event.preventDefault(); // Disable right-click
  //   });
  // }, []);
  return (
    <div className='bg-[#fffef6]'>
      <Header />
      <Routing />
      <Footer />
    </div>
  )
}

export default App