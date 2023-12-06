import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-td-assignment-start';
  subscriptions = ['Basic', 'Advanced', 'Pro']
  defaultSubscription = 'Advanced';
  submitted = false;
  user= {
    email:'',
    subscription: ''
  }

  @ViewChild('signupForm') sgnForm: NgForm = null;

  onSubmit() {
    this.submitted = true;
    console.log(this.sgnForm);
    this.user.email = this.sgnForm.value.email;
    this.user.subscription = this.sgnForm.value.subscription;

    this.sgnForm.reset();
  }
}
