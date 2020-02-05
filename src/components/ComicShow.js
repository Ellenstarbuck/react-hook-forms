import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'
import { Link } from 'react-router-dom'

class Comicshow extends React.Component{
  state = {
    comic: null
  }

  async componentDidMount() {
    const comicId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/comics/${comicId}`)
      console.log(res.data)
      this.setState({ comic: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleDelete = async() => {
    const comicId = this.props.match.params.id 
    try {
      await axios.delete(`/api/comics/${comicId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/comics')
    } catch (err) {
      console.log(err.response)
    }
  }


  isOwner = () => {
    console.log('make comic', Auth.getPayLoad().sub)
    console.log('current user', this.state.comic.user)
    
    return Auth.getPayLoad().sub === this.state.comic.user
  }

  render() {
    const { comic } = this.state
    if (!comic) return null
    return (
      <section className="section">
        <div className="container">
          <div className="colums">
            <div className="displayNice">
              <div className="column is-one-third">
                <figure className="image">
                  <img src={comic.image} alt={comic.name} />
                </figure>
              </div>
              <div className="column is-one-third">
                <h2 className="title">{comic.name}</h2>
                <h4 className="title-is-4">Writer</h4>
                <p>{comic.writer}</p>
                <br />
                <h4 className="title-is-4">Publisher</h4>
                <p>{comic.publisher}</p>
                <br />
                <h4 className="title-is-4">Genre</h4>
                <p>{comic.genre}</p>
                <br />
                <h4 className="title-is-4">Synopsis</h4>
                <p>{comic.synopsis}</p>
                <br />
                {this.isOwner() && 
                <>
                  <Link to={`/comics/${comic._id}/edit`} className="button is-warning">Edit Comic</Link>
                  <hr />
                  <button onClick={this.handleDelete} className="button is-danger">Delete Comic</button>
                </>
                }
                
              </div>
        
            </div>
          </div>
        </div>

      </section>
    )
  }


}

  

  










export default Comicshow