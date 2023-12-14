import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: ''}

  clickButton = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response.ok)
  }

  changeUserName = event => {
    this.setState({userName: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {userName, password} = this.state
    return (
      <div className="loginForm-main-container">
        <div className="loginForm-sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="input-website-logo"
            alt="website logo"
          />
          <form className="input-container" onSubmit={this.clickButton}>
            <label htmlFor="username" className="loginForm-userName">
              USERNAME
            </label>
            <br />
            <input
              id="username"
              type="text"
              value={userName}
              className="login-username"
              onChange={this.changeUserName}
            />
            <br />
            <label className="loginForm-password" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              className="login-password"
              onChange={this.changePassword}
            />
            <br />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
