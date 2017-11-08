import { trigger, state, style, animate, transition } from '@angular/animations';

export function navbarBgAnimation() {

  return trigger('animNavBg', [
    state('above', style({ background: 'rgba(45, 60, 65, 0.75)' })),
    state('below', style({ background: 'rgba(52, 51, 70, 1)' })),
    transition('above => below', animate('1s ease-in')),
    transition('below => above', animate('1s ease-in'))
  ])
}

export function navbarLogoAnimation() {

  return trigger('animNavLogo', [
    state('above', style({
      transform: 'translateX(0)'
    })),
    state('below', style({
      transform: 'translateX(-200%)'
    })),
    transition('above => below', animate('500ms 350ms ease-in')),
    transition('below => above', animate('500ms ease-in'))
  ])
}

export function navbarLinkAnimation() {

  return trigger('animNavLinks', [
    state('above', style({
      transform: 'scale(1)'
    })),
    state('below', style({
      transform: 'scale(0)'
    })),
    transition('above => below', animate('350ms ease-in')),
    transition('below => above', animate('350ms 500ms ease-in'))
  ])
}

export function navbarLowerLinkAnimation() {

  return trigger('animLowerLinks', [
    state('above', style({
      opacity: '0'
    })),
    state('below', style({
      opacity: '1'
    })),
    transition('above => below', animate('550ms 1.75s ease-in')),
    transition('below => above', animate('550ms ease-in'))
  ])
}

export function navbarNavAnimation() {

  return trigger('animNavNav', [
    state('below', style({width: '100%'})),
    transition(':enter', [
      style({width: '0%'}),
      animate('500ms 1.75s ease-in')
    ]),
    transition(':leave', [
      animate('500ms ease-in', style({width: '0%'}))
    ])
  ])
}