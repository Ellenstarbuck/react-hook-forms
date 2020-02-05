import React from 'react'

const ComicForm = ({ data, handleChange, handleSubmit }) => {
  
  return (
    <div className="columns">
      <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter">
        <h2 className="title">New Comic</h2>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input 
              className="input"
              name="name"
              required
              placeholder="Name"
              onChange={handleChange}
              value={data.name}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input 
              className="input"
              name="image"
              required
              placeholder="Image URL"
              onChange={handleChange}
              value={data.image}
            />
          </div>
        </div>
        <div className="box">
        <div className="field">
          <label className="label">Writer</label>
          <div className="control">
            <input 
              className="input"
              name="writer"
              required
              placeholder="Writer"
              onChange={handleChange}
              value={data.writer}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Publisher</label>
          <div className="control">
            <input 
              className="input"
              name="publisher"
              required
              placeholder="Publisher"
              onChange={handleChange}
              value={data.publisher}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Genre - Humour, Science Fiction/Fantasy, Superhero, Slice-of-life or Crime?</label>
          <div className="control">
            <input 
              className="input"
              name="genre"
              required
              placeholder="Humour, Science Fiction/Fantasy, Superhero, Slice-of-life or Crime?"
              onChange={handleChange}
              value={data.genre}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Synopsis</label>
          <div className="control">
            <input 
              className="input"
              name="synopsis"
              required
              placeholder="Synopsis"
              onChange={handleChange}
              value={data.synopsis}
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-fullwidth is-warning">
            Add my comic to the collection!
          </button>
        </div>
        </div>
      </form>  
    </div>


  )


}
  

export default ComicForm