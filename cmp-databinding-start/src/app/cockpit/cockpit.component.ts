import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  @Output("serverCreatedEvent") serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); 
  @Output("bluePrintCreatedEvent") bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  //newServerName = 'test';
  //newServerContent = 'test content';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  ngOnInit(): void {
  }

}
