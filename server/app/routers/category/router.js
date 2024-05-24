const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browseCategories, readCategory } = require("../../controllers/categoryActions");

// Route to get a list of categories
router.get("/", browseCategories);

// Route to get one category
router.get("/:id", readCategory);

module.exports = router;


/* ************************************************************************* */

