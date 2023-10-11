import { BrowserRouter, Routes,  Route, Link } from 'react-router-dom'
import './App.css'
import { SuperHerosPage } from './components/SuperHerosPage'
import { RqSuperHeroesPage } from './components/RqSuperHeroesPage'
import {HomePage} from './components/HomePage'
import { QueryClientProvider, QueryClient } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

function App() {
 
  const queryClient = new QueryClient();

  return (
   <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <h1>Hello world</h1>
        <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/super-heroes'>Super Heroes</Link></li>
          <li><Link to='/rq-super-heroes'>RQ Super Heroes</Link></li>
        </ul>
        </nav>
        <div>
          <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/super-heroes' element={<SuperHerosPage/>}/>
          <Route path='/rq-super-heroes' element={<RqSuperHeroesPage/>}/>
          
          </Routes>
        </div>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
        </QueryClientProvider>
  )
}

export default App;
