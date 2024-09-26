import React, { useEffect, useState } from "react";
import "./App.css";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import TaskForm from "./components/TaskForm/TaskForm";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const GPTTasks = [
  {
    task: "Create homepage layout",
    status: "todo",
    tags: ["JavaScript", "React", "HTML", "CSS"],
  },
  {
    task: "Implement user authentication",
    status: "doing",
    tags: ["CSS", "JavaScript", "HTML", "React"],
  },
  {
    task: "Design contact form",
    status: "done",
    tags: ["React", "HTML", "JavaScript", "CSS"],
  },
  {
    task: "Set up project structure",
    status: "doing",
    tags: ["HTML", "React", "CSS", "JavaScript"],
  },
  {
    task: "Optimize images",
    status: "todo",
    tags: ["JavaScript", "HTML", "CSS", "React"],
  },
  {
    task: "Develop landing page",
    status: "done",
    tags: ["CSS", "JavaScript", "React", "HTML"],
  },
  {
    task: "Integrate payment gateway",
    status: "doing",
    tags: ["React", "CSS", "JavaScript", "HTML"],
  },
  {
    task: "Create navigation menu",
    status: "todo",
    tags: ["HTML", "JavaScript", "React", "CSS"],
  },
  {
    task: "Implement CRUD operations",
    status: "done",
    tags: ["CSS", "HTML", "JavaScript", "React"],
  },
  {
    task: "Add responsive design",
    status: "todo",
    tags: ["JavaScript", "CSS", "React", "HTML"],
  },
  {
    task: "Set up state management",
    status: "doing",
    tags: ["HTML", "React", "JavaScript", "CSS"],
  },
  {
    task: "Write unit tests",
    status: "done",
    tags: ["React", "JavaScript", "CSS", "HTML"],
  },
  {
    task: "Create footer section",
    status: "todo",
    tags: ["CSS", "React", "HTML", "JavaScript"],
  },
  {
    task: "Develop blog page",
    status: "doing",
    tags: ["JavaScript", "HTML", "CSS", "React"],
  },
  {
    task: "Implement dark mode",
    status: "done",
    tags: ["React", "CSS", "HTML", "JavaScript"],
  },
  {
    task: "Add animations",
    status: "todo",
    tags: ["HTML", "JavaScript", "CSS", "React"],
  },
  {
    task: "Set up API integration",
    status: "doing",
    tags: ["CSS", "React", "JavaScript", "HTML"],
  },
  {
    task: "Create user profile page",
    status: "done",
    tags: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    task: "Fix mobile navigation",
    status: "todo",
    tags: ["JavaScript", "CSS", "HTML", "React"],
  },
  {
    task: "Optimize performance",
    status: "doing",
    tags: ["HTML", "React", "CSS", "JavaScript"],
  },
];

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (index) => {
    setTasks((p) => p.filter((item, i) => i !== index));
  };

  const onDrop = (status, index) => {
    console.log(`${activeCard} is placing at  ${index} in ${status}`);
    if (activeCard == null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);
    updatedTasks.splice(index, 0, {
      ...taskToMove,
      status: status,
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
};

export default App;
