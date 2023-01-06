const { DataTypes } = require("sequelize");
const connection = require('../services/db.seq')
const sequilize = connection.getinstance()



const Book = sequilize.define("books", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type: DataTypes.DATEONLY,
    },
    subject: {
      type: DataTypes.INTEGER,
    }
 });


module.exports = Book