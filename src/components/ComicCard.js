import React from 'react'
import { Link } from 'react-router-dom'

const ComicCard = ({ name, writer, publisher, genre, image, synopsis, _id }) => (

  <div key={_id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/comics/${_id}`}>
      <div className="card">
        <div className="card-content">
          <h4 className="card-header-title title is-5">{name}</h4>
          <div className="card-image">
            <figure className="image"><img
              src={image} alt={name}/></figure>
          </div>
          <div className="indexHide">
            <hr />
            <h5 className="title is-6">Writer: {writer}</h5>
            <h5 className="title is-6">Publisher: {publisher}</h5>
            <h5 className="title is-6">Genre: {genre}</h5>  
            <h5 className="title is-6">{synopsis}</h5>
          </div>
        </div>
      </div>
    </Link>
  </div>


)

export default ComicCard