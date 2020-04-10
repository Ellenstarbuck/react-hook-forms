import React, { useState, useEffect } from 'react'
import { Paper, Grid, Typography, TextField } from '@material-ui/core'
import axios from 'axios'




const comicHooks = () => {
  const [comics, setComic] = useState([])
  const [errors, setErrors] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/comics')
      const filteredRes = res.data.filter(comic => {
        if (comic.genre === 'Superhero') {
          return comic
        }
      })
      setComic(filteredRes)
    }
    fetchData()  
  }, [])

  




  return (
    <Grid container className='root'>
      <Paper>
        <Typography variant='h5'>
          <ul>
            { comics && comics.map(comic => (
              <li key={comic._id}> <p>{comic.name}</p> 
              </li>
            ))}
          </ul>
        </Typography>
      </Paper>
    </Grid>
    
  )
}

export default comicHooks


