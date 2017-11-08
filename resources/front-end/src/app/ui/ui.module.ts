import { NgModule } from '@angular/core';
import {CardTabsComponent} from './card-tabs/card-tabs.component';
import {CardTabComponent} from './card-tabs/card-tab.component';
import {CommonModule} from '@angular/common';
import { ElInViewDirective } from './directives/el-in-view.directive';
import { AnimInViewComponent } from './anim-in-view/anim-in-view.component';
import { ParallaxDirective } from './directives/parallax/parallax.directive';
import { WelcomeNavbarComponent } from './navbar/welcome/welcome.navbar.component';
import {RouterModule} from '@angular/router';
import {RoundProgressConfig, RoundProgressModule} from 'angular-svg-round-progressbar';
import { DropzonePreviewComponent } from './dropzone/dropzone-preview.component';
import { DropzoneDirective } from './dropzone/dropzone.directive';
import {BytesTransform} from './pipes/bytes-transform.pipe';
import { DropzoneService } from './dropzone/dropzone.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RoundProgressModule
  ],
  declarations: [
    CardTabsComponent,
    CardTabComponent,
    ElInViewDirective,
    AnimInViewComponent,
    ParallaxDirective,
    WelcomeNavbarComponent,
    DropzoneDirective,
    DropzonePreviewComponent,
    BytesTransform,
  ],
  exports: [
    CardTabsComponent,
    CardTabComponent,
    ElInViewDirective,
    AnimInViewComponent,
    ParallaxDirective,
    WelcomeNavbarComponent,
    RoundProgressModule,
    DropzoneDirective,
    DropzonePreviewComponent,
    BytesTransform,
  ],
  providers: [DropzoneService]
})
export class UiModule {
  constructor(private circleConfig: RoundProgressConfig) {
    circleConfig.setDefaults({
      color: '#8884FF',
      background: '#5C5D8D',
      responsive: true,
      rounded: true,
      animation: 'easeInOutQuad'
    })
  }
}
