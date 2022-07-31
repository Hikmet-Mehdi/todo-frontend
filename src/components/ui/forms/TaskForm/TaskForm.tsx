import { Form } from './TaskForm.styled';
import { Button, Input, Textarea } from '../../../common';
import { useFormik } from 'formik';
import { TaskModel } from '../../../../types';
import { useCreateTaskMutation } from 'hooks/data';
import * as yup from 'yup';

interface TaskValues extends Partial<TaskModel> {}

const TASK_VALIDATE_SCHEMA = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  code: yup.string().required(),
});

export const TaskFrom = () => {
  const taskFromik = useFormik<TaskValues>({
    initialValues: {
      title: '',
      description: '',
      code: '',
    },
    validationSchema: TASK_VALIDATE_SCHEMA,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (value) => handleCreateTask(value),
  });

  const {
    values,
    touched,
    errors,
    resetForm,
    handleBlur,
    handleChange,
    handleSubmit,
  } = taskFromik;

  const [createTask] = useCreateTaskMutation();
  const handleCreateTask = ({ title, code, description }: TaskValues) => {
    createTask({
      variables: {
        taskCreateInput: {
          title,
          code,
          description,
        },
      },
      refetchQueries: ['GetTasks'],
    });
    resetForm();
  };

  return (
    <Form
      onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        label="Title"
        name="title"
        value={values.title}
        onBlur={handleBlur}
        onChange={handleChange}
        hasError={errors.title ? touched.title : false}
        errorMessage={touched.title ? errors.title : undefined}
      />
      <Textarea
        label="Description"
        name="description"
        value={values.description ?? ''}
        onBlur={handleBlur}
        onChange={handleChange}
        hasError={errors.description ? touched.description : false}
        errorMessage={touched.description ? errors.description : undefined}
      />
      <Input
        label="Code"
        name="code"
        value={values.code}
        onBlur={handleBlur}
        onChange={handleChange}
        hasError={errors.code ? touched.code : false}
        errorMessage={touched.code ? errors.code : undefined}
      />
      <Button
        text="Create"
        type="submit"
        onSubmit={() => {
          handleSubmit();
        }}
        onClick={() => {
          handleSubmit();
        }}
      />
    </Form>
  );
};
