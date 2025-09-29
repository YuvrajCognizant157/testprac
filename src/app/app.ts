import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Task } from "./task/task";

@Component({
  selector: 'app-root',//which element to look in the html file to replace it with the component template
  imports: [HeaderComponent, User, Task], //To import other custome components so that they get recognized in angular

  templateUrl: './app.html',//markup of the component
  styleUrl: './app.css'//css file of the component
})
export class App {
  protected readonly title = signal('EasyTask Application with Angular');
  selectedUserNameApp:string = "u1" ;

  //pass all dummy users to app component
  users = DUMMY_USERS;

  onSelectUser(id:string){
    this.selectedUserNameApp = this.users.find(user => user.id === id)!?.name;
  }
}
