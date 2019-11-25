import { useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import React, { useState } from 'react'

export function useOnline() {
  const [val, setVal] = useLocalStorage('val', false);
  console.log(val)

  useEffect(() => {
    }, [val])

  const handleToggle = () => {
    setVal(!val)
    console.log(val)
   }

  return [val, handleToggle]
}
