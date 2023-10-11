import { useQuery } from "react-query"
import axios from "axios"
export const RqSuperHeroesPage = () => {

  const fetchRQuery = () => {
    return axios.get('http://localhost:4000/superheroes')
  }
  const {isLoading, data, isError, error, isFetching, refetch} = useQuery(
    'super-heroes',
     fetchRQuery,
     {
      // cacheTime default value of 5mins,
      //refetchOnMount : 'true' is the default value and if it is so, the query will refresh on mount if data is stale
      //staleTime: 0, default value
      // refetchOnMount: true,
      //refetchOnWindowFocus: true, this refetches updated data without havin the usser refreshing
      //refetchInterval: 2000, this refresh every 2s. This stops pulling data wen the window loses focus
      //refetchIntervalInBackground: true, this will continue to pull data even when the window loses focus
      enabled:  false,

     } 
     );
  
  if(isLoading || isFetching) {
    return <h1>Loading...</h1>
  }
  
  if (isError) {
  return <h2>{error.message}</h2>
  }

  return (
    <>
    <h1>Welcome to RQ Super Heroe's Page</h1>
    <button onClick={refetch} >Fetch Heroes</button>
    {
      data?.data.map(hero => {
        return <li key={hero.name}>{hero.name}</li>
      })
    }
    </>
  )
}
