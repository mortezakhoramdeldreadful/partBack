process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const {Pool, Client} = require('pg');
const pool = new Pool({
     user: 'stack_over_flow',
     host: '185.206.94.174',
     database: 'part_college',
     password: 'A6ADB88EBDC51C4A53BEE705D2E71D58',
     port: 5432,
     ssl: true

})

module.exports = pool