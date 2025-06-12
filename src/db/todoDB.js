// db/todoDB.js
import Dexie from 'dexie'

const db = new Dexie('TodoDatabase')

db.version(1).stores({
  todos: '++id, title, completed' // schema
})

export default db


