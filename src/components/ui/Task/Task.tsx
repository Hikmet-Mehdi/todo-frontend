import { TaskModel } from '../../../types';
import { TaskWrapper } from './Task.styled';
import { Typography } from '../../common';
interface TaskProps {
  task: TaskModel;
}
export const Task = ({ task }: TaskProps) => {
  return (
    <TaskWrapper>
      <Typography.Header level={4}>{task.title}</Typography.Header>
      <Typography.Paragraph>{task.description}</Typography.Paragraph>
    </TaskWrapper>
  );
};
