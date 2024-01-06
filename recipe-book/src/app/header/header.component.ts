import { Component} from '@angular/core'
import { DataStorageService } from '../shared/data-storage-service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector:'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    isAuthenticated: boolean = false;
    private userAuthSubs: Subscription;

    constructor(
        private dataStorageService: DataStorageService, 
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.userAuthSubs = this.authService.user.subscribe(user => {
           this.isAuthenticated = !!user ; // !user ? false: true;
        });
    }
    
    onSaveData() {
        this.dataStorageService.storeRecipes()
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy() {
        this.userAuthSubs.unsubscribe();
    }

}