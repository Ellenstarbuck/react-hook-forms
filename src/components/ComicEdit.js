import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'
import ComicForm from './ComicForm'

class ComicEdit extends React.Component{

  state = {
    data: {
      name: '',
      writer: '',
      publisher: '',
      genre: '',
      image: '',
      synopsis: ''
    } 

  }

  async componentDidMount() {
    const comicId = this.props.match.params.id
    console.log(comicId)
    try {
      const res = await axios.put(`/api/comics${comicId}`)
      this.setState({ data: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    console.log(data)
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const comicId = this.props.match.params.id
    console.log(comicId)
    try {
      const { data } = await axios.post(`/api/comics${comicId}`, 
        this.state.data, {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
      this.props.history.push(`/comics/${data._id}`)
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



  
    


  


export default ComicEdit