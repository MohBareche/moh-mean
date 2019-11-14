import mongoose from 'mongoose';
const {
  Schema
} = mongoose;

const taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  owner: {
    type: String,
    required: true
  }
});

export default mongoose.model('Task', taskSchema);