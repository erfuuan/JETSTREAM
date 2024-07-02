import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    // data:
    // config:
});


const Task = model('Task', taskSchema);
export default Task