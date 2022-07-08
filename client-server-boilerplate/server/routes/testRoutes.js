import express from 'express';
const router = express.Router();

/* testControllers */
// import controllers from '../controllers/index.js';
import testCtrl from '../controllers/test.js';

/* Routes */

//GET
// app.com/api/test/
router.get('/', (req, res) => {
    res.send('Hello TEStPAGE')
});

//GET
// app.com/api/test/data
router.get('/data', testCtrl.testGetData);

export { router as testRoutes }; 