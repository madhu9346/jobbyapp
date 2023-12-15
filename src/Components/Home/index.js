import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('tokens')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="home-Container">
      <Header />
      <h1 className="home-heading">Find The Job Thats Fits Your Life</h1>
      <p className="home-paragraph">
        Millions of peoples are searching jobs, salary,information,company
        reviews. Find the job that fits your abilities and potential
      </p>
      <Link to="/">
        <button type="button" className="login-button">
          Find Jobs
        </button>
      </Link>
    </div>
  )
}
export default Home
