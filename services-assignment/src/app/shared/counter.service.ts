import { Injectable } from "@angular/core";
import { count } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    toInactiveCount: number = 0
    toActiveCount: number= 0

    incrementInactiveToActive(){
        this.toActiveCount  = this.toActiveCount + 1
        console.log(`Inactive to active count ${this.toActiveCount}`)
    }

    incrementActiveToInactive(){
        this.toInactiveCount = this.toInactiveCount + 1
        console.log(`Active to inactive count ${this.toInactiveCount}`)
    }
}