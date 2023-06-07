import React from 'react'
import { Header, Offers, Footer } from './containers';
import { Navbar, Offer, Article } from './components';

export default function App() {
  return (
    <div className='font-poppins'>
      <div>
        <Header />
      </div>
      <Offers />
      <Footer />
    </div>
  )
}
