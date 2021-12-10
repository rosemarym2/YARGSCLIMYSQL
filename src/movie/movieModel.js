const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

//define takes a model string and replaces the need for Schema
const Movie = sequelize.define("Movie", {
title:{
    type: DataTypes.STRING,
    allowNull: false, // allowNull defaults to true
    defaultValue: "movie_name"
},
actor:{
    type: DataTypes.STRING //VARCHAR (255)
},
year:{
    type: DataTypes.INTEGER
},
worldwideGross:{
    type: DataTypes.NUMBER,
    allowNull: false,
    defaultValue: 0
},
movie_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
},
});


module.exports = Movie;
