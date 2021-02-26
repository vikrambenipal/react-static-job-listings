import React from 'react';
import List from './components/List';
import Filter from './components/Filter';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Filter data={data}/>
      <List data={data}/>
    </div>
  );
}

export default App;
