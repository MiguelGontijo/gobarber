import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import ProviderController from "./app/controllers/ProviderController";
import ControllerFile from "./app/controllers/ControllerFile";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middleware/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.post("/files", upload.single("file"), ControllerFile.store);

routes.put("/users", UserController.update);

routes.get("/providers", ProviderController.index);

export default routes;
