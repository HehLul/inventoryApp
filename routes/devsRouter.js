const { Router } = require("express");
const devsController = require("../controllers/devsController");
const devsRouter = Router();

devsRouter.get("/", devsController.devsListGet);

devsRouter.get("/new", devsController.devNewGet);
devsRouter.post("/new", devsController.devNewPost);

devsRouter.get("/update/:id", devsController.devUpdateGet);
devsRouter.post("/update/:id", devsController.devUpdatePost);

devsRouter.get("/:id", devsController.devGet);

devsRouter.delete("/:id", devsController.devDelete);

module.exports = devsRouter;
