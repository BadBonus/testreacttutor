import React from 'react';
import Ticket from './Ticket';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <Ticket name={'Some Name'} />
     <Footer />
    </div>
  );
}

export default App;
