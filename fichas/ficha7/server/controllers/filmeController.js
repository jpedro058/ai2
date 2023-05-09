const Filme = require("../model/filme");
const Genero = require("../model/genero");

module.exports = {
  filme_create(req, res) {
    const { titulo, descricao, foto, genero } = req.body;

    Filme.create({ titulo, descricao, foto, genero })

      .then((filme) => res.status(201).send(filme))

      .catch((error) => res.status(400).send(error));
  },

  async filme_list(req, res) {
    const filme = await Filme.findAll({
      include: [
        {
          model: Genero,
        },
      ],
      order: [["id", "ASC"]],
    });

    return res.status(200).send(filme);
  },

  async filme_detail(req, res) {
    const { id } = req.params;

    const filme = await Filme.findByPk(id);

    if (!filme) {
      return res.status(404).send({ error: "Filme não encontrado" });
    }

    return res.status(200).send(filme);
  },

  async filme_update(req, res) {
    const { id } = req.params;
    const { titulo, descricao, foto, genero } = req.body;

    const filme = await Filme.findByPk(id);

    if (!filme) {
      return res.status(404).send({ error: "Filme não encontrado" });
    }

    filme.update({ titulo, descricao, foto, genero });

    return res.status(200).send(filme);
  },
};
