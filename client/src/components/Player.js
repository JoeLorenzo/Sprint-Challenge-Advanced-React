import React from 'react'
  function Player(props) {
    return (
    <div class="container">
      <div class="card">
         <div class="card__content">
           <h1 class="card__title">{props.name} </h1>
           <p>id: {props.id}</p>
           <p>country: {props.country}</p>
           <p>searches: {props.searches}</p>
        </div>
      </div>
    </div>
    )
  }

export default Player
