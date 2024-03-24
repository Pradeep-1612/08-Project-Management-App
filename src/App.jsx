import { useState } from "react";
import MainContent from "./components/MainContent";
import SideMenu from "./components/SideMenu";
import ErrorModal from "./components/ErrorModal";
import { useRef } from "react";

function App() {
  const [createProjectRequested, setCreateProjectRequested] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const errorModalRef = useRef();
  function handleProjectListEvent(eventType, eventData) {
    switch (eventType) {
      case "ADD_PROJECT":
        setProjectList((prevState) => {
          let isDuplicateFound = false;

          prevState.forEach((item) => {
            if (item.projectTitle === eventData.projectTitle) {
              errorModalRef.current.openModal();
              isDuplicateFound = true;
              return;
            }
          });

          if (!isDuplicateFound) {
            const projectId = Math.random();
            const newEventData = {
              id: projectId,
              ...eventData,
              tasks: [],
            };
            const updatedProjectList = [...prevState, newEventData];
            setSelectedProjectDetails(newEventData);
            setCreateProjectRequested(false);
            return updatedProjectList;
          }
          return prevState;
        });
        break;
      case "DELETE_PROJECT":
        setProjectList((prevState) => {
          return prevState.filter((item) => item.projectTitle !== eventData);
        });
        setSelectedProjectDetails(undefined);
        setCreateProjectRequested(false);
        break;
      case "ADD_TASK":
        setProjectList((prevState) => {
          
          return prevState.map((item) => {
            if (item.projectTitle === selectedProjectDetails.projectTitle) {
              let isDuplicateFound = false;
              item.tasks.forEach((taskName) => {
                if (taskName === eventData) {
                  errorModalRef.current.openModal();
                  isDuplicateFound = true;
                  return;
                }
              });
              if(isDuplicateFound) {
                return item
              }
              const updatedItem = {
                ...item,
                tasks: [...item.tasks, eventData],
              };
              setSelectedProjectDetails(updatedItem);
              return updatedItem;
            }
            return item;
          });
        });
        break;
      case "DELETE_TASK":
        setProjectList((prevState) => {
          return prevState.map((item) => {
            if (item.projectTitle === selectedProjectDetails.projectTitle) {
              const updatedItem = {
                ...item,
                tasks: item.tasks.filter((taskItem) => taskItem != eventData),
              };
              setSelectedProjectDetails(updatedItem);
              return updatedItem;
            }
            return item;
          });
        });
        break;
    }
  }

  return (
    <>
      <div className="flex-container">
        <ErrorModal ref={errorModalRef} />
        <SideMenu
          projects={projectList}
          selectedProjectDetails={setSelectedProjectDetails}
          setCreateProjectRequested={setCreateProjectRequested}
        ></SideMenu>
        <MainContent
          createProjectRequested={createProjectRequested}
          setCreateProjectRequested={setCreateProjectRequested}
          handleProjectListEvent={handleProjectListEvent}
          selectedProjectDetails={selectedProjectDetails}
        ></MainContent>
      </div>
    </>
  );
}

export default App;
