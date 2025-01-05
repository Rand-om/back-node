import dotenv from 'dotenv'

import express from 'express';
import cors from 'cors';
import sequelize from './infraestructure/database/database';
import PostRoutes from './posts/routes/PostRoutes';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/posts', PostRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
