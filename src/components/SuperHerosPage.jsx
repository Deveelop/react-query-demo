import { useState, useEffect } from "react"
import axios from "axios"

export const SuperHerosPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
  axios.get('http://localhost:4000/superheroes').then((res) => {
    setData(res.data)
    setIsLoading(false)

  }).catch((err) => {
    setError(err.message)
    setIsLoading(false)
  })
 
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  
  if(error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h1>Welcome to the traditional Super Heros Page</h1> 
      {
        data.map((hero) => {
          return <li key={hero.name}>{hero.name}</li>
        })
      }
    </>
  )
}

