import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent{
  @Input() users: string[] = [];

  constructor(private usersService: UsersService){}

  onSetToInactive(id: number) {
    this.usersService.addToInactiveUsers(id)
  }
}
