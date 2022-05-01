import User from "../../models/users/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//----------------------------------------------------------------
// REegister User
//----------------------------------------------------------------
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //Check if the User already exists
    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return res.status(409).send("Email already in use.");
    }

    // Encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    //Create User document and save in db
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    //Create JWT Token
    const token = jwt.sign(
      {
        userId: user._id,
        email,
      },
      process.env.TOKEN_KEY,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      userDetails: {
        email: user.email,
        token: token,
        username: user.username,
      },
    });
  } catch (error) {
    //return res.status(500).send("Error occured. Please try again.");
    res.send(error.message);
  }
};

//----------------------------------------------------------------
// Login User
//----------------------------------------------------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      //Send new Token
      const token = jwt.sign(
        {
          userId: user._id,
          email,
        },
        process.env.TOKEN_KEY,
        { expiresIn: "24h" }
      );
      return res.status(200).json({
        userDetails: {
          user: user.email,
          token: token,
          username: user.username,
        },
      });
    }
    return res.status(400).send("Invalid Credentials. Please try again.");
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
};

export { login, register };
