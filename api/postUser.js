const { poolConnect } = require('../db/connection')
const { requiredFields } = require('../config')
const queryInfo = {
  table: 'users',
  columns: 'name, username'
}

const insertQuery = (values) => `INSERT INTO ${queryInfo.table} (${queryInfo.columns}) VALUES (${values})`

const validateValues = (values) => {
  const validValues = requiredFields.filter(field => values[field] && values[field].length)
  const hasSameLength = validValues.length >= requiredFields.length

  return hasSameLength
}

const postUser = async (event) => {
  const body = JSON.parse(event.body)
  const { name, username } = body
  const valuesAreValid = validateValues(body)
  const values = `'${name}', '${username}'`

  if (valuesAreValid) {
    const poolResponse = await poolConnect(insertQuery(values))

    return poolResponse
  }

  return {
    error: 'Some values are invalid, please fill them all :)'
  }
}

module.exports.handler = postUser
