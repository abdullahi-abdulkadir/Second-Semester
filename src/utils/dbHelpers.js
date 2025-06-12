


import db from '../db/todoDB'
// utils/dbHelpers.js

export const updateTodoOffline = async (id, updates) => {
  await db.todos.update(id, updates)
  const updated = await db.todos.get(id)
  console.log('📝 Edited offline:', updated)
  return updated
}