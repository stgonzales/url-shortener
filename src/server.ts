import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes';

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

//self-invoking function
// (function () {
//     setInterval(() => { // asynchronous operation
//         console.log('executed');
//     }, 5000);
// })()

app.listen(port, () => {
    console.log(`🚀 Server running on: \n       http://localhost:${port}`);
})
