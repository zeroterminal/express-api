import usersController from '../controllers/usersController.js';
import express from 'express';

const router = express.Router();

router.get("/", usersController.getUsers);
router.post("/create/admin", usersController.createAdmin);
router.delete("/delete/everything", usersController.wipedb);
router.post("/create/randoms", usersController.createRandomAccounts);
router.get("/view/:username", usersController.view);
router.patch("/edit/:username", usersController.edit);
router.post("/create", usersController.create);
router.delete("/delete/:username", usersController.del);
router.post("/register", usersController.register);
router.post("/login", usersController.login);

export default router;