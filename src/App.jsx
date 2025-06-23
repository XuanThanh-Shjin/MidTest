import React from 'react';
import Narbav from './components/Narbav';
import './App.css'; // Assuming you have some global styles
import Explore from './components/Explore';
import NewRelease from './components/NewRelease';
import DataNewRelease from './components/DataNewRelease';


function App() {


  return (
    <div>
          <Narbav />

    <Explore />

    <NewRelease />
    </div>
  );
} 

export default App