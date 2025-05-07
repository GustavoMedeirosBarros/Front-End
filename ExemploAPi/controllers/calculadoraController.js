exports.helloWorld = (req, res) => {
    res.send("Hello World!")
};

exports.calcular = (req, res) => {
    const { n1, n2, operacao } = req.query;

    switch (operacao) {
        case 'somar':
            resultado = parseInt(n1) + parseInt(n2);
            break;
        case 'subtrair':
            resultado = parseInt(n1) - parseInt(n2);
            break;
        case 'multiplicar':
            resultado = parseInt(n1) * parseInt(n2);
            break;
        case 'dividir':
            resultado = parseInt(n1) / parseInt(n2);
            break;
        default:
            return res.status(400).json({ error: 'Operação inválida' });
    }

    res.json({ n1, n2, operacao, resultado });
};

exports.somar = (req, res) => {
    const { n1, n2 } = req.query;
    // const n1 = parseInt(req.query.n1);
    // const n2 = parseInt(req.query.n2);

    const resultado = parseInt(n1) + parseInt(n2);
    res.json({ resultado });
};