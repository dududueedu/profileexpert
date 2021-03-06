import './style.css';
import React, { useState } from 'react';
import gitHub from './image/img-github.jpg'

function App() {
  const [search, setSearch] = useState('') //control state
  const [userName, setUserName] = useState() //control state
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.github.com/users/${search}`) //function request HTTP
      .then(response => response.json())
      .then(userResponse => setUserName(userResponse))
  }

  const handleOnchange = (ev) => { //onchange ocorre quando o valor de um elemento é alterado.
    console.log(ev.target.value)
    setSearch(ev.target.value)
  } 

  return (
    <div className="container text-center">
      <h2 className="py-5 text-uppercase">
        bem vindo ao gitHub profile!
      </h2>

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
        {!userName && (
          <img src={gitHub} className="responsive rounded-circle" alt="img-git" height="182px"/>
        )}
        
        {userName && (
          <div>
            <img src={userName.avatar_url} className="responsive rounded-circle" alt="img-git" height="182px"/>
            <p className="info-pro"> Informações: </p>
            <h3> 
              <a href={userName.html_url} target="_new"> {userName.name} </a>
            </h3>
            <span className="text-info"> {userName.bio} </span>
            <p className="py-3">
              <a href={userName.blog} target="_new" className="text-info"> {userName.blog} </a>
            </p> 
            <span className="text-info"> {userName.location} </span>
        </div>
        )}
      </div>  
    </div>
  );
}

export default App;