function TaskList({task, editAction, deleteAction}){
    return(
        <>
        <h2>Tasks</h2>
        <ul>
            {task.map((task,index) =>(
                <li key={index}>
                    {task.description}&nbsp;
                    <button onClick={() => editAction({ index,task})}>Edit</button>
                    <button onClick={() => deleteAction({index})}>Delete</button>

                </li>
            ))}
        </ul>
        </>
    )
}
export default TaskList;