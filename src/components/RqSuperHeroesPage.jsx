import { useQuery } from "react-query"
import axios from "axios"
export const RqSuperHeroesPage = () => {
  const fetchRQuery = () => {
    return axios.get('http://localhost:4000/superheroes')
  }
  const {isLoading, data} = useQuery('super-heroes', fetchRQuery );

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
    <div>Welcome to RQ Super Heroe's Page</div>
    {
      data?.data.map(hero => {
        return <li key={hero.name}>{hero.name}</li>
      })
    }
    </>
  )
}
