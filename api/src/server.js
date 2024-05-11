import express from 'express';
import cors from 'cors';

import registerRoute from './routes/Register.js';
//import alterRoute from './routes/Alter.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/cadastrar', registerRoute);

try {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em https://localhost:${PORT}`)
    });
} catch (err) {
    console.log('erro ao rodar o servidor: ' + err);
}