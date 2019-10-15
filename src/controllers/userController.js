const { User } = require('../models');
const { status, sendError } = require('../status');

const secret = 'testsecret'; // must be changed to process.env.SECRET later
const generateToken = (id) => jwt.sign({ id }, secret);

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

    console.log('user create');

    try {
      const userCreate = await User.create(user);
      console.log('userCreate', userCreate);
      return response.sendStatus(
        status.CREATED.httpStatus,
      ).json(userCreate); // TODO: change this response
    } catch (e) {
      console.log(e);
      return sendError(response, status.BAD_REQUEST); // for now assume it's always bad request
    }
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
