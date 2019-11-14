import express from "express";
import passport from 'passport';
import Task from '../models/Task';

const taskRouter = express.Router();

//Add New Task(Todo)
taskRouter.post('/add', passport.authenticate('jwt', { session : false}),  (req, res, next) => {
    const task = new Task({
      name: req.body.name,
      done: req.body.done,
      owner: req.body.owner
    });

    task.save((err, task) => {
      if (err) {
        // throw err;
        return res.send({
          success: false,
          message: 'Error while saving, pelase try again'
        });
      }

      return res.send({
        success: true,
        task,
        message: 'Task Saved'
      });

    });
});

//List Own Tasks
taskRouter.post('/list', passport.authenticate('jwt', { session : false}), (req, res, next) => {
  const owner = req.body.owner;
  Task.find({ owner }, (err, tasks)=>{
    if (err) {
      return res.send({
        success: false,
        message: 'Error while retreiving the tasks'
      });
    }

    return res.send({
      success: true,
      tasks
    });
  });
});

//Delete Task
taskRouter.delete('/remove/:id', passport.authenticate('jwt', { session : false}), (req, res, next) => {

  //TODO: Validate if the the task belongs to the person deleting it (check owner)

  const taskId = req.params.id;
  Task.remove({ _id: taskId }, (err) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Failed to delete the task'
        });
      }

      return res.send({
        success: true,
        message: 'Task deleted'
      });
  });
});

export default taskRouter