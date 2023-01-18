const { authSecret } = require("../.env");
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt-nodejs");

module.exports = (app) => {
  const signin = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("Please provide e-mail address and password.");
    }

    const user = await app
      .db("users")
      .whereRaw("LOWER(email) = LOWER(?)", req.body.email)
      .first();

    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).send('Invalid password.');
        }

        const payload = { id: user.id };
        res.json({
          name: user.name,
          email: user.email,
          token: jwt.encode(payload, authSecret),
        });
      });
    } else {
      res.status(400).send("Email not found or user not registered.");
    }
  };
  return { signin };
};
