import { ClipboardText, Trash } from 'phosphor-react';
import styles from './Task.module.css';


interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TaksProps {
  tasks: ITask[];
  onCompleteTask: (taskId: string) => void;
  onRemoveTask: (taskId: string) => void;
}

export function Task({tasks, onCompleteTask, onRemoveTask}: TaksProps) {

  function handleCheckTask(taskId: string) {
    onCompleteTask(taskId);
  };

  function handleRemoveTask(taskId: string) {
    onRemoveTask(taskId);
  };

  const totalTaskCretead = tasks.length;
  const totalTasksDone = tasks.reduce(
    (acc, cur) => acc + Number(cur.isCompleted),
    0,
  );

  return (
    <div className={styles.task}>
      <div className={styles.containerTask}>
        <p className={styles.createdTasks}>
          Tarefas criadas {" "}
          <span>{totalTaskCretead}</span>
        </p>
        <p className={styles.completedTasks}>
          Concluidas {" "}
          <span>
            <>
              {
                totalTaskCretead === 0
                ? totalTaskCretead : `${totalTasksDone} de ${totalTaskCretead}`
              }
            </>
          </span>
        </p>
      </div>

      {tasks.length === 0 ? (
        <div className={styles.taskEmpty}>
          <ClipboardText size={56} />
          <div>
            <p className={styles.taskTitleEmpty}> Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <main className={styles.itemTasksContainer}>
          {tasks.map((task) => {
            return (
              <div key={task.id} className={styles.taskContent}>
              <input 
                type="checkbox"  
                className={styles.checkBoxInput} 
                checked={task.isCompleted}
                onChange={() => handleCheckTask(task.id)}
               />
              <p className={task.isCompleted ? styles.titleTaskCompleted : styles.titleTask}>
                {task.title}
              </p>
    
              <Trash 
                size={24} 
                role="button" 
                className={styles.buttoTrash} 
                onClick={() => handleRemoveTask(task.id)}
              />
    
            </div>
            )
          })}
        </main>
      )}
    </div>
  )
}