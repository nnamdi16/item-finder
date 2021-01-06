import cookieParser from 'cookie-parser';
import express from 'express';
import routes from './routes/item.route';
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use('/api', routes);
const port = process.env.PORT || 3000;
const server = app.listen(port, () => 
    console.log(`Listening on port ${port}`));

module.exports = server;