import { Component, Input } from '@angular/core';
import { Tsk } from './tsk/tsk';

@Component({
  selector: 'app-task',
  imports: [Tsk],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  //? mark means 'selectedUserName' can be undefined
  @Input() selectedUserName?: string; 
  // Alternative: @Input() selectedUserName: string | undefined; 

  tasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]
}
