const { poolConnect } = require('../db/connection')

const queryInfo = {
  table: 'users'
}

const query = (updatedUser, id) => `UPDATE ${queryInfo.table} SET ${updatedUser} WHERE id = ${id}`

const mountQuery = (values) => {
  const infoToUpdate = Object.keys(values).map(key => `${key} = '${values[key]}'`)
  return infoToUpdate.join(',')
}

const postUser = async (event) => {
  const { id } = event.pathParameters
  const body = JSON.parse(event.body)

  if (!id) {
    return 'Please see the documentation'
  }

  const mountedQuery = mountQuery(body)

  const poolResponse = await poolConnect(query(mountedQuery, id))

  const response = {
    body: JSON.stringify(poolResponse.rows)
  }

  return response
}

module.exports.handler = postUser
