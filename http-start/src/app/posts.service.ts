import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams, HttpEventType} from '@angular/common/http'
import { Post } from './post.model';
import { map, catchError, tap} from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private http: HttpClient){}

    error = new Subject<string>();

    crateAndStorePost(title: string, content: string) {
        const postData: Post = {
            title: title,
            content: content
        }
        return this.http.post<{ name: string }>(
            'https://ng-complete-guide-e1737-default-rtdb.firebaseio.com/posts.json', 
            postData,{observe: 'response'}
          ).subscribe(responseData => {
            console.log(responseData);
          }, error => {
            this.error.next(error.message);
          }); 
    }

    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.set('print', 'pretty'); //HttpParams is immutable
        searchParams = searchParams.set('custom', 'key');
        return this.http.get<{[key: string]: Post}>(
        'https://ng-complete-guide-e1737-default-rtdb.firebaseio.com/posts.json',
        {
            headers: new HttpHeaders({'custom-Headers': 'Hello'}),
            params: searchParams,
            responseType: 'json'
        })
        .pipe(
            map((responseData) => {
                const postsArray: Post[] = [];
                for(const key in responseData) {
                    if(responseData.hasOwnProperty(key)) {
                        postsArray.push({ ...responseData[key], id : key });
                    }
                }
                return postsArray;
        }),
        catchError(errorRes => {
            return throwError(errorRes);
        })
        );
    }

    deletePosts() {
        return this.http.delete(
        'https://ng-complete-guide-e1737-default-rtdb.firebaseio.com/posts.json',
        {
            observe: 'events',
            responseType: 'text'
        })
        .pipe(tap(event => {
            console.log(event);
            if(event.type === HttpEventType.Sent) {
            
            }
            if(event.type === HttpEventType.Response) {
                console.log(event.body);
            }
        }))
    }
}