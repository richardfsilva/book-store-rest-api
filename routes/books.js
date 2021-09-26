const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

// Show all books
router.get('/', async (req, res) => {
    
    const books = await Book.findAll({ order: [ ['id', 'ASC'] ] });
    
    if(!books.length) {
	return res.status(400).json({ msg: 'Não há livros cadastrados' });
    }
    
    return res.json({ books, msg: 'Ok' })
})

// Show one book
router.get('/:id', async (req, res) => {
    
    const { id } = req.params;
    const book = await Book.findByPk(id);
    
    if(!book){
	return res.status(400).json({ msg: 'Livro não registrado' });
    }
    
    return res.json({ book, msg: 'Ok' });

});

// Create a book
router.post('/', async (req, res) => {
    
    let { name, author, year_released, rating, qtd } = req.body;

    if(!name || !author || !year_released || !qtd) {
	return res.status(400).json({ msg: 'Por favor, entre com todos os campos' });
    }
    
    const create_book = await Book.create({
	name,
	author,
	year_released,
	rating,
	qtd,
    });
    
    if(!create_book){
	return res.status(400).json({ msg: 'Não foi possivel cadastrar o livro' });
    }
    
    return res.json({ msg: 'Livro cadastrado com sucesso!' });
});

// Update a Book
router.put('/:id', async (req, res) => {
    
    const upd = req.body;
    let { name, author, year_released, rating, qtd } = await Book.findAll();
    
    const updBook = await Book.update({
	name: upd.name ? upd.name : name,
	author: upd.author ? upd.author : author,
	year_released: upd.year_released ? upd.year_released : year_released,
	rating: upd.rating ? upd.rating : rating,
	qtd: upd.qtd ? upd.qtd : qtd,
    }, { where: { id: req.params.id } });
    
    if(!updBook) {
	return res.json({ msg: `Não foi possivel alterar o livro com ID ${req.params.id}`});
    }

    return res.json({ msg: 'Livro alterado com sucesso!' })
});

// Delete a book
router.delete('/:id', async (req, res) => {
    
    let delBook = await Book.destroy({ where: { id: req.params.id } });

    if(delBook !== 1) {
	return res.status(400).json({ msg: `Não foi possivel apagar o livro com o ID ${req.params.id}`});
    }
    
    return res.json({ msg: 'Livro Apagado com sucesso!'});
});

module.exports = router;
