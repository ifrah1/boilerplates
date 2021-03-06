import express from 'express';
import logger from 'morgan';

/* Load env vars*/
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3005;

/* Setup Express App*/
const app = express();

/* Config app */
// app.set('view engine', 'ejs');  //set view engine if not using React/other front-ends

/* Mount middleware */
// logger
app.use(logger('dev'));
// use a static public folder
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.get('/', (req, res) => {
    res.json({ hello: 'Hello' });
})


/* App Listener */
app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
