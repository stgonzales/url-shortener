import { Router } from 'express';
import indexRouter from './index.routes';
const routes = Router();


routes.use('/', indexRouter)

export default routes;
