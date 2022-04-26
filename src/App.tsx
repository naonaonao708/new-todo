import React,{ useState } from 'react';
import './App.css';
import { Task } from './componets/Types';
import TaskInput from './componets/TaskInput';
import TaskList from './componets/TaskList';


const initialState: Task[] = [
  {
    id: 2,
    title: 'Hello World',
    done: false
  },
  {
    id: 1,
    title: 'Start React Todo App by Ts',
    done: false
  }
]

const App:React.FC = () => {
  const [tasks, setTasks] = useState(initialState)
    return (
      <div className='todo-container'>
        <div className='todo-component'>
          <TaskInput setTasks={setTasks} tasks={tasks} />
          <TaskList setTasks={setTasks} tasks={tasks} />
        </div>
      </div>
    );
}

export default App;