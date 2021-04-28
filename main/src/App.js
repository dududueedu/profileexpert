import './style.css';
import React from 'react';
import gitHub from './image/img-github.jpg'

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">
        Bem vindo!
      </h1>

      <form className="form-group">
        <div className="input-group">
          <input type="text" className="form-control" required/>
          <span className="input-group-btn">
            <button className="btn btn-success" type="submit">
              Seach
            </button>
          </span> 
        </div>          
      </form>

      <div className="py-5">
        <img src={gitHub} className="responsive rounded-circle" alt="img-git" height="182px"/>
      </div>
    </div>
  );
}

export default App;