import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'
import { CssBaseline, FormControl, MenuItem, InputAdornment, Menu, InputLabel, 
  makeStyles, TextField, Input, FormHelperText, Button, Container, Typography } from '@material-ui/core'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons'

//errors needed
//disable buttons
//errors to alert users
//information cleared once it has been submitted

class ComicMaterial extends React.Component {


  state = {
    data: {
      name: '',
      writer: '',
      publisher: '',
      genre: '',
      image: '',
      synopsis: '',
      user: ''
    },
    errors: '',
    anchorEl: false,
    disabled: false
  }


  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
  }

  //  handleClick = e => {
  //    this.setState({ anchorEl: true })
  //  }

  //  handleClose = () => {
  //    this.setState({ anchorEl: false })
  //  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/comics', 
        this.state.data, {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
      this.setState({ disabled: true })  
      
      
    } catch {
      this.setState({ errors: 'oh no something has gone wrong' })
    }
  }

 

  

  render() {
    const { data } = this.state
    console.log(this.state.disabled)
    console.log(this.state.data)
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className='paper'>
          <Typography component='h1' variant='h5'>
            Make a new comic
          </Typography>
          <form onSubmit={this.handleSubmit} className='formMaterial'>
            <AccessAlarm />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccessAlarm  />
                  </InputAdornment>
                )
              }}
              id="name"
              label="name"
              name="name"
              margin="normal"
              required
              fullWidth
              value={data.name}
              variant="outlined"
              color="secondary"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
            {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
            Genres
            </Button>
            <Menu
              id="menu-list-grow"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>    */}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />    
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={this.state.disabled}
              
            >
            Submit
            </Button>

          </form>
        </div>
      </Container> 
    )
  }

}


export default ComicMaterial
