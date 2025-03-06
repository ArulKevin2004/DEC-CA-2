import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery } from '@tanstack/react-query'

const API_KEY = "ReNRG0iB6wtyruLpPQehh4pccSDoHuxR"

function App() {
  const [count, setCount] = useState(0)
  const [query, setQuery] = useState("")
  const [inputQuery,setInputQuery] = useState("")

  const { data,isLoading,error } = useQuery({
    queryKey: ['recipies'],
    queryFn: () => getquery(query),
    enabled: !!query
  })

  if(error){
    alert("Somethings wrong!Try again")
  }

  return (
    <>
      <input type="text" value={query} onChange={(e) => }/>
      {JSON.stringify(data)}
    </>
  )
}

const getquery = async() => {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "ReNRG0iB6wtyruLpPQehh4pccSDoHuxR");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  fetch(`https://api.apilayer.com/spoonacular/recipes/complexSearch?query=${query}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

export default App
