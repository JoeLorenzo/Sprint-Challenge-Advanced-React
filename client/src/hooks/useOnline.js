import { useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

import React, { useState } from 'react'

export function useOnline() {
  const [val, setVal] = useLocalStorage('val', false);
console.log(val)


    useEffect(() => {
      val
        ? document.body.classList.add('dark-mode')
        : document.body.classList.remove('dark-mode')
    }, [val])

     const handleToggle = () => {
    setVal(!val)
    console.log(val)
   }

    // return the destructured array
    return [val, handleToggle]
  }
