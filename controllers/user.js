require("dotenv").config();

import User from "../models/User";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export default {
  async register(req, res) {
    try {
      
      let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
    
      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Failed to save the user'
          });
        }
        res.send({
          success: true,
          message: 'User Saved',
          user
        });
      });

    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },

  async login(req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const query = {
        email
      };

      // Check the user exists
      User.findOne(query, async (err, user) => {
        // Error during executing the query
        if (err) {
          return res.send({
            success: false,
            message: "Erreur, S'il vous plaît réessayer encore . . ."
          });
        }

        // No User match the search condition
        if (!user) {
          return res.send({
            success: false,
            message: "Courriel et/ou Mot de passe erronés ! Veuillez réessayer . . ."
          });
        }

        // Check if the password is correct
        const matched = await bcryptjs.compare(password, user.password);
        if (!matched) return res.status(500).json({
          err: "Non autorisé !"
        });

        // Generating the token
        const token = jwt.sign({
          user
        }, process.env.TOKEN_SECRET, {
          expiresIn: process.env.JWT_EXPIRATION_MS
        });

        // User Is Valid
        // This object is just used to remove the password from the returned fields (security)
        const returnUser = {
          name: user.name,
          email: user.email,
          id: user._id
        }

        // Send the response back
        return res.json({
          success: true,
          message: 'Vous êtes connecté maintenant',
          user: returnUser,
          token
        });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  async post(req, res) {
    const returnUser = {
      name: req.user.name,
      email: req.user.email
    };

    return res.json(returnUser);
  }
};