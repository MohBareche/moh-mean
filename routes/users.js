import express from "express";
import userController from "../controllers/user";
import passport from 'passport';

const userRouter = express.Router();


// ************************ REGISTER ****************************
userRouter.post('/register', userController.register);

// **************************** LOGIN ****************************
userRouter.post('/login', userController.login);

// **************************** LOGIN ****************************
userRouter.post('/post', passport.authenticate('jwt', {
    session: false
}), userController.post);

export default userRouter