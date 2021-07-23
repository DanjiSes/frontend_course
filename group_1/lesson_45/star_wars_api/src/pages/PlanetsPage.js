import React, { useEffect, useState } from 'react'

function PlanetsPage() {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  // const [search, setSearch] = useState('')

  useEffect(() => {
    Promise.all([
      loadPlanets()
    ]).then(() => {
      setLoading(false)
    })
  }, [])

  const loadPlanets = () => {
    return fetch('https://swapi.dev/api/planets/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPlanets(data.results)
      })
  }

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h3 className="my-3">Planets</h3>
      
      <ul className="list-group">
        {planets.map((planet, idx) => (
          <li className="list-group-item" key={idx}>
            {planet.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export {PlanetsPage}