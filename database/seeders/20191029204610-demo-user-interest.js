module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('user_interest',
    [
      {
        user_id: 1,
        interest_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        interest_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        interest_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        interest_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        interest_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        interest_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        interest_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 4,
        interest_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 5,
        interest_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 5,
        interest_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 6,
        interest_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 6,
        interest_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 6,
        interest_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 7,
        interest_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('user_interest', null, {}),
};
