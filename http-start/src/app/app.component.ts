import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedPosts: Post[]= [];
  isFetching = false;
  error:any = null;
  errorSub: Subscription = new Subscription();

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe( errorMessage => {
      this.error = errorMessage;
    })
    this.loadPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.crateAndStorePost(postData.title, postData.content); 
  }

  onFetchPosts() {
    this.loadPosts();
  }

  onClearPosts() {
   this.postsService.deletePosts().subscribe(responseData => {
      console.log(responseData);
      this.loadedPosts = [];
    });
  }

  private loadPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe( posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error)
    });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

}
