import './style.css';
import React, { useState } from 'react';
import gitHub from './image/img-github.jpg'

function App() {
  const [search, setSearch] = useState('') //control estado
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleOnchange = (ev) => { //onchange ocorre quando o valor de um elemento é alterado.
    console.log(ev.target.value)
    setSearch(ev.target.value)
  } 

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">
        bem vindo!
      </h1>

      <form className="form-group" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Digite seu nome de usuário" 
              value={search} required onChange={handleOnchange}/>
          
          <button className="btn btn-success" type="submit">
            Seach
          </button> 
        </div>          
      </form>

      <div className="py-4">
        <img src={gitHub} className="responsive rounded-circle" alt="img-git" height="182px"/>
      </div>
    </div>
  );
}

export default App;