const express = require("express");

// import function check from express-validator/check/
// controll form validation user import,check is function used to check data use import
const { check, body } = require("express-validator");

const authController = require("../controllers/auth");

const router = express.Router();

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post("/login", authController.postLogin);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        if (value === "test@test.com") {
          throw new Error("This email address if forbidden.");
        }
        return true;
      }),
    body("password","Please enter a valid with only numbers password.")
      .isLength({ min: 5 })
      .isAlphanumeric(),
  ],
  authController.postSignup
);

router.post("/logout", authController.postLogout);

module.exports = router;
