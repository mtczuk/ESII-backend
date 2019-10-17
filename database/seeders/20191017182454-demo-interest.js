module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('interest',
    [
      {
        name: 'Costura',
        description: 'Especialidade na confecção de roupas e calçados',
        image_path: '../uploads/img/interest',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Programação',
        description: 'Introdução à programação de programas para computadores e dispositivos móveis',
        image_path: '../uploads/img/interest',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Fotografia',
        description: 'Deseja melhorar a qualidade das suas selfies? Aqui é o local',
        image_path: '../uploads/img/interest',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Fotografia',
        description: 'Deseja melhorar a qualidade das suas selfies? Aqui é o local',
        image_path: '../uploads/img/interest',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Culinária',
        description: 'Sabe aquele estrogonofe delicioso? Aprenda a fazer você também',
        image_path: '../uploads/img/interest',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('interest', null, {}),
};
