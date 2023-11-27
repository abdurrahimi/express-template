import express from 'express';
import sequelize from './config/sequelize.js';
import initModels from './src/models/init-models.js'
import administratorRoutes from './routes/administrator.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
initModels(sequelize);

app.use('/api/administrator', administratorRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});