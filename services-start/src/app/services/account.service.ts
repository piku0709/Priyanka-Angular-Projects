import { Account } from "../models/account.model";

export class AccountService {
    accounts: Account[] = [
        new Account('Master Account','active'),
        new Account('Test Account','inactive'),
        new Account('Hidden Account','unknown')
      ];

      addAccount(account: Account){
        this.accounts.push(account)
      }

      updateAccount(id: number, status: string) {
        this.accounts[id].setStatus(status);
        console.log(JSON.stringify(this.accounts))
      }

      getAccounts() {
        return this.accounts
      }
}