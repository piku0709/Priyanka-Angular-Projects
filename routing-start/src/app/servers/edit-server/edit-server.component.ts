import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, UrlTree } from '@angular/router';
import { CanCompomentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanCompomentDeactivate {
  server: {id: number, name: string, status: string} = {id: 0, name: "", status: ""};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        console.log(`allowEdit ${queryParams['allowEdit']}`)
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false
      }
    );
    this.route.fragment.subscribe();
    let id = +this.route.snapshot.params['id'];
    //subscribe to route params to update the id if params changed
    this.route.params.subscribe(
      (params: Params) => {
        console.log(`id ${params['id']}`)
        id = +params['id'];
      }
    );
    this.server = this.serversService.getServer(id) as  {id: number, name: string, status: string};
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.allowEdit) {
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
    !this.changesSaved) {
      return confirm('Do you want to discard the changes?')
    } else {
      return true;
    }
  }

}

