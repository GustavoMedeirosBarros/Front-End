const express = require('express');
const app = express();
const calcRouter = require('./routes/calculadoraRoute');

app.use(express.json());

app.use('/calculadora', calcRouter)


const produtos = [];
var ultimoId = 1;

app.post('/produto', (req, res) => {
    const { nome, valor, temEstoque } = req.body;
    const produto = { id: ultimoId, nome, valor, temEstoque };
    ultimoId++;
    produtos.push(produto);
    res.status(201).json(produto);
});

app.get('/produto', (req, res) => {
    res.json(produtos);
});

app.get('/produto/:id', (req, res) => {
    const { id } = req.params;
    const produto = produtos.find((p) => p.id == id);
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(produto);
});

app.put('/produto/:id', (req, res) => {
    const { id } = req.params;
    const { nome, valor, temEstoque } = req.body;
    const produto = produtos.find((p) => p.id == id);
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    produto.nome = nome;
    produto.valor = valor;
    produto.temEstoque = temEstoque;
    res.json(produto);
});

app.delete('/produto/:id', (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex((p) => p.id == id);
    if (index === -1) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    produtos.splice(index, 1);
    res.status(204).send();
});


app.listen(3000, () => (console.log('Servidor funcionando na porta 3000')));