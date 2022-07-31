import { useTasksQuery } from '../../hooks/data';
import { Task } from '../../components/ui/Task';
import { TaskModel } from '../../types';
import { TaskFrom } from '../../components/ui/forms/TaskForm';

export const TodoList = () => {
  const { data: tasksData } = useTasksQuery();

  return (
    <div>
      <TaskFrom />

      <div>
        {tasksData &&
          tasksData?.getTasks.map((task: TaskModel) => (
            <Task key={task.uuid} task={task} />
          ))}
      </div>
    </div>
  );
};
