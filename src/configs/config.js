
const dotenv  = require('dotenv')

/**
 * A class for get all .env variables
 */

class EnvVariable {

    /**
     * As of now we are pretending there is by default path
     * set, in order to change .env path we should pass path to 
     * config method of dotenv package
     */

    constructor() {
        const result = dotenv.config()
        if (result.error) {
            throw result.error
        }
    }

    /**
     * 
     * A method which return value of specific 
     * key passed
     * @param {string} key 
     * 
     */
    getValue(key) {
        return process.env[key]
    }

}

module.exports = new EnvVariable();