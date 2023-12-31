import { Component, ComponentFactoryResolver } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    constructor(
        private authService: AuthService, 
        private router: Router,
        private componentFactoryResolver: ComponentFactoryResolver){}

    isLoginMode = true;
    isLoading = false;
    error: string = null;

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if(!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;
        if(this.isLoginMode) {
            authObs = this.authService.login(email, password)
        } else {
            authObs = this.authService.signup(email, password); 
        }
        authObs.subscribe(  
            {
                next: (resData: any) => {
                    console.log(resData);
                    this.isLoading = false;
                    this.router.navigate(['/recipes'])
                }, 
                error: (errorMessage : any)=>{
                    this.error = errorMessage;
                    this.showErrorAlert(errorMessage);
                    this.isLoading = false;  
                }
            }  
        );   
        form.reset();
    }

    onHandleError() {
        this.error = null;
    }

    //creating dynamic alert component
    private showErrorAlert(message: string) {
        const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        
    }

}