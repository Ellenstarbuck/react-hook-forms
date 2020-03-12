import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'


class CommentCard extends React.Component{

  state = {
    data: {
      comments: ''
    } 

  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/comics/${comicId}/comments', 
        this.state.data, {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
      this.props.history.push(`/comics/${res.data._id}`)
    } catch (err) {
      console.log(err)
    }
  }



  render() {
    return (
      <section className="section">
        <div className="columns">
          <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter">
            <h2 className="title">New Comment</h2>
            <div className="field">
              <label className="label">Comment</label>
              <div className="control">
                <input 
                  className="input"
                  name="name"
                  required
                  placeholder="Name"
                  onChange={this.handleChange}
                  value={this.data.name}
                />
              </div>
            </div>
          </form>
        </div>
        
      </section>
    )
    
  }



}



  
    


  


export default CommentCard