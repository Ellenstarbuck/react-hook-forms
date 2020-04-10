import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'
import { CssBaseline, FormControl, MenuItem, InputAdornment, Menu, InputLabel, 
  makeStyles, TextField, Input, FormHelperText, Button, Container, Typography } from '@material-ui/core'

const comicHooksForm = () => {

  const [ data, dataSet ] = useState({ name: '', writer: '', publisher: '', genre: '', image: '', synopsis: '', user: '' })


  


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/comics', 
        data, {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
      this.props.history.push(`/comics/${res.data._id}`)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    handleSubmit()
  }, [])

  
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className='paper'>
        <Typography component='h1' variant='h5'>
            Make a new comic
        </Typography>
        <form onSubmit={handleSubmit} className='formMaterial'>
          <TextField
            id="name"
            label="name"
            name="name"
            margin="normal"
            required
            fullWidth
            value={data.name}
            variant="outlined"
            color="secondary"
            onChange={event => dataSet(event.target.value)}
          />
          <TextField
            id="writer"
            label="writer"
            name="writer"
            margin="normal"
            required
            fullWidth
            value={data.writer}
            variant="outlined"
            color="secondary"
            onChange={event => dataSet(event.target.value)}
          />  
          <TextField
            id="publisher"
            label="publisher"
            name="publisher"
            margin="normal"
            required
            fullWidth
            value={data.publisher}
            variant="outlined"
            color="secondary"
            onChange={event => dataSet(event.target.value)}
          />   
          <TextField
            id="genre"
            label="genre"
            name="genre"
            margin="normal"
            required
            fullWidth
            value={data.genre}
            variant="outlined"
            color="secondary"
            onChange={event => dataSet(event.target.value)}
          />
          <TextField
            id="image"
            label="image"
            name="image"
            margin="normal"
            required
            fullWidth
            value={data.image}
            variant="outlined"
            color="secondary"
            onChange={event => dataSet(event.target.value)}
          />  
          <TextField
            id="synopsis"
            name='synopsis'
            label="synopsis"
            margin="normal"
            required
            fullWidth
            value={data.synopsis}
            variant="outlined"
            color="secondary"
            onChange={event => dataSet(event.target.value)}
          />   
          <TextField
            id="user"
            name='user'
            label="user"
            margin="normal"
            required
            fullWidth
            value={data.user}
            variant="outlined"
            color="secondary"
            onChange={event => dataSet(event.target.value)}
          />    
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
              
          >
            Submit
          </Button>



        </form>
      </div> 
      
    </Container>



  )
  
  



}

export default comicHooksForm 