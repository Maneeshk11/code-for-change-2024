import dotenv from 'dotenv';

dotenv.config();
const DOMAIN : string = (process.env.domain as string)

export const VERIFY_USER = `http://164.92.112.249:8000/verify_user`