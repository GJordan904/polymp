import { NgModule } from '@angular/core';
import {LatestUploads} from './latest-uploads/latest-uploads.component';
import {Ng2TableModule} from '../libs/ng2-table/components/ng-table-module';
import {WidgetComponent} from './widget.component';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    Ng2TableModule,
    NgbModule,
  ],
  declarations: [
    WidgetComponent,
    LatestUploads
  ],
  exports: [
    WidgetComponent,
    LatestUploads
  ]
})
export class WidgetModule {
}
