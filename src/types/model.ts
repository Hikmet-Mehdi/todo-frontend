export interface TaskModel {
  uuid: string;
  title: string;
  description: string | null;
  code: string;
  createdAt: Date;
  updatedAt: Date;
}
