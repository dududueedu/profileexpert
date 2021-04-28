import './style.css';
import React from 'react';

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">
        Bem vindo!
      </h1>

      <form className="form-group">
        <div className="input-group">
          <input type="text" className="form-control" required/>
        </div>
      </form>
    </div>
  );
}

export default App;