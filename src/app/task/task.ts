import { Component, Input } from '@angular/core';
import { Tsk } from './tsk/tsk';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-task',
  imports: [Tsk,NewTask],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  //? mark means 'selectedUserName' can be undefined
  @Input() userId ?:string;
  @Input() selectedUserName?: string;
  // Alternative: @Input() selectedUserName: string | undefined;
  openAddTask ?:boolean =false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
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
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id:string) {
    //removing the completed task from the tasks array
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddNewTask(){
    if(this.openAddTask == false){
      this.openAddTask = true;
    }
  }

  onCancelAddTask(){
    this.openAddTask = false;
  }

  onCreateTask(taskData:{title:string;summary:string;date:string}){ {
    this.tasks.push({
        id: 't' + (this.tasks.length + 1),
        userId: this.userId!,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
      });
      this.openAddTask = false;
    }
}
}
