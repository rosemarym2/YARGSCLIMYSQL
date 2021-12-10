const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Actor = sequelize.define("actor", {
    actor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Movie,
            key: movie_id //reference to the Foreign Key
        }        
    },
    actor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Actor;