import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { HeaderComponent } from './app/header/header';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  //this is the code that gets executed when the application starts


  //Not the typical way to bootstrap a component
  //This is just to show how to bootstrap a different component
  //In real applications, we usually bootstrap the root component only
  //Angular builds a component tree starting from the root component
//bootstrapApplication(HeaderComponent);
//*Better way is to add app-header selector in the app.html file*