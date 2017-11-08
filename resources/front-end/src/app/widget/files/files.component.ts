import {AfterViewInit, Component} from '@angular/core';

@Component({
    selector: 'files-widget',
    templateUrl: './files.template.html'
})
export class FilesWidget implements AfterViewInit {
  widgetOptions = {
    show: {
      reload: true,
      fullScreen: true,
      close: false
    },
    expanded: true,
    fullScreen: false,
    load: '/api/latest-uploads',
    title: 'Latest Uploads'
  };
    constructor() { };

    ngAfterViewInit(): void {

    }

}