import { Component } from "@angular/core";

@Component({
    selector:'app-header',//to avoid clash with builtin components we use app- prefix
    // standalone:true, --default true for Ang>19
    templateUrl:'./header.html',
    styleUrls:['./header.css']//create the css file then link here for each component
})

export class HeaderComponent { //we export class so that it can be imported in other files
  title = 'EasyTask Header Component From app.html';
}