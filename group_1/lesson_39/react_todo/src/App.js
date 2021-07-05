import React, { useState } from 'react'

function App() {
  let [tasks, setTasks] = useState([])
  let [newTaskName, setNewTaskName] = useState('')

  const onAddTodo = (e) => {
    e.preventDefault()

    if (newTaskName.trim() == '') {
      return
    }

    setTasks([...tasks, newTaskName])
    setNewTaskName('')
  }

  const onNewTaskNameChange = (e) => {
    setNewTaskName(e.target.value)
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="display-1 text-center mt-4 mb-5">Todo List</h1>
        {/* Todo List */}
        <ul className="list-group">
          {tasks.map(text => (
            <li className="list-group-item d-flex">
              <span>{text}</span>
              <button className="btn btn-sm py-0 ms-auto">
                Удалить
              </button>
            </li>
          ))}
        </ul>
        {/* Add Todo Form */}
        <form className="row g-3 mt-1" onSubmit={onAddTodo}>
          <div className="col">
            <input onChange={onNewTaskNameChange} value={newTaskName} type="text" class="form-control" placeholder="Введите название задачи" />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">Добавить</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export { App }