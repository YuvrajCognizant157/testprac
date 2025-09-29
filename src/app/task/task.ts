import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  //? mark means 'selectedUserName' can be undefined
  @Input() selectedUserName?: string; 
  // Alternative: @Input() selectedUserName: string | undefined; 
}
