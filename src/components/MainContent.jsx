import noProjectsIcon from "../assets/no-projects.png";
import CreateProject from "./CreateProject";
import ProjectDetail from "./ProjectDetail";

export default function MainContent({
  createProjectRequested,
  setCreateProjectRequested,
  handleProjectListEvent,
  selectedProjectDetails
}) {
  return (
    <>
      <div className="main-content-container">
        {selectedProjectDetails && !createProjectRequested && (
          <ProjectDetail
            selectedProjectDetails={selectedProjectDetails}
            handleProjectListEvent={handleProjectListEvent}
          />
        )}
        {createProjectRequested && !selectedProjectDetails && (
          <CreateProject
            setCreateProjectRequested={setCreateProjectRequested}
            handleProjectListEvent={handleProjectListEvent}
          />
        )}
        {!selectedProjectDetails && !createProjectRequested && (
          <div className="initial-main-content">
            <img className="image-asset" src={noProjectsIcon} />
            <p>
              No Project selected. Select a project or get started with a new
              one.
            </p>
            <button
              className="primary-button"
              onClick={() => setCreateProjectRequested(true)}
            >
              + &nbsp;&nbsp; Create new project
            </button>
          </div>
        )}
      </div>
    </>
  );
}
