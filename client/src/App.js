import React from 'react';
import './App.scss';
import ApiCall from './components/ApiCall'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h2> Hello World</h2>
          <ApiCall />
      </header>
      <body>
        <ApiCall />
      </body>
    </div>
  );
}

export default App;
