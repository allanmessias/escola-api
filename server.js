import Sequelize from 'sequelize';
import databaseConfig from './src/config/database';
import app from './app';

const sequelize = new Sequelize(databaseConfig);

async function connectServer(port) {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}

async function authenticateDb() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados feita');
        connectServer(3000);
    } catch (error) {
        console.log('Não foi possivel conectar com o bd', error);
    }
}

authenticateDb();