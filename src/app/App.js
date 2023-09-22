import React, {useState} from 'react';
import './App.css'
import Header from '../component/header/Header';
import Nav from '../component/nav/Nav'
import Footer from '../component/footer/Footer';
import Content from '../component/content/Content';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
	const [keys, setKeys] = useState('');
	const [navVisible, setNavVisible] = useState(false);

  return (
    <div className="App">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        keys={keys}
        setKeys={setKeys}
        navVisible={navVisible}
        setNavVisible={setNavVisible}
      />
      <div className='row'>
      <Nav />
      <Content />
      </div> 
      <Footer />
    </div>
  );
}

export default App;
