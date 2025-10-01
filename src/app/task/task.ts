import { Component, Input } from '@angular/core';
import { Tsk } from './tsk/tsk';
import { NewTask } from './new-task/new-task';
import { TasksService } from './tasks.service';

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

  /*declare a instance of the TaskService directly tight*/ //coupling*/
  //private tasksService = new TasksService();


  /*dependency injection of the service*/
  //giving the access modifier, automatically creates a property of the service in our component class
  constructor(private tasksService: TasksService){}


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId!);
  }

  onCreateTask(taskData:{title:string;summary:string;date:string}){
    this.tasksService.addTask(taskData,this.userId!);
    this.openAddTask = false;
  }

  onCancelAddTask(){
    this.openAddTask = false;
  }

  onStartNewTask(){
    this.openAddTask = true;
  }

  /* W/O Service */
  // get selectedUserTasks() {
  //   return this.tasks.filter((task) => task.userId === this.userId);
  // }

  // onCompleteTask(id:string) {
  //   //removing the completed task from the tasks array
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }
  
  // onCreateTask(taskData:{title:string;summary:string;date:string}){ {
  //   this.tasks.push({
  //       id: 't' + (this.tasks.length + 1),
  //       userId: this.userId!,
  //       title: taskData.title,
  //       summary: taskData.summary,
  //       dueDate: taskData.date,
  //     });
  //     this.openAddTask = false;
  //   }
  // }

  //No longer is usage because we are using the NewTask component to add a new task
  // onAddNewTask(){
  //   this.openAddTask = true;
  // }  
}
