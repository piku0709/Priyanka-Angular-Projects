import { Component, Input, inject } from '@angular/core';
import { Account } from '../models/account.model';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: Account = new Account('test', 'new')
  @Input() id: number = 0;

  private accountService: AccountService;

  constructor(){
    this.accountService = inject(AccountService)
  }

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status)
  }
}
