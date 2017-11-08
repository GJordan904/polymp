import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'widget',
  templateUrl: './widget.template.html',
  animations: [
    trigger('state', [
      state('expanded', style({
        height: '*'
      })),
      state('collapsed', style({
        height: 0,
        overflow: 'hidden'
      })),
      state('fullscreen', style({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        'z-index': 10000,
        'background-color': 'rgba(51,51,51,.95)'
      })),
      transition('expanded <=> collapsed', animate('350ms ease-in-out')),
      transition('* => fullscreen', [
        style({
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transform: 'scale(0)'
        }),
        animate('350ms ease-in-out', style({transform: 'scale(1)'}))
      ]),
      transition('fullscreen => expanded', [
        animate('300ms ease-out'),
        style({
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        })
      ])
    ])
  ]
})
export class WidgetComponent implements AfterViewInit, OnInit {
  @Input('options') options: any;
  @Output('loadCB') loadCB = new EventEmitter<any>();
  public state: string;
  private settings: any;
  private DEFAULTS = {
    show: {
      reload: true,
      fullScreen: true,
      close: true
    },
    expanded: true,
    fullScreen: false,
    load: false,
    title: 'Widget'
  };

  constructor(private http: HttpClient) { };

  ngOnInit(): void {
    this.settings = {
      ...this.DEFAULTS,
      ...this.options
    };
    this.state = this.settings.expanded ? 'expanded' : 'collapsed';
  }

  ngAfterViewInit(): void {
    if (this.settings.load) {
      this.loadData(this.settings.load);
    }
  }

  changeState(state: string): void {
    this.state = state;
  }

  expand(): void {
    this.state = 'expanded'
  }

  fullscreen(): void {
    this.state = 'fullscreen';
  }

  restore(): void {
    this.state = 'expanded';
  }

  loadData(load: string | Array<string & number>) {
    let timeout = 0;
    let url = '';
    if (load instanceof Array) {
      url = load[0];
      timeout = load[1];
    } else {
      url = load;
    }
    setTimeout(this.http.get(url)
      .subscribe((data) => {
        this.loadCB.emit(data);
      }), timeout);
  }
}