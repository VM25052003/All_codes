import Button from "./Button"

export default function ProjectSidebar(props) {
    return <>
    {/*Takes up 1/3 of available width, and top-bottom padding. Prefixed with md to apply on bigger screens, along with rounded corners on right*/}
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        {/* Bottom margin */}
        <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">Your Projects</h2>
        <div>
            {/* On bigger size, apply default text size*/}
            <Button onClick={props.onStartProject}>+ Add Project</Button>
            <ul className="mt-8"> 
                {props.projects.map(project => {
                    let classes = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                    //Highlight project
                    if(project.id === props.selectedProjectId) classes += ' bg-stone-800 text-stone-200'
                    else classes += ' text-stone-400'
                    return(
                        <li key={project.id}>
                            <button onClick={() => props.onSelectProject(project.id)} className={classes}>{project.title}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    </aside>
    </>
}