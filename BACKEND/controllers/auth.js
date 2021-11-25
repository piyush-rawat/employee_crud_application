const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    // Check if email exists.
    let admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ error_msg: "Invalid email or password." });
    }

    // Check if password is valid.
    console.log(bcrypt.compare(password, admin.password));

    if (!bcrypt.compare(password, admin.password)) {
      return res.status(401).json({ error_msg: "Invalid email or password." });
    }

    const token = jwt.sign({ admin }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
};
