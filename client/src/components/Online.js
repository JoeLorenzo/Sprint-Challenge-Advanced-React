import { useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useOnline } from '../hooks/useOnline'
import React, { useState } from 'react'
import './Online.scss'
function Online(){

  const [val, handleToggle] = useOnline('Online', false)


    return(
      <div data-testid="toggle_class" class={`${val}`}>
        <button class="buttons" onClick={handleToggle}>Online </button>
        <div class="ring-container">
          <div class="ringring"></div>
          <div class="circle"></div>
        </div>
      </div>
)
}


export default Online
