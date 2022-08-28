import { Task } from './components/Task';
import { Header } from './components/Header';
import { Input } from './components/Input';

import  styles from './styles/App.module.css'
import './styles/global.css';
import { useState } from 'react';

interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
};

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  // criando uma nova task
  function addNewTask(newTaskTitle: string) {
    const id = new Date().getTime().toString();
    const onNewTask: ITask = {id, title: newTaskTitle, isCompleted: false};
    setTasks((state) => [...state, onNewTask])
  };

  // colocando uma task como concluida
  function handlecheckBoxTask(taskId: string) {
    setTasks((state) => {
      return state.map((itemTasks) => {
        if (itemTasks.id === taskId) {
          return {
            ...itemTasks,
            isCompleted: !itemTasks.isCompleted,
          };
        }
        return itemTasks;
      });
    });
  };

  //removendo uma task
  function handleRemoveTask(taskId: string) {
    setTasks((state) => {
      return state.filter((itemTasks) => itemTasks.id !== taskId);
    })
  };

  return (
    <div className={styles.app}>
      <Header />
      <Input onNewTask={addNewTask}  />
      <Task tasks={tasks} onCompleteTask={handlecheckBoxTask} onRemoveTask={handleRemoveTask}/>
    </div>
  );
};

export default App;
