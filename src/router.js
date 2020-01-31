import { Router } from 'express';

const routes = new Router();

routes.get('/get',(req, res) => {
    console.log(res.send({ message: "hello migus"}));
})

export default routes;