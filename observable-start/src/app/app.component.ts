import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  userActivated: boolean =  false;
  private activatedSubs: Subscription = new Subscription();

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.activatedSubs = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    })
    //throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this.activatedSubs.unsubscribe();
    //throw new Error('Method not implemented.');
  }

}
