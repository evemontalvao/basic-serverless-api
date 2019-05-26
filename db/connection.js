const { Client, Pool } = require('pg')
const { postgres: { config } } = require('../config')
const pool = new Pool(config)
const client = new Client(config)

const poolConnect = (query) => {
  pool.connect()
  return pool.query(query);
}

const clientConnect = ({ table, values, type }) => {
  client.connect()

  return client.query([type](table, values))
}

module.exports = {
  poolConnect,
  clientConnect
}
