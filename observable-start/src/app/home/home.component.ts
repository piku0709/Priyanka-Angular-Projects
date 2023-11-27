import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  private firstObsSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(()=> {
        observer.next(count);
        if(count == 5) observer.complete();
        if(count > 3) {
          observer.error(new Error('count is greater than 3 !'));
        }
        count++;
      }, 1000);
    });

    // customIntervalObservable.pipe(map((data: any) => {
    //   return `Round: ${(data + 1)}`;
    // }));

    this.firstObsSubscription = 
    customIntervalObservable
    .pipe(filter((data: any) => {
      return data > 0;
    }),
      map((data: any) => {
      return `Round: ${(data + 1)}`;
    }))
    .subscribe( data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message)
    }, () => {
      console.log('completed !!!');
    })
    //throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
    //throw new Error('Method not implemented.');
  }

}
