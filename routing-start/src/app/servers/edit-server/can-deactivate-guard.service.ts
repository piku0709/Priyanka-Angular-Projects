import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface CanCompomentDeactivate {
    canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}

export const canDeactivateGuard: CanDeactivateFn<CanCompomentDeactivate> = (
    component: CanCompomentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
): Observable<boolean | UrlTree> |
   Promise<boolean | UrlTree> |
   boolean |
   UrlTree => {
    return component.canDeactivate();
   }