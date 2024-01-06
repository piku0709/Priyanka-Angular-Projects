import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, take, tap } from "rxjs";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

export const canActivateGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean | UrlTree> |
   Promise<boolean | UrlTree> |
   boolean |
   UrlTree => {
    const authService = inject(AuthService);
    const router = inject(Router)
    return authService.user.pipe(
        take(1), //take only latest user value and then unsubscribe from user subscription
        map(user => {
            // return !!user; //user ? false : true
            const isAuth = !!user;
            if(isAuth) {
                return true;
            } 
            return router.createUrlTree(['/auth']);
        }), 
        // tap(isAuth => {
        //     if(!isAuth) {
        //         router.navigate(['/auth']);
        //     }            
        // })
    );
};

export const canActivateChildGuard: CanActivateChildFn = canActivateGuard;