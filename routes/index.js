const express = require("express");

const router = express.Router();

const queries = require("../db/queries");

router.get("/brands", (req, res, next) => {
  queries
    .getAllBrands()
    .then((brands) => {
      res.status(200).json(brands);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
