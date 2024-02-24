import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";


function App() {
  //Manage object as a state, having some properties. selectedProjectId (later used to select project out of multiple) is defined if neither selected nor created, null to create new 
  const [project, setProject] = useState({
      seletedProjectId: undefined,
      projects: [],
      tasks: []
  })

  function addTaskHandler(taskData) {
    setProject(prevState => {
      const id = Math.random()
      const newTask = {
        taskData: taskData,
        projectId: prevState.seletedProjectId,
        id: id
      }
      return {
        ...prevState,
        //Old projects + new one
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function deleteTaskHandler(id) {
    setProject(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    })
  }

  function startProjectHandler() {
      setProject(prevState => {
        return {
          ...prevState,
          seletedProjectId: null
        }
      })
  }

  function cancelProjectHandler(){
    setProject(prevState => {
      return {
        ...prevState,
        seletedProjectId: undefined
      }
    })
  }

  function selectProjectHandler(id){
    setProject(prevState => {
      return {
        ...prevState,
        seletedProjectId: id
      }
    })
  }

  function addProjectHandler(projectData) {
    setProject(prevState => {
      const id = Math.random()
      const newProject = {
        ...projectData,
        id: id
      }
      return {
        ...prevState,
        //Reset id to undefined, going back to 'No project screen'
        seletedProjectId: undefined,
        //Old projects + new one
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function deleteProjectHandler() {
    setProject(prevState => {
      return {
        ...prevState,
        seletedProjectId: undefined,
        projects: project.projects.filter(p => p.id !== project.seletedProjectId)
      }
    })
  }

  let selectedProject = project.projects.find(p => p.id === project.seletedProjectId)
  let content = <SelectedProject project={selectedProject} onDeleteProject={deleteProjectHandler} onAddTask={addTaskHandler} onDeleteTask={deleteTaskHandler} tasks={project.tasks}/>
  //If undefined, select one; if null, add one
  if(project.seletedProjectId === null){
    content = <NewProject onAddProject={addProjectHandler} onCancelProject={cancelProjectHandler}/>
  }
  else if(project.seletedProjectId === undefined){
            content = <NoProject onStartProject={startProjectHandler}/>
  }

  return (
    <>
    {/* main takes all the screen height, and in end, sidebar also takes entire available height. Also add margin to top and bottom, to display both side by side, enable flexbox and gap of 8 */}
    <main className="h-screen my-8 flex gap-8">
      {/* Pass projects to sidebar to render created projects there */}
      <ProjectSidebar onStartProject={startProjectHandler} onSelectProject={selectProjectHandler} projects={project.projects}/>
      {content}
    </main>
    </>
  );
}

export default App;
