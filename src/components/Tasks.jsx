import { useRef } from "react";
import Input from "./Input";

export default function Tasks({ tasks, handleProjectListEvent }) {
  const taskTitle = useRef(null);

  return (
    <>
      <header>
        <h1>Tasks</h1>
      </header>
      <div className="flex-container add-task-container">
      <Input ref={taskTitle} type="text" placeholder="Task name" />
      <button className="primary-button"
        onClick={() => {
          handleProjectListEvent("ADD_TASK", taskTitle.current.value);
          taskTitle.current.value = null;
        }}
      >
        Add task
      </button>
      </div>
      {tasks &&
        tasks.map((item) => {
          return (
            <div key={item} className="flex-container">
              <p>{item}</p>
              <button className="secondary-button"
                onClick={() => handleProjectListEvent("DELETE_TASK", item)}
              >
                Clear task
              </button>
            </div>
          );
        })}
    </>
  );
}
