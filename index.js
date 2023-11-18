import path from 'path';
import express from 'express';
import sequelize from './config/sequelize.js';
import initModels from './src/models/init-models.js'
import administratorRoutes from './routes/administrator.js';
import chokidar from 'chokidar';
import { fork } from 'child_process';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
initModels(sequelize);

app.use('/api/administrator', administratorRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});

//INI BUAT HOT RELOADNYA MASIH ERROR WKWKWK
/* if (process.env.NODE_ENV !== 'production') {
    const watcher = chokidar.watch('.', {
        ignored: /node_modules/,
        persistent: true,
    });

    watcher.on('change', () => {
        console.log('Server is restarting...');
        server.close(() => {
            console.log('Server closed. Reloading...');
            //const filePath = path.join(new URL(import.meta.url).pathname, '../index.js'); 
            fork('./index.js');
        });
    });
} */