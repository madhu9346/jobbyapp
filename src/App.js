import {Switch, Route} from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import Home from './Components/Home'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
  </Switch>
)

export default App
