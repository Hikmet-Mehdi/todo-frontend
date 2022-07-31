import { gql, useMutation, useQuery } from '@apollo/client';

const GET_TASK_LIST = gql`
  query GetTasks {
    getTasks {
      uuid
      title
      description
      code
      createdAt
      updatedAt
    }
  }
`;

export const useTasksQuery = () => useQuery(GET_TASK_LIST);

const CREATE_TASK = gql`
  mutation CreateTask($taskCreateInput: TaskCreateInput!) {
    createTask(taskCreateInput: $taskCreateInput) {
      uuid
      title
      description
      code
      createdAt
      updatedAt
    }
  }
`;

export const useCreateTaskMutation = () => useMutation(CREATE_TASK);
