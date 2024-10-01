import React, { useState } from 'react';

// Sample tasks to initialize
const initialTasks = [
  {
    id: 1,
    title: 'Fix Broken Pipes',
    description: 'Repair the broken pipes in the east wing.',
    dueDate: '2024-09-15',
    priority: 'High',
    assignedMember: 'John Doe',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'Update Software',
    description: 'Update the software on all servers.',
    dueDate: '2024-09-10',
    priority: 'Medium',
    assignedMember: 'Jane Smith',
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Organize Supplies',
    description: 'Organize emergency supplies in the storage room.',
    dueDate: '2024-09-05',
    priority: 'Low',
    assignedMember: 'Alice Johnson',
    status: 'Completed',
  },
];

const TaskAssign = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    assignedMember: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const formContainerStyle = {
    marginBottom: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    cursor: 'pointer',
  };

  const taskContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const taskProgressStyle = {
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#e8f5e9',
  };

  const taskPendingStyle = {
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#fff3e0',
  };

  const taskCompletedStyle = {
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#e8eaf6',
  };

  const buttonGroupStyle = {
    marginTop: '10px',
    display: 'flex',
    gap: '10px',
  };

  const actionButtonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#2196F3',
    color: '#fff',
    cursor: 'pointer',
  };

  const deleteButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: '#f44336',
  };

  const handleAddTask = () => {
    if (newTask.title && newTask.assignedMember) {
      const newTaskWithId = {
        ...newTask,
        id: Date.now(), // Unique ID for each task
        status: 'Pending',
      };
      setTasks([...tasks, newTaskWithId]);
      resetForm();
    }
  };

  const handleEditTask = (index) => {
    const task = tasks[index];
    setNewTask({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      assignedMember: task.assignedMember,
    });
    setEditIndex(index);
    setEditMode(true);
  };

  const handleSaveEdit = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === editIndex
        ? { ...task, ...newTask }
        : task
    );
    setTasks(updatedTasks);
    setEditMode(false);
    resetForm();
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleStatusChange = (index, status) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  const resetForm = () => {
    setNewTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low',
      assignedMember: '',
    });
    setEditMode(false);
  };

  const pendingTasks = tasks.filter(task => task.status === 'Pending');
  const inProgressTasks = tasks.filter(task => task.status === 'In Progress');
  const completedTasks = tasks.filter(task => task.status === 'Completed');

  return (
    <div style={containerStyle}>
      <h2>Task Assigned</h2>

      
      
      {/* Task List */}
      <div style={taskContainerStyle}>
        {/* In Progress Tasks */}
        <div>
          <h3>In Progress Tasks</h3>
          {inProgressTasks.map((task, index) => (
            <div key={task.id} style={taskProgressStyle}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
              <p><strong>Priority:</strong> {task.priority}</p>
              <p><strong>Assigned Member:</strong> {task.assignedMember}</p>
              <p><strong>Status:</strong> {task.status}</p>
              <div style={buttonGroupStyle}>
                <button
                  onClick={() => handleStatusChange(index, 'Completed')}
                  style={actionButtonStyle}
                >
                  Mark as Completed
                </button>
                
                <button
                  onClick={() => handleDeleteTask(index)}
                  style={deleteButtonStyle}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pending Tasks */}
        <div>
          <h3>Pending Tasks</h3>
          {pendingTasks.map((task, index) => (
            <div key={task.id} style={taskPendingStyle}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
              <p><strong>Priority:</strong> {task.priority}</p>
              <p><strong>Assigned Member:</strong> {task.assignedMember}</p>
              <p><strong>Status:</strong> {task.status}</p>
              <div style={buttonGroupStyle}>
                <button
                  onClick={() => handleStatusChange(index, 'In Progress')}
                  style={actionButtonStyle}
                >
                  Mark as In Progress
                </button>
                
                <button
                  onClick={() => handleDeleteTask(index)}
                  style={deleteButtonStyle}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Completed Tasks */}
        <div>
          <h3>Completed Tasks</h3>
          {completedTasks.map((task, index) => (
            <div key={task.id} style={taskCompletedStyle}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
              <p><strong>Priority:</strong> {task.priority}</p>
              <p><strong>Assigned Member:</strong> {task.assignedMember}</p>
              <p><strong>Status:</strong> {task.status}</p>
              <div style={buttonGroupStyle}>
                <button
                  onClick={() => handleStatusChange(index, 'In Progress')}
                  style={actionButtonStyle}
                >
                  Mark as In Progress
                </button>
                
                <button
                  onClick={() => handleDeleteTask(index)}
                  style={deleteButtonStyle}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskAssign;
