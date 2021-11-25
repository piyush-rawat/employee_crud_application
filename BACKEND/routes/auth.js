const express = require("express");
const { check } = require("express-validator");

const router = express();

const { login } = require("../controllers/auth");

router.post(
  "/login",
  [
    check("email", "Email is required.").isEmail(),
    check("password", "Password is required.").not().isEmpty(),
  ],
  login
);

module.exports = router;
