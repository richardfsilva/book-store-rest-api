'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
	await queryInterface.createTable('books', {
	    id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	    },
	    name: {
		type: Sequelize.STRING,
		allowNull: false,
	    },
	    author: {
		type: Sequelize.STRING,
		allowNull: false,
	    },
	    year_released: {
		type: Sequelize.INTEGER,
		allowNull: false,
	    },
	    qtd: {
		type: Sequelize.INTEGER,
		allowNull: false,
	    },
	    rating: {
		type: Sequelize.FLOAT,
		allowNull: false,
		defaultValue: 0,
	    },
	    created_at: {
		type: Sequelize.DATE,
		allowNull: false,
	    },
	    updated_at: {
		type: Sequelize.DATE,
		allowNull: false,
	    }
	});
    },
    
    down: async (queryInterface, Sequelize) => {
    
      await queryInterface.dropTable('books');
    }
};
