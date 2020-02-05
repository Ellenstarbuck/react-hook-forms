import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import 'bulma' 
import './styles/main.scss'
import Home from './components/Home'
import ComicIndex from './components/ComicIndex'
import Comicshow from './components/ComicShow'
import Register from './auth/Register'
import Login from './auth/Login'
import Humour from './genre/Humour'
import Science from './genre/Science'
import Sliceoflife from './genre/Sliceoflife'
import Superhero from './genre/Superhero'
import Crime from './genre/Crime'
import ComicNew from './components/ComicNew'
import ComicEdit from './components/ComicEdit'
import Navbar from './common/Navbar'
import SecureRoute from './common/SecureRoute'




const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />

      <Switch>
        <Route exact path="/"component={Home}/>
        <SecureRoute path="/comics/:id/edit"component={ComicEdit}/>
        <SecureRoute path="/comics/new"component={ComicNew}/>
        <Route path="/comics/:id"component={Comicshow}/>
        <Route path="/comics"component={ComicIndex}/>
        <Route path="/register"component={Register}/>
        <Route path="/login"component={Login}/>
        <Route path="/humour"component={Humour}/>
        <Route path="/science"component={Science}/>
        <Route path="/slice"component={Sliceoflife}/>
        <Route path="/superhero"component={Superhero}/>
        <Route path="/crime"component={Crime}/>
      </Switch>

    </main>
  </BrowserRouter>
  
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)