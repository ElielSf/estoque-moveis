import { createConnection } from 'mysql2'

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'estoque-moveis'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro: ' + err.stack);
        return;
    }
    console.log('Conectado ao Banco de Dados.');
});

export default connection;