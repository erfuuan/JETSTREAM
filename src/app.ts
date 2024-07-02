import express, { Application, Request, Response } from 'express';
import path from 'path';
import mongoose from 'mongoose';
// import cookieParser from 'cookie-parser';
// import morgan from 'morgan';
// import helmet from 'helmet';
// import indexRouter from './routes/index';
// import Middlewares from './middlewares/index';
const app: Application = express();
import Task from './models/task'

import Agenda from 'agenda';

mongoose.connect('mongodb://localhost:27017/agendaDB', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000
}).then(() => {
  console.log('Connected to MongoDB');

}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

const agenda = new Agenda({ db: { address: 'mongodb://localhost:27017/jetstream' } });

// agenda.define('send notification', async (job) => {
agenda.define('callApi', async (job: any) => {
  const { taskId } = job.attrs.data;
  const task = await Task.findById(taskId);
  if (task) {
    console.log(`Notification for task: ${task.name}`);
    // Add your notification logic here
  }
});


// app.use(morgan('dev'));
// app.use(helmet());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api/v1', Middlewares.auth, indexRouter);

app.get('/health', (req: Request, res: Response) => {
  return res.send('ok');
});


app.post('/addTask', async (req: Request, res: Response) => {
  try {
    
    const { name, description, date } = req.body;

    const task = new Task({ name, description, date });
    await task.save();
    console.log(task)

    await agenda.start();
    // await agenda.schedule(date, 'callApi', { taskId: task._id });
    agenda.every('4 seconds', 'callApi',{ taskId: task._id });

    res.status(201).send(task);
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
});


// All your controllers should live here
app.get('/', function rootHandler(req, res) {
  res.end('Hello world!');
});



export default app;
