import {Switch, Route} from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import './App.css'

const App = () => (
  <Switch>
    <Route to="/login" component={LoginForm} />
  </Switch>
)

export default App
