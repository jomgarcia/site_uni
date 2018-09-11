import { Component } from '@angular/core';
import { Router} from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


    constructor(private router: Router){
      this.router.events.subscribe((evt)=>{
        var eventName = evt.constructor.name;
        if(eventName=="NavigationEnd"){
          $('.navbar-collapse').collapse('hide');
          $(window).scrollTop(0);
      }
    });
  }



}
