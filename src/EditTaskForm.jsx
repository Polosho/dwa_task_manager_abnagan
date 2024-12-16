/* eslint-disable react/prop-types */
import { useState } from 'react';

function EditTaskForm({ task, action, cancelAction }) {
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ index: task.index, description });
  };

  return (
    <form>
      <h2>Edit Task</h2>
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

export default EditTaskForm