import express from 'express';
import connection from '../model/database.js';

const router = express.Router();

router.use(express.json());

router.post('/moveis', (req, res) => {
    const query = 'INSERT INTO furniture (furniture_name, furniture_description, furniture_price, furniture_material, furniture_weight, furniture_category, furniture_quantity) VALUES (?, ?, ?, ?, ?, ?, ?);';
    const { name, description, price, material, weight, category, quantity } = req.body;

    connection.query(query, [name, description, price, material, weight, category, quantity], (err, result) => {
        if (err) {
            res.send({ message: 'Erro na consulta: ', details: err});
        }
        res.send({ message: 'Consulta realizada com sucesso.', details: result, test: result.affectedRows });
    });
});

export default router;