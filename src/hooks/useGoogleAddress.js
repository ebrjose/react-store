import { useState, useEffect } from 'react'

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({})
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=AIzaSyA-d2AGRbY5y2hAw82a8tYSzkgazCU9Orw`
  useEffect(async () => {
    const fetchData = await fetch(API)
    const response = await fetchData.json()
    setMap(response.data.results[0].geometry.location)
  }, [])
  return map
}

export default useGoogleAddress
