const { poolConnect } = require('../db/connection')

const queryInfo = {
  table: 'users',
  columns: 'name, username'
}

const query = (id) => `SELECT * FROM ${queryInfo.table} WHERE id = ${id}`

const postUser = async (event) => {
  const { id } = event.pathParameters

  const poolResponse = await poolConnect(query(id))

  const response = {
    body: JSON.stringify(poolResponse.rows)
  }

  return response
}

module.exports.handler = postUser
