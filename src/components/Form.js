import React, { useState, useEffect } from 'react';

const Form = props => {
  const [ task, setTask ] = useState('');
  const [ assignee, setAssignee ] = useState('');
  const [ status, setStatus ] = useState('incomplete');
  const [ difficulty, setDifficulty ] = useState('');

  const handleChange = e => {
    setTask(e.target.value);
    setAssignee(e.target.value);
    setStatus(e.target.value);
    setDifficulty(e.target.value);
  }

  return (
    <form>
      <label>To Do Item: </label>
      <textarea type="text" onChange={handleChange} />
      <label>Assigned To: </label>
      <input type="name" onChange={handleChange} />
      <label>Status: </label>
      <select>
        <option value="incomplete" onChange={handleChange} >Incomplete</option>
        <option value="complete" onChange={handleChange} >Complete</option>
      </select>
      <label>Difficulty: </label>
      <input type="number" onChange={handleChange} min="1" max="5" />
    </form>
  )

}

export default Form;