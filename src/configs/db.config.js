const environement = require('./config')

const db = {
    host:  environement.getValue('DB_HOST'),
    user: environement.getValue('DB_USER'),
    password: environement.getValue('DB_PASSWORD'),
    database: environement.getValue('DB_NAME'),
    port: environement.getValue('DB_PORT'),
    db_type: environement.getValue('DB_TYPE')
};

module.exports = db;