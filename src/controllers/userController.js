const { User } = require('../models');

module.exports = {
  async view(request, response) {
    const users = await User.findAll();
    return response.json(users);
  },

  async viewID(request, response) {
    const { id } = request.params.id;
    if (id) {
      const user = await User.findOne({ where: { id } });
      return response.json(user);
    }
    return response.sendStatus(200);
  },

  async create(request, response) {
    const user = request.body;

    const userCreate = await User.create(user);
    return response.sendStatus(201).json(userCreate);
  },
};
