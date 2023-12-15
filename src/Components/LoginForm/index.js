import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {userNameInput: '', passwordInput: '', errorMsg: ''}

  onSuccessLogin = jwtToken => {
    Cookies.set('tokens', jwtToken, {expires: 30})
    const {history} = this.props
    history.push('/')
  }

  onFailureLogin = errorMessage => {
    this.setState({errorMsg: errorMessage})
  }

  clickButton = async event => {
    event.preventDefault()
    const {userNameInput, passwordInput} = this.state
    const userDetails = {username: userNameInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  changeUserName = event => {
    this.setState({userNameInput: event.target.value})
  }

  changePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  render() {
    const {userNameInput, passwordInput, errorMsg} = this.state
    const token = Cookies.get('tokens')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="loginForm-main-container">
        <div className="loginForm-sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="input-website-logo"
            alt="website logo"
          />
          <form className="input-container" onSubmit={this.clickButton}>
            <label htmlFor="usernameOf" className="loginForm-userName">
              USERNAME
            </label>
            <br />
            <input
              id="usernameOf"
              type="text"
              value={userNameInput}
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
              value={passwordInput}
              className="login-password"
              onChange={this.changePassword}
            />
            <br />
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="login-para">{errorMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
