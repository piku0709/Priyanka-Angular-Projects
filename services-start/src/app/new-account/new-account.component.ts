import { Component, Output, EventEmitter } from '@angular/core';
import { Account } from '../models/account.model';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountService: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    const account = new Account(accountName, accountStatus)
    this.accountService.addAccount(account)
  }
}
