import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {ErrorComponent} from "./error/error.component";
import {AuthGuard} from './auth/auth.guard';


const ROUTES: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuard] },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomeModule' },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }