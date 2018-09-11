import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


@Component ({
  selector: 'my-app',
  template:  `<router-outlet></router-outlet>`,
  })
export class MyAppComponent implements OnInit {
         constructor(private router: Router) {}

ngOnInit (){
  this.router.events.subscribe((evt)=>{
    if (!(evt instanceof NavigationEnd)){
          return;
    }
    window.scrollTo(0, 0)
  });
}
}
