import express from 'express';
const router = express.Router();

/* exampleControllers */
import controllers from '../controllers/index.js';

// Routes 
router.get('/', controllers.exampleCtrl.exampleIndex);

// Create example 
router.post('/create', controllers.exampleCtrl.createExample);

export { router as exampleRoutes };