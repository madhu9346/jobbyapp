import {FaHome, FaToolbox} from 'react-icons/fa'
import {IoLogOutSharp} from 'react-icons/io5'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const logoutClicked = () => {
    const {history} = props
    Cookies.remove('tokens')
    history.replace('/login')
  }

  return (
    <div className="main-header-container">
      <div className="large-devices-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="heder-website-logo"
            alt="website logo"
          />
        </Link>
        <div className="home-and-jobs-container">
          <Link to="/">
            <h1 className="nav-home-heading">Home</h1>
          </Link>
          <Link to="/">
            <h1 className="nav-jobs-heading">Jobs</h1>
          </Link>
        </div>
        <button
          type="button"
          className="logoutButton"
          onClick={logoutClicked()}
        >
          Logout
        </button>
      </div>
      <div className="small-devices-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="heder-website-logo-small"
          alt="website logo"
        />
        <div className="small-home-and-jobs-container">
          <Link to="/">
            <div className="nav-home-icon">
              <FaHome className="home-icon" />
            </div>
          </Link>
          <Link to="/">
            <div className="nav-jobs-icon">
              <FaToolbox className="job-icon" />
            </div>
          </Link>
          <div className="nav-logout-icon">
            <IoLogOutSharp className="logout-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default withRouter(Header)
