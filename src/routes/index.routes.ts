import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', (request, response) => {
    return response.json({
        message: '✨🤘🏾 This is a index GET route.'
    })
})

export default indexRouter;
