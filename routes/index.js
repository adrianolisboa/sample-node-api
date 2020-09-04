var express = require("express");
var router = express.Router();

var queries = require("../db/queries");

router.get("/brands", function (req, res, next) {
  queries
    .getAllBrands()
    .then(function (brands) {
      res.status(200).json(brands);
    })
    .catch(function (error) {
      next(error);
    });
});

router.get("/health", function (req, res, next) {
  res.status(200).json("ok");
});

module.exports = router;
