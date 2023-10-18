import { Component, inject, OnInit } from '@angular/core';
import { Account } from './models/account.model';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  private accountService: AccountService
  accounts: Account[] = []
  
  constructor() {
    this.accountService = inject(AccountService)
  }

  ngOnInit(): void {
      this.accounts = this.accountService.getAccounts()
  }
}
