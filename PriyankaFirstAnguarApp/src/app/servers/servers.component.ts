import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]', //app-servers is an attribute here
  //selector: '.app-servers', //app-servers is a class here
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus = "No server was created!";
  serverName: string = "Test server"
  serverCreated : boolean= false;
  userName: string = ""
  servers = ['TestServer', 'TestServer 2']
  displayPassword = false
  timestamps = []
  logs = []

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000)
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server was created and name is ${this.serverName}`
  }

  onUpdateServerName(event: Event){
    //console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value
  }

  onResetUser() {
    this.userName = ''
  }

  userEmpty(){
    if(this.userName.trim().length > 0) {
      return false
    } else {
      return true
    }
  }

  onDisplayDetailsClick(){
    this.displayPassword = !this.displayPassword
    this.logs.push(new Date())
    //this.logs.push(this.logs.length + 1)
  }
}
