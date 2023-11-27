import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    //activatedEmitter: EventEmitter<boolean> =  new EventEmitter<boolean>();

    activatedEmitter = new Subject<boolean>()
}