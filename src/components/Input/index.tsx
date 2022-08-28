import styles from './Input.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Task } from '../Task';

interface TaskProps {
  onNewTask: (title: string) => void;
}

export function Input({ onNewTask }: TaskProps) {
  const [newTasks, setNewTasks] = useState('');
  
  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    onNewTask(newTasks);
    setNewTasks("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTasks(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatorio!');
  }

  const isNewTask = newTasks.length === 0;

  
  return(
    <>
      <div className={styles.containerInput}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={newTasks}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
        />
        <button onClick={handleNewTask} type="submit" disabled={isNewTask}>
          Criar
          <PlusCircle size={20} />
        </button>
      </div>
    </>
  )
}