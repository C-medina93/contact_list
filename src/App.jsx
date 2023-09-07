import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState([]);
  const [hash, setHash] = useState(window.location.hash.slice(1)*1);
  useEffect(()=>{
  const fetchData = async ()=> {
  const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
  const json = await response.json();
  setCount(json);
}
    fetchData();
  }, []);

  useEffect(()=>{
    window.addEventListener( 'hashchange', ()=> {
      setHash(window.location.hash.slice(1)*1);
    })
  }, []);

  const selected = count.find( count => hash === count.id);
  console.log(selected)

  return (
    <>
      <h1>Contact list: {count.length}</h1>
      {selected ?(<p> {selected.name} <br></br> {selected.username} <br></br> {selected.email} <br></br> {selected.phone} <br></br> {selected.website} </p>): null}
      
      <ul>
        {
          count.map( count =>{
            return(
              <li key = {count.id}> <a href= {`#${count.id}`}>{count.name}</a></li>
            )
          })
        }
      </ul>

    </>
  )
}

export default App
