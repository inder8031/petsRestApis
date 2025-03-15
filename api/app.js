import express from 'express';
import cors from 'cors';

import petRoutes from './pets/routes/pets.routes.js';

const app = express();
const PORT = 8003;

app.use(cors());
app.use(express.json());

app.use('/pets', petRoutes);

if(process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server started at PORT: ${PORT}`);
    });
}

export default app;