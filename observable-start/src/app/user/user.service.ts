import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    activatedEmitter: EventEmitter<boolean> =  new EventEmitter<boolean>();
}