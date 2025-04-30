const { Router } = require("express");
const listingsController = require("../controllers/listingsController");
const listingsRouter = Router();

listingsRouter.get("/", listingsController.listingsGet);

listingsRouter.get(
  "/category/:cat_name",
  listingsController.listingsCategoryGet
);

// GET listing by ID
listingsRouter.get("/:id", listingsController.listingGet);

listingsRouter.get("/new", listingsController.listingCreateGet);
listingsRouter.post("/new", listingsController.listingCreatePost);

listingsRouter.get("/:id/update", listingsController.listingUpdateGet);
listingsRouter.post("/:id/update", listingsController.listingUpdatePost);

listingsRouter.delete("/:id", listingsController.listingDelete);

module.exports = listingsRouter;
