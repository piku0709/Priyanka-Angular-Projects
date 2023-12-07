import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'forms-reactive-start';
  genders = ['male', 'female'];
  signupForm: FormGroup = null;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    })

    // this.signupForm.valueChanges.subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // )

    this.signupForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );
    this.signupForm.setValue({
      'userData': {
        'username': 'Piku',
        'email': 'piku.210@gmail.com',
      },
      'gender': 'male',
      'hobbies': []
    })

    this.signupForm.patchValue({
      'userData': {
        'username': 'Piku1'
      }
    })
    //throw new Error('Method not implemented.');
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // getControls() {
  //   return (<FormArray>this.signupForm.get('hobbies')).controls;
  // }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  
  //returns example nameIsForbidden: true
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) != -1) {
      return {'nameIdForbidden': true};
    }
    return null; //Angular will not work if you pass the value as {'nameIsForbidden' : false}
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
