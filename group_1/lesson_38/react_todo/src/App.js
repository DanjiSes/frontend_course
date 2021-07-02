import React from 'react'



function App() {
  const name = "Danil"
  const tasks = ['Dink coffe', 'Debug code', 'Do exesices']

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <p>By: {name}</p>
        <ul>
          {tasks.map(text => <li>{text}</li>)}
        </ul>
      </div>
    </div>
  )
}

export {App}