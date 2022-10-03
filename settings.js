require('dotenv').config();

const DATABASE_CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING
const DATABASE_USER = process.env.DATABASE_USER
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
const DATABASE_HOST = process.env.DATABASE_HOST
const DATABASE_PORT = process.env.DATABASE_PORT
const DATABASE_NAME = process.env.DATABASE_NAME
module.exports = {
    'DATABASE_CONNECTION_STRING': DATABASE_CONNECTION_STRING,
    'DATABASE_USER': DATABASE_USER,
    'DATABASE_PASSWORD': DATABASE_PASSWORD,
    'DATABASE_HOST': DATABASE_HOST,
    'DATABASE_PORT': DATABASE_PORT,
    'DATABASE_NAME': DATABASE_NAME
}