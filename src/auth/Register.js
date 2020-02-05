import React from 'react'
import axios from 'axios'

class Register extends React.Component{

  state = {

    data: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    errors: {}
  }
  


  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log('submitting', this.state.data)
    try {
      await axios.post('/api/register', this.state.data)
      this.props.history.push('/login')  
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }


  render() {
    return (
      <section className="section">
        <section className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} 
              className="column is-half is-offset-one-quarter">
              <h2 className="title has-text-centered">Register</h2>
              <div className="field">
                <div className="label">Username</div>
                <div className="control">
                  <input className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                    placeholder="Username"
                    required
                    name="username"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
              </div>
              <div className="field">
                <div className="label">Email</div>
                <div className="control">
                  <input className={`input ${this.state.errors.email ? 'is-danger' : ''}`}
                    placeholder="Email"
                    name="email"
                    required
                    onChange={this.handleChange}
                  />    
                </div>
                {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
              </div>
              <div className="field">
                <div className="label">Password</div>
                <div className="control">
                  <input className={`input ${this.state.errors.password ? 'is-danger' : ''}`}
                    placeholder="Password"
                    type="password"
                    required
                    name="password"
                    onChange={this.handleChange}
                  />    
                </div>
                {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
              </div>
              <div className="field">
                <div className="label">Password Confirmation</div>
                <div className="control">
                  <input className={`input ${this.state.errors.passwordConfirmation ? 'is-danger' : ''}`}
                    placeholder="Password Confirmation"
                    type="password"
                    required
                    name="passwordConfirmation"
                    onChange={this.handleChange}
                  />    
                </div>
                {this.state.errors.passwordConfirmation && <small className="help is-danger">{this.state.errors.passwordConfirmation}</small>}
              </div>
              <button type="submit" className="button is fullwidth is-warning">Register Me!</button>
            </form>
          </div>
        </section>
      </section>
    )
  }



}

export default Register