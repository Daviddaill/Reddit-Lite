import React from 'react';
import './App.css';
import Header from '../component/header/Header';
import Nav from '../component/nav/Nav'
import Footer from '../component/footer/Footer';
import Content from '../component/content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
