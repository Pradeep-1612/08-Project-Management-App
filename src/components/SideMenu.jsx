import "./SideMenu.css";
export default function SideMenu({
  projects,
  selectedProjectDetails,
  setCreateProjectRequested,
}) {
  return (
    <>
      <div className="side-menu-container">
        <h1>Your projects</h1>
        <button
          className="primary-button"
          onClick={() => {
            setCreateProjectRequested(true);
            selectedProjectDetails(undefined);
          }}
        >
          + &nbsp;&nbsp; Add new project
        </button>
        {projects.map((projectItem, index) => {
          return (
            <button
              className="project-title"
              key={projectItem.projectTitle+index}
              onClick={() => {
                selectedProjectDetails(projectItem);
                setCreateProjectRequested(false);
              }}
            >
              {projectItem.projectTitle}
            </button>
          );
        })}
      </div>
    </>
  );
}
