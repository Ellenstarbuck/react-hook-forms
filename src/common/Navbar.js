import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../lib/Auth'

class Navbar extends React.Component {
  state = { navbarOpen: false }


  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  handleLogout = () => {
    Auth.logout()
    this.props.history.push('/')
  }


  render() {
    const { navbarOpen } = this.state 
    console.log(Auth.isAuthenticated())
    return (
      <nav className="navbar is-danger">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item"to="/">Comic Book Database</Link>
            <a className={`navbar-burger ${navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item"to="/comics">The Comics</Link>
              <nav className="navbar is-danger" role="navigation" aria-label="dropdown navigation">
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">Genre</div>
                  <div className="navbar-dropdown">
                    <Link className="navbar-item"to="/humour">Humour</Link>
                    <Link className="navbar-item"to="/science">Science Fiction/Fantasy</Link>
                    <Link className="navbar-item"to="/slice">Slice-of-life</Link>
                    <Link className="navbar-item"to="/superhero">Superhero</Link>
                    <Link className="navbar-item"to="/crime">Crime</Link>
                  </div>
                </div>
              </nav>
              {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}
              {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
              {Auth.isAuthenticated() && <Link className="navbar-item" to="/comics/new">Add a Comic</Link>}
              {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default withRouter(Navbar)








