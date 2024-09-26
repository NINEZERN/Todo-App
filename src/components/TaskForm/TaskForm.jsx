import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "../Tag/Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = (document.querySelector(".task_input").value = "");
    const selector = (document.querySelector(".task_status").value = "todo");
    setTasks((p) => [...p, taskData]);
    setTaskData({ task: "", status: "todo", tags: [] });
  };

  const selectTag = (tagName) => {
    if (taskData.tags.includes(tagName)) {
      const filterTags = taskData.tags.filter((item) => item !== tagName);
      setTaskData((p) => ({ ...p, tags: filterTags }));
    } else {
      setTaskData((p) => ({ ...p, tags: [...p.tags, tagName] }));
    }
  };

  const checkTags = (tagName) => {
    if (taskData.tags.some((item) => item === tagName)) return true;
  };

  return (
    <header className="app_header">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter your task"
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTags("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTags("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTags("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTags("React")}
            />
          </div>

          <div>
            <select
              name="status"
              className="task_status"
              onChange={(e) => handleChange(e)}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="task_submit">+ Add Task</button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
