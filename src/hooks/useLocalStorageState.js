import { useState, useEffect } from "react"

function useLocalStorageState(key, defaultValue) {
  const [ state, setState ] = useState(() => {
    let value
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
    } catch (err) {
      value = defaultValue
    }
    return value
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [ state ])

  return [ state, setState ]
}

export default useLocalStorageState