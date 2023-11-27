import express from 'express'
import controller from '../src/controller/administrator/index.js';
import middleware from '../src/middleware/index.js';

const router = express.Router()

router.post('/login', controller.handleLogin)

router.use(middleware.authenticate)
router.get('/profile', controller.getProfile)

export default router