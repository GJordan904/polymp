import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Dashboard } from './dashboard.component';
import {SharedModule} from '../shared.module';
import { HomeComponent } from './home/home.component';
import { TransferComponent } from './transfer/transfer.component';
import { FilesComponent } from './files/files.component';
import { ShareComponent } from './share/share.component';
import { TransferResolverService } from './transfer/transfer-resolver.service';


export const routes = [
  {
    path: '', component: Dashboard, children: [
      { path: 'home', component: HomeComponent },
      { path: 'files', component: FilesComponent },
      { path: 'share', component: ShareComponent },
      { path: 'transfer', component: TransferComponent, resolve: { stats: TransferResolverService } },
      { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [
    Dashboard,
    HomeComponent,
    TransferComponent,
    FilesComponent,
    ShareComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    TransferResolverService
  ]
})
export class DashboardModule {
  static routes = routes;
}
