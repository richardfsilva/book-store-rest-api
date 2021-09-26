const { Model, DataTypes } = require('sequelize');

class Book extends Model {
    static init(sequelize) {
	super.init({
	    name: DataTypes.STRING,
	    author: DataTypes.STRING,
	    year_released: DataTypes.INTEGER,
	    rating: DataTypes.FLOAT,
	    qtd: DataTypes.INTEGER,
	}, {
	    sequelize,
	    tableName: 'books'
	})
    }
}

module.exports = Book;
