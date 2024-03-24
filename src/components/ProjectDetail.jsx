import Tasks from "./Tasks";

export default function ProjectDetail({
  selectedProjectDetails,
  handleProjectListEvent,
}) {
  return (
    <>
      <div className="project-detail-container">
        <div className="project-detail-header-container">
          <div className="flex-container">
            <header>
              <h1>Project details</h1>
            </header>

            <button className="secondary-button"
              onClick={() =>
                handleProjectListEvent(
                  "DELETE_PROJECT",
                  selectedProjectDetails.projectTitle
                )
              }
            >
              Delete this project
            </button>
          </div>
          <div className="project-detail-item flex-container">
            <label>Project Title: </label>
            <p>{selectedProjectDetails.projectTitle}</p>
          </div>
          <div className="project-detail-item flex-container">
            <label>Project Description: </label>
            <p>{selectedProjectDetails.projectDescription}</p>
          </div>
          <div className="project-detail-item flex-container">
            <label>Project Due date: </label>
            <p>{selectedProjectDetails.projectDueDate}</p>
          </div>
        </div>
        <br></br>
        <br></br>
        <Tasks
          tasks={selectedProjectDetails.tasks}
          handleProjectListEvent={handleProjectListEvent}
        />
      </div>
    </>
  );
}
