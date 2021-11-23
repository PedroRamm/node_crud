const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'teste',  
    password: 'Pedro-1245',
    port: 5432,
});

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
});

module.exports = { 
    query: (text, params) => pool.query(text, params),
}