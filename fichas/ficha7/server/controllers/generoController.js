const Genero = require("../model/genero");

module.exports = {
  async genero_list(req, res) {
    const genero = await Genero.findAll();

    return res.status(200).send(genero);
  },
};
