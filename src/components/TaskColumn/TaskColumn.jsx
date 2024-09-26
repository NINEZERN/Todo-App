import React from "react";
import "./TaskColumn.css";
import TaskCard from "../TaskCard/TaskCard";
import DropArea from "../DropArea/DropArea";

const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
}) => {
  return (
    <>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img className="task_column_icon" src={icon} alt="direct hit image" />
          {title}
        </h2>
        <DropArea onDrop={() => onDrop(status, 0)} />
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <React.Fragment key={index}>
                <TaskCard
                  key={index}
                  title={task.task}
                  tags={task.tags}
                  handleDelete={handleDelete}
                  index={index}
                  setActiveCard={setActiveCard}
                />
                <DropArea onDrop={() => onDrop(status, index)} />
              </React.Fragment>
            )
        )}
      </section>
    </>
  );
};

export default TaskColumn;
