import React, { Component } from 'react'
import axios from 'axios'
import './ApiCall.scss'
import Player from './Player'
class ApiCall extends Component {
  constructor() {
    super()

    // set some initial/default state values
    this.state = {
      id: '',
      name: '',
      country: '',
      searches: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(result => {
        console.log(result.data)
        this.setState({
          id: result.data.id,
          name: result.data.name,
          country: result.data.country,
          searches: result.data.searches,
        })
      })
      .catch(error => {
        console.log('error:', error)
      })
  }


  render() {
    return (
    <Player />
    )
  }
}

export default ApiCall
