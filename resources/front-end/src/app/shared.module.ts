import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import {ErrorComponent} from './error/error.component';
import { LogisterComponent } from './auth/logister/logister.component';
import {UiModule} from './ui/ui.module';
import {DragulaModule} from 'ng2-dragula';
import {WidgetModule} from './widget/widget.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiModule,
  ],
  declarations: [
    ErrorComponent,
    LogisterComponent
  ],
  exports: [
    ReactiveFormsModule,
    UiModule,
    LogisterComponent,
    CommonModule,
    DragulaModule,
    WidgetModule
  ]
})
export class SharedModule {

}