import React from 'react'
import axios from 'axios'
import ComicCard from '../components/ComicCard'


class Sliceoflife extends React.Component {

  state = { 
    comics: []
  }


  async componentDidMount() {
    try {
      const res = await axios.get('/api/comics') 
      console.log(res.data)
      const filteredRes = res.data.filter(comic => {
        if (comic.genre === 'Slice-of-life') {
          return comic
        }
      })
      this.setState({ comics: filteredRes }) 
    } catch (err) {
      console.log(err)
    } 
  }
  

  render() {
    console.log('i am returning...', this.state.comics)
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

export default Sliceoflife

