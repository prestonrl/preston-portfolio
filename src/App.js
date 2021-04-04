import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
