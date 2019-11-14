import PassportJWT from "passport-jwt";
import User from "../models/User";
import passport from "passport";
require("dotenv").config();

export const configureJWTStrategy = () => {
  const opts = {};
  opts.jwtFromRequest = PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.TOKEN_SECRET;

  passport.use(
    new PassportJWT.Strategy(opts, (payload, done) => {
      User.findOne({
        _id: payload.id
      }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
          // or you could create a new account
        }
      });
    })
  );
}