import React, { Component } from 'react'
import axios from 'axios'

import Player from './Player'
class ApiCall extends Component {
  constructor() {
    super()

    // set some initial/default state values
    this.state = {
      playerInfo:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(result => {
        this.setState({
          playerInfo:result.data,
        })
      })
      .catch(error => {
        console.log('error:', error)
      })
  }

  render() {
    return(
      <div>
      {this.state.playerInfo.map(player =>
        <Player info={player} />
      )}
      </div>
    )


  }
}

export default ApiCall
