## comming soon . . .
# Task Scheduler with Node.js, Express, TypeScript, Agenda, and MongoDB

This project is a task scheduler built using Node.js, Express, TypeScript, Agenda, and MongoDB. It allows you to schedule tasks and run jobs periodically, leveraging the power of Agenda for job scheduling.

## Features

- **Task Management**: Create and manage tasks with ease.
- **Job Scheduling**: Schedule jobs to run at specific intervals using Agenda.
- **API Endpoints**: RESTful API endpoints to interact with the task scheduler.
- **TypeScript**: Strongly typed codebase for better maintainability and developer experience.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/task-scheduler.git
    cd task-scheduler
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure MongoDB**:
    Ensure that your MongoDB server is running. The project uses the following MongoDB connection strings:
    - For tasks: `mongodb://localhost:27017/taskDB`
    - For Agenda: `mongodb://localhost:27017/agendaDB`

4. **Compile TypeScript**:
    ```bash
    npm run build
    ```

5. **Start the server**:
    ```bash
    npm start
    ```

## API Endpoints

### Add a Task


**Example**:
