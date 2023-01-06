
const dotenv  = require('dotenv');
const { Sequelize } = require('sequelize');

const dbconf = require('../configs/db.config')


let db_connection;

/**
 * A class for database connection
 */

class Connection {


    constructor() {

        if (db_connection) {
            throw new Error("You can only create one instance of database!");
        }

        db_connection = new Sequelize(dbconf.database, dbconf.user, dbconf.password, { host: dbconf.host, dialect: dbconf.db_type});
    }

    conn(){
        db_connection.authenticate().then(() => console.log('Connection has been established successfully.'))
        .catch((error) => console.error('Unable to connect to the database: ', error));
    }
    getinstance(){
        return db_connection
    }

}

module.exports = Object.freeze(new Connection());