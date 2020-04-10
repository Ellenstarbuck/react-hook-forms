import React from 'react'
import axios from 'axios'
import ComicCard from './ComicCard'

class ComicIndex extends React.Component {
  state = { comics: [] }


  async componentDidMount() {
    try {
      const res = await axios.get('/api/comics')
      this.setState({ comics: res.data }) 
    } catch (err) {
      console.log(err)
    } 
  }
  render() {
    console.log(this.state.comics)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.comics.map(comic => <ComicCard key={comic._id} {...comic}/>)}
          </div>
        </div>
      </section>
    )
    
  }




}







export default ComicIndex