const Sequelize = require("../conections.js");
const { DataTypes } = require("sequelize");
const genero = require("./genero.js");

const Filme = Sequelize.define(
  "Filme",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Filme.hasOne(genero, { foreignKey: "id", sourceKey: "genero" });
genero.hasMany(Filme, { foreignKey: "genero", sourceKey: "id" });

module.exports = Filme;
