import ApiCall from './ApiCall'
import Online from './Online'
import { useOnline } from '../hooks/useOnline'
import { useLocalStorage } from '../hooks/useLocalStorage'
import React from 'react'

import './Player.scss'
  function Player(props) {
    const{
    name,
    id,
    country,
    searches
  } = props.info;
    return(
      <div data-testid="card_id" className={`Player_card_${id}`}>
          <div class="container">
            <div class="card">
               <div class="card__content">
                 <h1 class="card__title">{name} </h1>
               <p>country: {country}</p>
                <p>searches: {searches}</p>
                <Online />
              </div>
            </div>
          </div>
      </div>
)}


export default Player
