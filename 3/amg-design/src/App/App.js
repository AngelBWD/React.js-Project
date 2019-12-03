
import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import ProjectList from '../Projects/Projects';
import Main from './Main/Main';



function App() {
  return (
    <div className="App">
      <Navigation />
        <div>
            <Main title = "Hello!"/>
            <ProjectList />
        </div>
        <Footer/>

    </div>

  );
}

export default App;