import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  //FormsModule is required to import so that we can use two-way binding in the template using ngModel directive
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {

  @Input({required:true}) userId!:string;
  @Input({required: true}) openAddTaskStatus: boolean =true;
  @Output() closeAddTaskDialog = new EventEmitter<void>();

  // @Output() addTaskEvent = new EventEmitter<{title:string;summary:string;date:string}>();//creating a output event emitter to send the new task data to the parent component

  /* props w/o signals */
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';


  //another method of injecting the service using 'inject' function
  private tasksService = inject(TasksService);

  /* props with signals */
  //no need to change anything on the html or template
  // enteredTitleSignal = signal('');
  // enteredSummarySignal = signal('');
  // enteredDateSignal= signal('');

  onCloseAddTask(){
    /*
    *'openAddTaskStatus' : one taken input from the parent component to open the add task section
    *'cancelAddTask' : other is output event emitter to notify the parent component to close the add task section
    */
    this.openAddTaskStatus = false ;
    this.closeAddTaskDialog.emit();
  }

  onSubmit() {
    //Using service to add the new task
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },this.userId)
    this.closeAddTaskDialog.emit();

    /* W/O service*/
    //emitting the event to the parent component with the new task data
    // this.addTaskEvent.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    // })
  }
}
