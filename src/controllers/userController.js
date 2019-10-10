const { User } = require('../models');

module.exports = {
  async view(request, response) {
    const users = await User.findAll();
    return response.json(users);
  },

  async viewID(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id);

    return response.json(user);
  },

  async create(request, response) {
    const user = request.body;

    const userCreate = await User.create(user);
    return response.sendStatus(201).json(userCreate);
  },

  async update(request, response) {
    const { id } = request.params;
    const {
      name,
      email,
      password,
      phone,
      radius,
      street,
      number_home,
      complement,
      neighbourhood,
      city,
      postal_code,
    } = request.body;
    const user = await User.findOne({ where: { id } });
    user.update({
      name,
      email,
      password,
      phone,
      radius,
      street,
      number_home,
      complement,
      neighbourhood,
      city,
      postal_code,
    });

    response.json(user);
  },
  async delete(request, response) {
    const { id } = request.params;
    await User.destroy({ where: { id } });

    response.sendStatus(200);
  },
};
