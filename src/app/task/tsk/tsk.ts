import { Component ,Input, Output,EventEmitter, inject} from '@angular/core';
import { DatePipe } from '@angular/common';
import { singleTask } from './tsk.model';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tsk',
  imports: [Card,DatePipe],
  templateUrl: './tsk.html',
  styleUrl: './tsk.css'
})
export class Tsk {
  @Input({required:true}) tsk !: singleTask;
  // @Output() complete = new EventEmitter<string>();

  private TasksService = inject(TasksService);

  onCompleteTask(){
    //Using TasksService to remove the task
    this.TasksService.removeTask(this.tsk.id);

    //Event Emitter to notify the parent component that the task with the given id is completed
    // this.complete.emit(this.tsk.id);
  }
}
