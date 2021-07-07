import React, { useState } from 'react'
import { AddTodoForm } from './components/add-todo-form/AddTodoForm'
import { TodoList } from './components/todo-list/TodoList'

function App() {
  // State
  let [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
  let [doneFilter, setDoneFilter] = useState(null)

  const storeTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setTasks(tasks)
  }

  // Actions
  const addTodo = (todoName) => {
    storeTasks([...tasks, {
      name: todoName,
      done: false,
      id: Math.random().toString()
    }])
  }

  const deleteTodo = (idx) => {
    storeTasks([...tasks.slice(0, idx), ...tasks.slice(idx + 1)])
  }

  const toggleDone = (idx) => {
    // 1. Получить обект таски
    // 2. Изменить его
    // 3. Записать новый измененный объект в новый массив
    let task = tasks[idx]
    let newTask = {...task, done: !task.done}

    storeTasks([...tasks.slice(0, idx), newTask, ...tasks.slice(idx + 1)])
  }

  const filterredTasks = tasks.filter((task) => {
    if (doneFilter === null) return true
    return task.done === doneFilter
  })

  // Render
  return (
    <div className="App">
      <div className="container">
        <h1 className="display-1 text-center mt-4 mb-5">Todo List</h1>
        {/* Filter */}
        <div className="btn-group w-100 my-4">
          <button type="button"
                className={"btn " + (doneFilter === null ? 'btn-primary' : 'btn-outline-primary')}
                onClick={() => setDoneFilter(null)}>
            Все
          </button>
          <button type="button"
                className={"btn " + (doneFilter === true ? 'btn-primary' : 'btn-outline-primary')}
                onClick={() => setDoneFilter(true)}>
            Выполненные
          </button>
          <button type="button"
                className={"btn " + (doneFilter === false ? 'btn-primary' : 'btn-outline-primary')}
                onClick={() => setDoneFilter(false)}>
            Не выполненные
          </button>
        </div>
        {/* Search */}
        <input type="text" className="form-control mb-4" placeholder="Поиск..." />
        {/* Todo List */}
        <TodoList tasks={filterredTasks} deleteTodo={deleteTodo} toggleDone={toggleDone} />
        {/* Add Todo Form */}
        <AddTodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export { App }