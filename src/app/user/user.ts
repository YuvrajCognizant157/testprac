import { Component ,computed,signal,Input,input, Output, EventEmitter, output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);//to get a random index from 0 to length-1
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {


  /*Input & Output Without Angular Signals*/
  //to receive data from parent component using property binding, ! mark says that it will definitely be assigned a value
  //Input decorator to mark a property as input property
  // @Input({required:true}) avatar!: string ; 
  // @Input({required:true}) name!: string ;
  // @Input({required:true}) id!: string ;

  @Input({required:true}) user!: {
    id:string;
    name:string;
    avatar:string;
  };
  @Output() select = new EventEmitter<string>(); //to create a custom event to send data to parent component using event binding
  // @Output() select = new EventEmitter(); also works
   get imagePath(){
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.user.avatar;
  }
  

  /*Input & Output With Signals*/
  //generic type input
  //input is a function
  //these signals are readonly,cant change the value inside this component , but can change in parent component
  // avatarSignal = input.required<string>();
  // nameSignal = input();
  // idSignal = input.required<string>();
  // imagePathSignalWithinput = computed(()=>'assets/users/' + this.avatarSignal());
  // select  = output<string>(); //automatic event emitter
  //--------------------------------


  /*Properties Without Angular Signals*/
  // selectedUser =  DUMMY_USERS[randomIndex];
  //getting imagePath without using Angular Signals
  // get imagePathLegacy(){
    // return 'assets/users/' + this.selectedUser.avatar;//this is a method to create dynamic paths to access properties within the same class
  // }
  //--------------------------------


  /*Properties With Angular Signals*/
  // selectedUserSignal = signal( DUMMY_USERS[randomIndex]);
  //getting imagePath using Angular Signals
  //only changes when the signal used inside it changes
  // imagePathSignal = computed(()=>'assets/users/' + this.selectedUserSignal().avatar);


  /*Event based on 'on' prefix =>meant to be started on a event*/
  onSelectUser(){
    // const randomIndexOnEvent = Math.floor(Math.random() * DUMMY_USERS.length);
    // //Data change managed by Zone.js,all components get checked for changes
    // this.selectedUser =DUMMY_USERS[randomIndexOnEvent];
    // //Data change managed by Angular Signals
    // this.selectedUserSignal.set(DUMMY_USERS[randomIndexOnEvent]);

    /*to emit the event to parent component*/
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
  }
  
}
