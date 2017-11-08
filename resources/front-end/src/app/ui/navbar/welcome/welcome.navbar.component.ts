import {Component, ElementRef, ViewChild} from '@angular/core';
import {ScrollService} from '../../../services/scroll.service';
import {ManageVisibility} from '../../directives/manage-visibility.class';
import {
  navbarBgAnimation, navbarLinkAnimation, navbarLogoAnimation,
  navbarLowerLinkAnimation, navbarNavAnimation
} from './welcome.navbar.animations';

@Component({
  selector: 'welcome-navbar',
  templateUrl: './welcome.navbar.component.html',
  styleUrls: ['./welcome.navbar.component.scss'],
  animations: [
    navbarBgAnimation(),
    navbarLinkAnimation(),
    navbarLogoAnimation(),
    navbarNavAnimation(),
    navbarLowerLinkAnimation()
  ]
})
export class WelcomeNavbarComponent extends ManageVisibility {
  @ViewChild('navbar')navbar: ElementRef;
  private elHeight: number;
  public location = 'above';

  constructor(public el: ElementRef, public scroll: ScrollService) {
    super(el, scroll);
  }

  ngAfterViewInit():void {
    this.elHeight = this.navbar.nativeElement.offsetHeight;

    const trigger = this.getTrigger();
    this.location = trigger < this.scroll.pos ? 'below' : 'above';

    super.ngAfterViewInit();
  }

  manageVisibility() {
    const trigger = this.getTrigger();

    if (!this.eivVisible && this.scroll.pos >= trigger) {
      this.eivVisible = true;
      this.location = 'below';
    }

    if(this.eivVisible && this.scroll.pos < trigger) {
      this.eivVisible = false;
      this.location = 'above';
    }
  }

  private getTrigger(): number {
    const winHeight = this.scroll.getWinHeight();
    return winHeight / 2;
  }
}
