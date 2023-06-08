import React from "react";
import { Header, Offers, Footer } from "./containers";
import { Navbar, Offer, Article } from "./components";

export default function App() {
  return (
    <div>
      <div className="font-poppins mx-auto">
        <div>
          <Header />
        </div>
        <Offers />
        <Footer />
      </div>
    </div>
  );
}
