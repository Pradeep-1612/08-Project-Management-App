import { useRef } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

export default function CreateProject({
  setCreateProjectRequested,
  handleProjectListEvent,
}) {
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDueDate = useRef();
  function handleAddProject() {
    handleProjectListEvent('ADD_PROJECT', {
      projectTitle: projectTitle.current.value,
      projectDescription: projectDescription.current.value,
      projectDueDate: projectDueDate.current.value,
    });
  }
  return (
    <>
      <div className="create-project-container">
        <Input ref={projectTitle} label="Project Title" type="text" placeholder="Project title" />
        <TextArea
          ref={projectDescription}
          label="Description"
          type="textarea"
          placeholder="Description that explains your project"
        />
        <Input ref={projectDueDate} label="Due date" type="date" />

        <div className="action-button-container">
          <button
            className="secondary-button"
            onClick={() => setCreateProjectRequested(false)}
          >
            Cancel
          </button>
          <button className="primary-button" onClick={() => handleAddProject()}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
