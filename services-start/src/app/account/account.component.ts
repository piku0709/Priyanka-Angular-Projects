import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Account } from '../models/account.model';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: Account = new Account('test', 'new')
  @Input() id: number = 0;

  private loggingService: LoggingService;
  private accountService: AccountService;

  constructor(){
    this.loggingService = inject(LoggingService)
    this.accountService = inject(AccountService)
  }

  onSetTo(status: string) {
    console.log(`change status of account id ${this.id}`)
    this.accountService.updateAccount(this.id, status)
    this.loggingService.logStatusChange(status)
  }
}
