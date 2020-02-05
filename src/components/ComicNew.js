import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'
import ComicForm from './ComicForm'

class ComicNew extends React.Component{

  state = {
    data: {
      name: '',
      writer: '',
      publisher: '',
      genre: '',
      image: '',
      synopsis: '',
      user: ''
    } 

  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/comics', 
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
        <div className="container">
          <ComicForm data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
    
  }



}



  
    


  


export default ComicNew