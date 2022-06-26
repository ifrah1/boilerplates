import express from 'express';
import logger from 'morgan';
import cors from 'cors';

/* Load env vars (similar to a config.json) */
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3005;


/* Internal Modules */
import routes from './routes/index.js';

/* connect to DB */
// will move this to db config folder of its own

/* Setup Express App */
const app = express();

/* Config app */
// app.set('view engine', 'ejs');  //set view engine if not using React/other front-ends

/* Mount middleware */

// logger 
app.use(logger('dev'));
// use a static public folder 
app.use(express.static('public'));
// parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 
  Use CORS to allow cross-origin access. 
  "CORS" stands for Cross-Origin Resource Sharing. 
  It allows you to make requests from one website to another website 
  in the browser, which is normally prohibited by another browser policy 
  called the Same-Origin Policy (SOP).
*/
app.use(cors());

/* Routes */

app.get('/', (req, res) => {
    const template = `
      <div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
        <h1> HELLO WORLD</h1>
      </div>
    `
    res.send(template);
})

/* App Listener */
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));