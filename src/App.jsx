import React from 'react'
import { Header, Offers, Footer } from './containers';
import { Navbar, Offer, Article } from './components';

export default function App() {
  return (
    <div className='App'>
      <div className="">
        <Navbar />
        <Header />
      </div>
      <Offers />
      <Footer />
    </div>
  )
}
