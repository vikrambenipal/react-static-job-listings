import React from 'react';
import List from './components/List';
import data from './data.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <List data={data}/>
    </div>
  );
}

export default App;
