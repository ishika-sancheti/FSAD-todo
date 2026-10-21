# FSAD To Do App

![FSAD To Do App](./fsad-todo-app.png)

A simple and responsive to-do application built with React. It lets users add tasks, mark them as complete, delete them, and keep their task list saved in the browser using local storage.

## Features

- Add new tasks
- Mark tasks as completed or incomplete
- Delete tasks
- Persistent storage using `localStorage`
- Minimal and clean UI
- Built with React and Vite

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- LocalStorage for persistence

## Project Structure

```text
FSAD-todo/
├── public/
├── src/
│   ├── components/
│   │   ├── AddTask.jsx
│   │   ├── TaskContext.js
│   │   └── TaskList.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md


## Instructions to Compile and Run

### 1. Install Dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

This will start the Vite development server and display a local URL in the terminal, usually:

`http://localhost:5173`

Open the URL in your browser to view the app.

### 3. Build for Production

To create a production-ready build, run:

```bash
npm run build
```

### 4. Preview the Production Build

To preview the production build locally, run:

```bash
npm run preview
```

## App Behavior

- Uses a **reducer-based state management pattern** to manage tasks.
- Shares state across components using **React Context**.
- Stores tasks in **browser local storage**, allowing the task list to persist after page reloads.

## Notes

This is a lightweight front-end React application designed to demonstrate task management, state updates, and browser persistence.

## License

This project does not currently include a license file.
