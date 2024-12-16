// AddTaskForm.jsx
import { useState } from 'react';

function AddTaskForm({ action, cancelAction }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ description });
  };

  return (
    <form>
      <h2>Add Task</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      &nbsp;
      <button onClick={handleSubmit}>Save</button>&nbsp;
      <button onClick={cancelAction}>Cancel</button>
    </form>
  );
}

export default AddTaskForm;
