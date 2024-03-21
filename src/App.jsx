import { useEffect } from 'react';
import { Navbar } from './components/navbar/Navbar'
import Herosec from './components/hero/Herosec'
import Productslist from './components/prodcut/Productslist'
import { Bestproduct } from './components/bestproduct/Bestproduct';
import { Winter } from './components/winter/Winter';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Getform from './components/getintouch/Getform';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, [])

  return (
    <>
      <Navbar />
      <Herosec />
      <Productslist />
      <Bestproduct />
      <Winter />
      <Getform />
      <div className='mt-14'>
        <Productslist />
      </div>
      <Testimonial/>
      <Footer/>


    </>
  )
}

export default App