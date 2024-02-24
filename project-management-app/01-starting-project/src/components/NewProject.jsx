import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject(props) {
  const modal = useRef()
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function saveProjectHandler() {
    const extractedTitle = title.current.value;
    const extractedDesc = description.current.value;
    const extractedDueDate = dueDate.current.value;

    // Instead of directly calling onAddProject, you should create an object and then call onAddProject
    const projectData = {
      title: extractedTitle,
      description: extractedDesc,
      dueDate: extractedDueDate,
    };

    //Any extracted value is empty, display error
    if(extractedTitle.trim() === '' || extractedDesc.trim() === '' || extractedDueDate.trim() === ''){
      //Display error modal
      modal.current.open()
      return;
    }

    // Call the prop function inside an appropriate event or handler
    props.onAddProject(projectData);
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Ok">
      <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
      <p className='text-stone-400 mb-4'>Oops... you forgot to enter a value</p>
      <p className='text-stone-400 mb-4'>Provide a valid Input Value</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={props.onCancelProject} className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button onClick={saveProjectHandler} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
    </>
  );
}