import DotenvFlow from 'dotenv-flow';

DotenvFlow.config();

export default {
    ENV: String(process.env.ENV),
    PORT: process.env.PORT,
    SERVER_URL: String(process.env.SERVER_URL),
    DATABASE_URL: String(process.env.DATABASE_URL)
}