import dotenv from 'dotenv';

// dotenv.config({path: './config.env'})
dotenv.config();

export default {
  DATABASE: process.env.DATABASE,
};