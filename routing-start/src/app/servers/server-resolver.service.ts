import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "./servers.service";
import { Server } from "./server.model";
export const serverResolver: ResolveFn<Server> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<Server> | Promise<Server> | Server => {
    return inject(ServersService).getServer(+route.params['id'])
}