import React from 'react';
import './App.css';
import ContactCard from "./components/ContactCard";
import Header from './components/Header';
import certificate from "./pics/scert.jpg";
import examcard from "./pics/exam-card.png";
import identitycard from "./pics/Bgimahood_Logo.png";
function App() {
  return (
    <div className="enclos">
      <Header />
     
          <div className="bgima">
            
            <ContactCard 
              imgUrl={identitycard}
              alterna ="Isaac_Pic"
              Title="LOGOS"
              price="20K"
              notes="Get yourself an attractive customised logo for your Company or Business in a beautiful and pleasant format!"
            />
            <ContactCard 
              imgUrl={certificate}
              alterna ="Isaac_Pic"
              Title="Wedding Cards"
              price="10K-50K"
              notes="Reach us to get a wedding card that suites your perfection and attract more crowd!"
            />
            <ContactCard 
              imgUrl={examcard}
              alterna ="Isaac_Pic"
              Title="Identity Cards"
              price="10K"
              notes="We do amazing plastic and metalic identity cards at lowest rates. Customers in need of paper IDs are also welcome!"
            />
          </div>
    </div>
    
  );
}

export default App;
