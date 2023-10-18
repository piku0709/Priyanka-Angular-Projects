import { Injectable, inject } from "@angular/core";
import { Account } from "../models/account.model";
import { LoggingService } from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private loggingService: LoggingService = inject(LoggingService)){}
    accounts: Account[] = [
        new Account('Master Account','active'),
        new Account('Test Account','inactive'),
        new Account('Hidden Account','unknown')
      ];

      addAccount(account: Account){
        this.accounts.push(account)
        this.loggingService.logStatusChange(account.getStatus())
      }

      updateAccount(id: number, status: string) {
        this.accounts[id].setStatus(status);
        this.loggingService.logStatusChange(status)
      }

      getAccounts() {
        return this.accounts
      }
}