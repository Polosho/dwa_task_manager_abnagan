import { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';
import TaskList from './Tasklist';

function App() {
    const [tasks, setTasks] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState({});

    const addTask = ({ description }) => {
        const newTask = { description };

        // Replace this with async request to server
        setTasks([...tasks, newTask]);

        setIsAdding(false);
    };

    const editTask = ({ index, description }) => {
        const newTask = { description };
        const newTasks = [...tasks];
        newTasks[index] = newTask;
        setTasks(newTasks);

        setIsEditing(false);
    };

    const deleteTask = ({ index }) => {
        if (confirm('Are you sure you want to delete task?')) {
            // Replace this with async request to server
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
        }
    };

    const showAddForm = () => {
        setTask({});
        setIsAdding(true);
        setIsEditing(false);
    };

    const showEditForm = ({ index, task }) => {
        setTask({ index, ...task });
        setIsAdding(false);
        setIsEditing(true);
    };

    const cancelTask = () => {
        setIsAdding(false);
        setIsEditing(false);
    };

    return (
        <>
            <h1>Task Manager</h1>
            <button onClick={showAddForm}>Add Task</button>
            {isAdding && <AddTaskForm action={addTask} cancelAction={cancelTask} />}
            {isEditing && <EditTaskForm task={task} action={editTask} cancelAction={cancelTask} />}
            <TaskList
                tasks={tasks}
                editAction={showEditForm}
                deleteAction={deleteTask}
            />
        </>
    );
}

export default App;
