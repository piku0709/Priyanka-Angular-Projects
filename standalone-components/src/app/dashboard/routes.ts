import { Route } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { TodayComponent } from "./today/today.component";

export const DATSHBOARD_ROUTES: Route[] = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'today',
        component: TodayComponent
    } 
]