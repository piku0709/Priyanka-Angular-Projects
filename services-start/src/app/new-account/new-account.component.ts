import { Component } from '@angular/core';
import { Account } from '../models/account.model';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  constructor(private accountService: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    const account = new Account(accountName, accountStatus)
    this.accountService.addAccount(account)
  }
}
