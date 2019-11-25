import React from 'react';
import './App.scss';
import ApiCall from './components/ApiCall'
function App() {
  return (
    <div data-testid="app_test_id" className="App">
      <header className="App-header">
          <ApiCall />
      </header>
    </div>
  );
}

export default App;
