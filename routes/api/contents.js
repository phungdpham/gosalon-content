const router = require("express").Router();
const contentsController = require("../../controllers/contentsController");

// Matches with "/api/books"
router.route("/")
  .get(contentsController.findAll)
  .post(contentsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(contentsController.findById)
  .put(contentsController.update)
  .delete(contentsController.remove);

module.exports = router;