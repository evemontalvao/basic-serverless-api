const { poolConnect } = require('../db/connection')

const queryInfo = {
  table: 'users',
  columns: 'name, username'
}

const insertQuery = () => `SELECT * FROM ${queryInfo.table}`

const postUser = async () => {
  const poolResponse = await poolConnect(insertQuery())
  const response = {
    body: JSON.stringify(poolResponse.rows)
  }

  return response
}

module.exports.handler = postUser
