const express = require('express');
const Sequelize = require('sequelize');
const db = require('./config/database');
const Book = require('./models/Book');

const app = express();

const conn = new Sequelize(db);

Book.init(conn);


conn.authenticate()
	.then(() => console.log('Database connected...'))
	.catch(err => console.log(err));

app.use(express.json());

app.use('/api/books', require('./routes/books'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
