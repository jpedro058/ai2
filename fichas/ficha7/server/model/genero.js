const Sequelize = require("../conections.js");
const { DataTypes } = require("sequelize");

const Genero = Sequelize.define(
  "Genero",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Genero;
