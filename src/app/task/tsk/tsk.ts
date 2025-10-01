import { Component ,Input, Output,EventEmitter} from '@angular/core';

import { singleTask } from './tsk.model';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-tsk',
  imports: [Card],
  templateUrl: './tsk.html',
  styleUrl: './tsk.css'
})
export class Tsk {
  @Input({required:true}) tsk !: singleTask;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.tsk.id);
  }
}
