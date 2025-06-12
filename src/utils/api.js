// src/utils/api.js


import localforage from 'localforage'
import db from '../db/todoDB'
const TODOS_KEY = 'todos_cache'

export const fetchTodos = async (page = 1, limit = 10) => {
  const start = (page - 1) * limit
  const url = `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${limit}`

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Failed to fetch todos')

    const todos = await res.json()
    await localforage.setItem(`${TODOS_KEY}_${page}`, todos)
    await db.todos.bulkPut(todos)
    console.log(`✅ Fetched page ${page} from API`)
    return todos
  } catch {
    console.warn('🌐 Offline: Using Dexie fallback')
    const offlineTodos = await db.todos.toArray()
    return offlineTodos.slice(start, start + limit)
  }
}

export const deleteTodo = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
  })

  if (!res.ok) {
    console.error('Failed to delete todo:', res.status)
    throw new Error('Delete failed')
  }

  console.log(`✅ Deleted successfully. Status: ${res.status}`)
  return true
}




  // const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  // if (!res.ok) throw new Error('Failed to fetch todos')

async function fetchTo() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  if (!res.ok) throw new Error('Failed to fetch todos');
  const todos = await res.json();
  // do something with todos
}

fetchTo();




export const fetchTodoById = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  if (!res.ok) throw new Error('Failed to fetch todo')
  return res.json()
}



// utils/api.js

export const createTodo = async (newTodo) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  })

  if (!res.ok) {
    console.error('❌ Failed to create todo:', res.status)
    throw new Error('Create failed')
  }

  const data = await res.json()
  console.log(`✅ Created successfully. Status: ${res.status}`, data)
  return data
}




// utils/api.js
export const updateTodo = async (todo) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })

  if (!res.ok) {
    console.error('Failed to update todo:', res.status)
    throw new Error('Update failed')
  }

  const data = await res.json()
  console.log(`✅ Updated todo ${todo.id} successfully`, data)
  return data
}












