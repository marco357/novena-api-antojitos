//en este archvo se define la funcion para conectarnos a la db

const mongoose = require("mongoose")

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME

} = process.env

// protocolo: //user:password@host/DBName
const url = "mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAMR}"

function connect () {
    return mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true

    })
}

module.exports = {
    connect
}