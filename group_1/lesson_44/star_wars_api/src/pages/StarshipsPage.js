import React, { useEffect, useState } from 'react'

function StarshipsPage() {
  const [starships, setStarships] = useState([])
  const [loading, setLoading] = useState(true)
  // const [search, setSearch] = useState('')

  useEffect(() => {
    Promise.all([
      loadStarships()
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  const loadStarships = () => {
    return fetch('https://swapi.dev/api/starships/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setStarships(data.results)
      })
  }

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h3 className="my-3">Starships</h3>
      
      <ul className="list-group">
        {starships.map((starship, idx) => (
          <li className="list-group-item">
            {starship.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export {StarshipsPage}