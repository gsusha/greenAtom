import { Task } from './task';

export interface Answer {
  id: number;
  answer: string;
  task: Task;
}
