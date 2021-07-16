import React, { useEffect, useState } from 'react'

function App() {
  // State
  const [peoples, setPeoples] = useState([])
  const [loading, setLoading] = useState(true)

  // Hooks
  useEffect(() => {
    loadPeoples()
  }, [])

  // Methods
  const loadPeoples = () => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPeoples(data.results)
        setLoading(false)
      })
  }

  // Render
  return (
    <div className="app py-5">
      <div className="container">
        <h1 className="display-1 mb-5">Star Wars Api</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="list-group">
            {peoples.map((man, idx) => (
              <li className="list-group-item" key={idx}>
              <div className="row">
                <div className="col-8">
                  <h3>{man.name}</h3>
                </div>
              </div>
            </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export {App}